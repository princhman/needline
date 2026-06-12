import { env } from "$env/dynamic/private";
import { graphql } from "../../../gql";
import { getLinearClient } from "./client";

const GetLabelsQuery = graphql(`
  query labels(
    $issueFilter: IssueLabelFilter
    $projectFilter: ProjectLabelFilter
  ) {
    issueLabels(first: 1, filter: $issueFilter) {
      nodes {
        name
        id
      }
    }
    projectLabels(first: 1, filter: $projectFilter) {
      nodes {
        name
      }
    }
  }
`);

const CreateProjectLabelQuery = graphql(`
  mutation ProjectLabelCreate($input: ProjectLabelCreateInput!) {
    projectLabelCreate(input: $input) {
      success
    }
  }
`);

const CreateIssueLabelQuery = graphql(`
  mutation IssueLabelCreate($input: IssueLabelCreateInput!) {
    issueLabelCreate(input: $input) {
      success
      issueLabel {
        id
      }
    }
  }
`);

export const createOrGetLabel = async () => {
  const client = await getLinearClient();

  if (!client) {
    throw new Error("Failed to get linear client for creating/fetching label");
  }

  const labelName = env.LABEL_NAME;

  const result = await client.request(GetLabelsQuery, {
    issueFilter: { name: { in: [labelName] } },
    projectFilter: { name: { in: [labelName] } },
  });

  if (result.projectLabels.nodes.length === 0) {
    const projectLabelResult = await client.request(CreateProjectLabelQuery, {
      input: { name: labelName },
    });
  }

  if (result.issueLabels.nodes.length === 0) {
    const issueLabelResult = await client.request(CreateIssueLabelQuery, {
      input: { name: labelName },
    });
    return issueLabelResult.issueLabelCreate.issueLabel.id;
  }

  return result.issueLabels.nodes[0].id;
};
