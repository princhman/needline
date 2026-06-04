import { getLinearClient } from "$lib/server/linear/client";
import { graphql } from "../../../gql";

const GetCustomersQuery = graphql(`
  query Customer($filter: CustomerFilter, $first: Int) {
    customers(filter: $filter, first: $first) {
      nodes {
        id
        name
      }
    }
  }
`);

export const getCustomer = async (name: string) => {
  const client = await getLinearClient();

  if (!client) {
    return null;
  }

  const data = await client.request(GetCustomersQuery, {
    filter: {
      name: {
        containsIgnoreCaseAndAccent: name,
      },
    },
    first: 1,
  });

  return data.customers.nodes[0];
};
