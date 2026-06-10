import { form, command } from "$app/server";
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
      need {
        id
        body
        priority
      }
    }
  }
`);

const UpdateNeedQuery = graphql(`
  mutation CustomerNeedUpdate(
    $customerNeedUpdateId: String!
    $input: CustomerNeedUpdateInput!
  ) {
    customerNeedUpdate(id: $customerNeedUpdateId, input: $input) {
      success
      need {
        id
        body
        priority
      }
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
        status: state {
          type
        }
      }
    }
  }
`);

const DeleteNeedQuery = graphql(`
  mutation CustomerNeedDelete($customerNeedDeleteId: String!) {
    customerNeedDelete(id: $customerNeedDeleteId) {
      success
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

    const priority = isUrgent ? 1 : 0;
    const result = await client.request(CreateNeedQuery, {
      input: {
        issueId: issue.issueCreate.issue!.id,
        createAsUser: user.name,
        customerId: customer?.id,
        body: body,
        priority: priority,
      },
    });

    return {
      ...issue.issueCreate.issue!,
      needLevel: priority + 1,
      currentCustomerNeed: result.customerNeedCreate.need,
      itemType: "issue" as const,
    };
  },
);

export const upvoteNeed = form(
  v.object({
    itemId: v.string(),
    why: v.string(),
    isUrgent: v.optional(v.boolean(), false),
    customerNeedId: v.optional(v.string()),
    initialPriority: v.optional(
      v.pipe(v.union([v.literal("0"), v.literal("1")]), v.transform(Number)),
    ),
    itemType: v.picklist(["issue", "project"]),
  }),
  async ({
    itemId,
    why,
    isUrgent,
    customerNeedId,
    initialPriority,
    itemType,
  }) => {
    const client = await getLinearClient();
    const user = getUserFromSession();

    if (!client || !user) {
      return null;
    }

    const customer = await getCustomer(user.company);
    const body = [
      `${why}`,
      customer == null ? `**Company:** ${user.company}` : null,
      `**Email:** ${user.email}`,
      "_Submitted via Needline._",
    ]
      .filter(Boolean)
      .join("\n\n");

    const priority = isUrgent ? 1 : 0;
    if (customerNeedId && initialPriority != undefined) {
      const need = await client.request(UpdateNeedQuery, {
        customerNeedUpdateId: customerNeedId,
        input: {
          body: body,
          priority: priority,
        },
      });
      return {
        needLevelDelta: priority - initialPriority,
        ...need.customerNeedUpdate.need,
      };
    } else {
      let need;
      if (itemType === "issue") {
        need = await client.request(CreateNeedQuery, {
          input: {
            issueId: itemId,
            createAsUser: user.name,
            customerId: customer?.id,
            body: body,
            priority: priority,
          },
        });
      } else {
        need = await client.request(CreateNeedQuery, {
          input: {
            projectId: itemId,
            createAsUser: user.name,
            customerId: customer?.id,
            body: body,
            priority: priority,
          },
        });
      }

      return {
        needLevelDelta: priority + 1,
        ...need.customerNeedCreate.need,
      };
    }
  },
);

export const deleteUpvote = command(v.string(), async (customerNeedId) => {
  const client = await getLinearClient();
  if (!client) {
    return null;
  }
  const result = await client.request(DeleteNeedQuery, {
    customerNeedDeleteId: customerNeedId,
  });

  return result.customerNeedDelete.success;
});
