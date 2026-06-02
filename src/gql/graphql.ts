/* eslint-disable */
/** Internal type. DO NOT USE DIRECTLY. */
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** Internal type. DO NOT USE DIRECTLY. */
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
/** Input for creating a customer need linked to an issue or project. Either issueId or projectId must be provided. */
export type CustomerNeedCreateInput = {
  /** The UUID of an existing attachment to associate with this need as its source. */
  attachmentId?: string | null | undefined;
  /** A URL to create an attachment from and associate with this customer need as its source. */
  attachmentUrl?: string | null | undefined;
  /** The body content of the need in Markdown format. Cannot be used together with bodyData. */
  body?: string | null | undefined;
  /** [Internal] The body content of the need as a Prosemirror document JSON string. Cannot be used together with body. */
  bodyData?: unknown;
  /** The UUID of an existing comment to associate with this need for additional context. */
  commentId?: string | null | undefined;
  /** Create the need attributed to an external user with the provided name. This option is only available to OAuth applications creating needs in `actor=app` mode. */
  createAsUser?: string | null | undefined;
  /** The time at which the customer need was created (e.g. if importing from another system). Must be a time in the past. If none is provided, the backend will generate the time as now. */
  createdAt?: unknown;
  /** The external system ID of the customer this need belongs to. Cannot be used together with customerId. */
  customerExternalId?: string | null | undefined;
  /** The UUID of the customer this need belongs to. Cannot be used together with customerExternalId. */
  customerId?: string | null | undefined;
  /** Avatar URL for the external user specified in `createAsUser`. Can only be used in conjunction with `createAsUser`. This option is only available to OAuth applications creating needs in `actor=app` mode. */
  displayIconUrl?: string | null | undefined;
  /** The identifier in UUID v4 format. If none is provided, the backend will generate one. */
  id?: string | null | undefined;
  /** The issue to link this need to. Accepts a UUID or issue identifier (e.g., 'LIN-123'). Either issueId or projectId must be provided. */
  issueId?: string | null | undefined;
  /** Whether the customer need is important or not. 0 = Not important, 1 = Important. */
  priority?: number | null | undefined;
  /** [INTERNAL] The project to link this need to. Either issueId or projectId must be provided. */
  projectId?: string | null | undefined;
};

/** Input for creating a new issue. At minimum, a team must be specified. A title is required unless a template is provided. All other fields are optional and will use defaults from the team or template if not specified. */
export type IssueCreateInput = {
  /** The identifier of the user to assign the issue to. */
  assigneeId?: string | null | undefined;
  /** The time at which the issue was completed (e.g. if importing from another system). Must be a time in the past and after createdAt. Cannot be provided with an incompatible workflow state. */
  completedAt?: unknown;
  /** Create issue as a user with the provided name. This option is only available to OAuth applications creating issues in `actor=app` mode. */
  createAsUser?: string | null | undefined;
  /** The time at which the issue was created (e.g. if importing from another system). Must be a time in the past. If none is provided, the backend will generate the time as now. */
  createdAt?: unknown;
  /** The cycle associated with the issue. */
  cycleId?: string | null | undefined;
  /** The identifier of the agent user to delegate the issue to. */
  delegateId?: string | null | undefined;
  /** The issue description in markdown format. */
  description?: string | null | undefined;
  /** [Internal] The issue description as a Prosemirror document. */
  descriptionData?: unknown;
  /** Provide an external user avatar URL. Can only be used in conjunction with the `createAsUser` options. This option is only available to OAuth applications creating comments in `actor=app` mode. */
  displayIconUrl?: string | null | undefined;
  /** The date at which the issue is due. */
  dueDate?: unknown;
  /** The estimated complexity of the issue. */
  estimate?: number | null | undefined;
  /** The identifier in UUID v4 format. If none is provided, the backend will generate one. */
  id?: string | null | undefined;
  /** [Internal] Whether this issue should inherit shared access from its parent issue. Set to false to opt out of automatic shared access inheritance when creating a sub-issue. */
  inheritsSharedAccess?: boolean | null | undefined;
  /** The identifiers of the issue labels associated with this ticket. */
  labelIds?: Array<string> | null | undefined;
  /** The ID of the last template applied to the issue. */
  lastAppliedTemplateId?: string | null | undefined;
  /** The identifier of the parent issue. Can be a UUID or issue identifier (e.g., 'LIN-123'). */
  parentId?: string | null | undefined;
  /** Whether the passed sort order should be preserved. */
  preserveSortOrderOnCreate?: boolean | null | undefined;
  /** The priority of the issue. 0 = No priority, 1 = Urgent, 2 = High, 3 = Medium, 4 = Low. */
  priority?: number | null | undefined;
  /** The position of the issue related to other issues, when ordered by priority. */
  prioritySortOrder?: number | null | undefined;
  /** The project associated with the issue. */
  projectId?: string | null | undefined;
  /** The project milestone associated with the issue. */
  projectMilestoneId?: string | null | undefined;
  /** The comment the issue is referencing. */
  referenceCommentId?: string | null | undefined;
  /** The identifiers of the releases to associate with this issue. */
  releaseIds?: Array<string> | null | undefined;
  /** [Internal] The time at which an issue will be considered in breach of SLA. */
  slaBreachesAt?: unknown;
  /** [Internal] The time at which the issue's SLA was started. */
  slaStartedAt?: unknown;
  /** The SLA day count type for the issue. Whether SLA should be business days only or calendar days (default). */
  slaType?: SlaDayCountType | null | undefined;
  /** The position of the issue related to other issues. */
  sortOrder?: number | null | undefined;
  /** The comment the issue is created from. */
  sourceCommentId?: string | null | undefined;
  /** [Internal] The pull request comment the issue is created from. */
  sourcePullRequestCommentId?: string | null | undefined;
  /** The team state of the issue. */
  stateId?: string | null | undefined;
  /** The position of the issue in parent's sub-issue list. */
  subIssueSortOrder?: number | null | undefined;
  /** The identifiers of the users subscribing to this ticket. */
  subscriberIds?: Array<string> | null | undefined;
  /** The identifier of the team associated with the issue. */
  teamId: string;
  /** The identifier of a template the issue should be created from. If other values are provided in the input, they will override template values. */
  templateId?: string | null | undefined;
  /** The title of the issue. */
  title?: string | null | undefined;
  /** Whether to use the default template for the team. When set to true, the default template of this team based on user's membership will be applied. */
  useDefaultTemplate?: boolean | null | undefined;
};

/** Which day count to use for SLA calculations. */
export type SlaDayCountType =
  | 'all'
  | 'onlyBusinessDays';

export type CustomersQueryVariables = Exact<{ [key: string]: never; }>;


export type CustomersQuery = { customers: { nodes: Array<{ id: string, name: string }> } };

export type GetNeedlineIssuesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetNeedlineIssuesQuery = { issues: { nodes: Array<{ id: string, identifier: string, title: string, url: string, team: { id: string }, labels: { nodes: Array<{ name: string, id: string }> } }> } };

export type CustomerNeedCreateMutationVariables = Exact<{
  input: CustomerNeedCreateInput;
}>;


export type CustomerNeedCreateMutation = { customerNeedCreate: { success: boolean } };

export type IssueCreateMutationVariables = Exact<{
  input: IssueCreateInput;
}>;


export type IssueCreateMutation = { issueCreate: { success: boolean, issue: { id: string, identifier: string, title: string, url: string } | null } };


export const CustomersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Customers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"customers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<CustomersQuery, CustomersQueryVariables>;
export const GetNeedlineIssuesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetNeedlineIssues"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"issues"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"labels"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"containsIgnoreCase"},"value":{"kind":"StringValue","value":"needline","block":false}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"identifier"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"team"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"labels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetNeedlineIssuesQuery, GetNeedlineIssuesQueryVariables>;
export const CustomerNeedCreateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CustomerNeedCreate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerNeedCreateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"customerNeedCreate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}}]}}]}}]} as unknown as DocumentNode<CustomerNeedCreateMutation, CustomerNeedCreateMutationVariables>;
export const IssueCreateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"IssueCreate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"IssueCreateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"issueCreate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"issue"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"identifier"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]} as unknown as DocumentNode<IssueCreateMutation, IssueCreateMutationVariables>;