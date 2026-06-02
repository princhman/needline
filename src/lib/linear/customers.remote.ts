import { query } from "$app/server";
import { getLinearClient } from "$lib/server/linear/client";
import { graphql } from "../../gql";

const GetCustomersQuery = graphql(`
  query Customers {
    customers {
      nodes {
        id
        name
      }
    }
  }
`);

export const getCustomers = query(async () => {
  const client = await getLinearClient();

  if (!client) {
    return null;
  }

  const data = await client.request(GetCustomersQuery);

  return data.customers.nodes;
});
