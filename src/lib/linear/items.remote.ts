import { getRequestEvent, query } from "$app/server";
import { getLinearClient } from "$lib/server/linear/client";
import { getCustomer } from "$lib/server/linear/customers";
import { decryptUserCookie } from "$lib/utils/cookies";
import { graphql } from "../../gql";

const GetNeedlineItemsQuery = graphql(`
  query GetNeedlineIssues($customerId: ID) {
    issues(filter: { labels: { name: { containsIgnoreCase: "needline" } } }) {
      nodes {
        id
        title
        needs {
          nodes {
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
        status: state {
          type
        }
      }
    }
    projects(filter: { labels: { name: { containsIgnoreCase: "needline" } } }) {
      nodes {
        id
        title: name
        needs {
          nodes {
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
        status {
          type
        }
      }
    }
  }
`);

export const getItems = query(async () => {
  const client = await getLinearClient();
  const { cookies } = getRequestEvent();

  if (!client) {
    return null;
  }

  const user = decryptUserCookie(cookies.get("user") ?? "");
  const customer = user ? await getCustomer(user.company) : null;

  const data = await client.request(GetNeedlineItemsQuery, {
    customerId: customer?.id ?? null,
  });

  const items = [
    ...data.issues.nodes.map((node) => ({
      ...node,
      itemType: "issue" as const,
    })),
    ...data.projects.nodes.map((node) => ({
      ...node,
      itemType: "project" as const,
    })),
  ];

  return items.map((item) => {
    const { needs, currentCustomerNeeds, ...issueWithoutNeeds } = item;
    return {
      ...issueWithoutNeeds,
      needLevel: item.needs.nodes
        .flatMap((i) => i.priority + 1)
        .reduce((a, b) => a + b, 0),
      currentCustomerNeed: currentCustomerNeeds.nodes.at(0) ?? null, // assume for now that there is only one same customer request per issue
    };
  });
});
