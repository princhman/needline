import { getRequestEvent, query } from "$app/server";
import { getLinearClient } from "$lib/server/linear/client";
import { getCustomer } from "$lib/server/linear/customers";
import { decryptUserCookie } from "$lib/utils/cookies";
import { graphql } from "../../gql";

const GetNeedlineIssuesQuery = graphql(`
  query GetNeedlineIssues($customerId: ID) {
    issues(filter: { labels: { name: { containsIgnoreCase: "needline" } } }) {
      nodes {
        id
        identifier
        title
        needs {
          nodes {
            customer {
              name
            }
            priority
          }
        }

        currentCustomerNeeds: needs(
          first: 1
          filter: { customer: { id: { eq: $customerId } } }
        ) {
          nodes {
            id
            priority
            body
          }
        }
      }
    }
  }
`);

export const getIssues = query(async () => {
  const client = await getLinearClient();
  const { cookies } = getRequestEvent();

  if (!client) {
    return null;
  }

  const user = decryptUserCookie(cookies.get("user") ?? "");
  const customer = user ? await getCustomer(user.company) : null;

  const data = await client.request(GetNeedlineIssuesQuery, {
    customerId: customer?.id ?? null,
  });

  return data.issues.nodes.map((issue) => {
    const { needs, currentCustomerNeeds, ...issueWithoutNeeds } = issue;
    return {
      ...issueWithoutNeeds,
      needLevel: issue.needs.nodes
        .flatMap((i) => i.priority + 1)
        .reduce((a, b) => a + b, 0),
      currentCustomerNeed: currentCustomerNeeds.nodes[0] ?? null, // assume for now that there is only one same customer request per issue
    };
  });
});
