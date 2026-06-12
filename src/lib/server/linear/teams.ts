import { graphql } from "../../../gql";
import { getLinearClient } from "./client";

const GetAvailableTeams = graphql(`
  query Teams {
    teams(first: 1) {
      nodes {
        id
      }
    }
  }
`);

export const getTeam = async () => {
  const client = await getLinearClient();

  if (!client) throw new Error("No client available when there should be");

  const result = await client.request(GetAvailableTeams);
  if (!result.teams.nodes[0])
    throw new Error("No team available, make sure you selected them in Linear");
  return result.teams.nodes[0].id;
};
