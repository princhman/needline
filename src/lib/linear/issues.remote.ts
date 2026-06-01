import { query } from "$app/server";
import { getLinearClient } from "$lib/server/linear/client";
import { graphql } from "../../gql";

const GetNeedlineIssuesQuery = graphql(`
  query GetNeedlineIssues {
    issues(filter: { labels: { name: { containsIgnoreCase: "needline" } } }) {
      nodes {
        id
        identifier
        title
        url
      }
    }
  }
`);

export const getIssues = query(async () => {
  const client = await getLinearClient();

  if (!client) {
    return null;
  }

  const data = await client.request(GetNeedlineIssuesQuery);

  return data.issues.nodes;
});
