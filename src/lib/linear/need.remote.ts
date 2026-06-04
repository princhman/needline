import { form } from "$app/server";
import * as v from "valibot";
import { graphql } from "../../gql";
import { getLinearClient } from "$lib/server/linear/client";
import { env } from "$env/dynamic/private";
import { getUserFromSession } from "$lib/server/company/auth";
import { getCustomer } from "$lib/server/linear/customers";

const CreateNeedQuery = graphql(`
  mutation CustomerNeedCreate($input: CustomerNeedCreateInput!) {
    customerNeedCreate(input: $input) {
      success
    }
  }
`);

const CreateIssueQuery = graphql(`
  mutation IssueCreate($input: IssueCreateInput!) {
    issueCreate(input: $input) {
      success
      issue {
        id
        identifier
        title
        url
      }
    }
  }
`);

export const createNeed = form(
  v.object({
    what: v.pipe(v.string(), v.minLength(1)),
    why: v.string(),
    isUrgent: v.optional(v.boolean(), false),
  }),
  async ({ what, why, isUrgent }) => {
    const client = await getLinearClient();
    const user = getUserFromSession();

    if (!client || !user) {
      return null;
    }

    const issue = await client.request(CreateIssueQuery, {
      input: {
        teamId: env.TEAM_ID,
        title: what,
        labelIds: [env.LABEL_ID],
      },
    });

    if (!issue.issueCreate.issue!) {
      return;
    }

    const customer = await getCustomer(user.company);
    const body = [
      `${what}`,
      `${why}`,
      customer == null ? `**Company:** ${user.company}` : null,
      `**Email:** ${user.email}`,
      "_Submitted via Needline._",
    ]
      .filter(Boolean)
      .join("\n\n"); // only if customer doesn't exist add company name

    const need = await client.request(CreateNeedQuery, {
      input: {
        issueId: issue.issueCreate.issue!.id,
        createAsUser: user.name,
        customerId: customer?.id,
        body: body,
        priority: isUrgent ? 1.0 : 0.0,
      },
    });

    return need;
  },
);
