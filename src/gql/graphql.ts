/* eslint-disable */
/** Internal type. DO NOT USE DIRECTLY. */
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** Internal type. DO NOT USE DIRECTLY. */
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
/** Activity collection filtering options. */
export type ActivityCollectionFilter = {
  /** Compound filters, all of which need to be matched by the activity. */
  and?: Array<ActivityCollectionFilter> | null | undefined;
  /** Comparator for the created at date. */
  createdAt?: DateComparator | null | undefined;
  /** Filters that needs to be matched by all activities. */
  every?: ActivityFilter | null | undefined;
  /** Comparator for the identifier. */
  id?: IdComparator | null | undefined;
  /** Comparator for the collection length. */
  length?: NumberComparator | null | undefined;
  /** Compound filters, one of which need to be matched by the activity. */
  or?: Array<ActivityCollectionFilter> | null | undefined;
  /** Filters that needs to be matched by some activities. */
  some?: ActivityFilter | null | undefined;
  /** Comparator for the updated at date. */
  updatedAt?: DateComparator | null | undefined;
  /** Filters that the activity's user must satisfy. */
  user?: UserFilter | null | undefined;
};

/** Activity filtering options. */
export type ActivityFilter = {
  /** Compound filters, all of which need to be matched by the activity. */
  and?: Array<ActivityFilter> | null | undefined;
  /** Comparator for the created at date. */
  createdAt?: DateComparator | null | undefined;
  /** Comparator for the identifier. */
  id?: IdComparator | null | undefined;
  /** Compound filters, one of which need to be matched by the activity. */
  or?: Array<ActivityFilter> | null | undefined;
  /** Comparator for the updated at date. */
  updatedAt?: DateComparator | null | undefined;
  /** Filters that the activity's user must satisfy. */
  user?: UserFilter | null | undefined;
};

/** Attachment collection filtering options. */
export type AttachmentCollectionFilter = {
  /** Compound filters, all of which need to be matched by the attachment. */
  and?: Array<AttachmentCollectionFilter> | null | undefined;
  /** Comparator for the created at date. */
  createdAt?: DateComparator | null | undefined;
  /** Filters that the attachments creator must satisfy. */
  creator?: NullableUserFilter | null | undefined;
  /** Filters that needs to be matched by all attachments. */
  every?: AttachmentFilter | null | undefined;
  /** Comparator for the identifier. */
  id?: IdComparator | null | undefined;
  /** Comparator for the collection length. */
  length?: NumberComparator | null | undefined;
  /** Compound filters, one of which need to be matched by the attachment. */
  or?: Array<AttachmentCollectionFilter> | null | undefined;
  /** Filters that needs to be matched by some attachments. */
  some?: AttachmentFilter | null | undefined;
  /** Comparator for the source type. */
  sourceType?: SourceTypeComparator | null | undefined;
  /** Comparator for the subtitle. */
  subtitle?: NullableStringComparator | null | undefined;
  /** Comparator for the title. */
  title?: StringComparator | null | undefined;
  /** Comparator for the updated at date. */
  updatedAt?: DateComparator | null | undefined;
  /** Comparator for the url. */
  url?: StringComparator | null | undefined;
};

/** Attachment filtering options. */
export type AttachmentFilter = {
  /** Compound filters, all of which need to be matched by the attachment. */
  and?: Array<AttachmentFilter> | null | undefined;
  /** Comparator for the created at date. */
  createdAt?: DateComparator | null | undefined;
  /** Filters that the attachments creator must satisfy. */
  creator?: NullableUserFilter | null | undefined;
  /** Comparator for the identifier. */
  id?: IdComparator | null | undefined;
  /** Compound filters, one of which need to be matched by the attachment. */
  or?: Array<AttachmentFilter> | null | undefined;
  /** Comparator for the source type. */
  sourceType?: SourceTypeComparator | null | undefined;
  /** Comparator for the subtitle. */
  subtitle?: NullableStringComparator | null | undefined;
  /** Comparator for the title. */
  title?: StringComparator | null | undefined;
  /** Comparator for the updated at date. */
  updatedAt?: DateComparator | null | undefined;
  /** Comparator for the url. */
  url?: StringComparator | null | undefined;
};

/** Comparator for booleans. */
export type BooleanComparator = {
  /** Equals constraint. */
  eq?: boolean | null | undefined;
  /** Not equals constraint. */
  neq?: boolean | null | undefined;
};

/** Comment filtering options. */
export type CommentCollectionFilter = {
  /** Compound filters, all of which need to be matched by the comment. */
  and?: Array<CommentCollectionFilter> | null | undefined;
  /** Comparator for the comment's body. */
  body?: StringComparator | null | undefined;
  /** Comparator for the created at date. */
  createdAt?: DateComparator | null | undefined;
  /** Filters that the comment's document content must satisfy. */
  documentContent?: NullableDocumentContentFilter | null | undefined;
  /** Filters that needs to be matched by all comments. */
  every?: CommentFilter | null | undefined;
  /** Comparator for the identifier. */
  id?: IdComparator | null | undefined;
  /** [Internal] Filters that the comment's initiative must satisfy. */
  initiative?: NullableInitiativeFilter | null | undefined;
  /** Filters that the comment's issue must satisfy. */
  issue?: NullableIssueFilter | null | undefined;
  /** Comparator for the collection length. */
  length?: NumberComparator | null | undefined;
  /** Filters that the comment's customer needs must satisfy. */
  needs?: CustomerNeedCollectionFilter | null | undefined;
  /** Compound filters, one of which need to be matched by the comment. */
  or?: Array<CommentCollectionFilter> | null | undefined;
  /** Filters that the comment parent must satisfy. */
  parent?: NullableCommentFilter | null | undefined;
  /** [Internal] Filters that the comment's project must satisfy. */
  project?: NullableProjectFilter | null | undefined;
  /** Filters that the comment's project update must satisfy. */
  projectUpdate?: NullableProjectUpdateFilter | null | undefined;
  /** Filters that the comment's reactions must satisfy. */
  reactions?: ReactionCollectionFilter | null | undefined;
  /** Filters that needs to be matched by some comments. */
  some?: CommentFilter | null | undefined;
  /** Comparator for the updated at date. */
  updatedAt?: DateComparator | null | undefined;
  /** Filters that the comment's creator must satisfy. */
  user?: UserFilter | null | undefined;
};

/** Comment filtering options. */
export type CommentFilter = {
  /** Compound filters, all of which need to be matched by the comment. */
  and?: Array<CommentFilter> | null | undefined;
  /** Comparator for the comment's body. */
  body?: StringComparator | null | undefined;
  /** Comparator for the created at date. */
  createdAt?: DateComparator | null | undefined;
  /** Filters that the comment's document content must satisfy. */
  documentContent?: NullableDocumentContentFilter | null | undefined;
  /** Comparator for the identifier. */
  id?: IdComparator | null | undefined;
  /** [Internal] Filters that the comment's initiative must satisfy. */
  initiative?: NullableInitiativeFilter | null | undefined;
  /** Filters that the comment's issue must satisfy. */
  issue?: NullableIssueFilter | null | undefined;
  /** Filters that the comment's customer needs must satisfy. */
  needs?: CustomerNeedCollectionFilter | null | undefined;
  /** Compound filters, one of which need to be matched by the comment. */
  or?: Array<CommentFilter> | null | undefined;
  /** Filters that the comment parent must satisfy. */
  parent?: NullableCommentFilter | null | undefined;
  /** [Internal] Filters that the comment's project must satisfy. */
  project?: NullableProjectFilter | null | undefined;
  /** Filters that the comment's project update must satisfy. */
  projectUpdate?: NullableProjectUpdateFilter | null | undefined;
  /** Filters that the comment's reactions must satisfy. */
  reactions?: ReactionCollectionFilter | null | undefined;
  /** Comparator for the updated at date. */
  updatedAt?: DateComparator | null | undefined;
  /** Filters that the comment's creator must satisfy. */
  user?: UserFilter | null | undefined;
};

/** [Internal] Comparator for content. */
export type ContentComparator = {
  /** [Internal] Contains constraint. */
  contains?: string | null | undefined;
  /** [Internal] Not-contains constraint. */
  notContains?: string | null | undefined;
};

/** Customer filtering options. */
export type CustomerFilter = {
  /** Compound filters, all of which need to be matched by the customer. */
  and?: Array<CustomerFilter> | null | undefined;
  /** Comparator for the created at date. */
  createdAt?: DateComparator | null | undefined;
  /** Comparator for the customer's domains. */
  domains?: StringArrayComparator | null | undefined;
  /** Comparator for the customer's external IDs. */
  externalIds?: StringArrayComparator | null | undefined;
  /** Comparator for the identifier. */
  id?: IdComparator | null | undefined;
  /** Comparator for the customer name. */
  name?: StringComparator | null | undefined;
  /** Filters that the customer's needs must satisfy. */
  needs?: CustomerNeedCollectionFilter | null | undefined;
  /** Compound filters, one of which need to be matched by the customer. */
  or?: Array<CustomerFilter> | null | undefined;
  /** Filters that the customer owner must satisfy. */
  owner?: NullableUserFilter | null | undefined;
  /** Comparator for the customer generated revenue. */
  revenue?: NumberComparator | null | undefined;
  /** Comparator for the customer size. */
  size?: NumberComparator | null | undefined;
  /** Comparator for the customer slack channel ID. */
  slackChannelId?: StringComparator | null | undefined;
  /** Filters that the customer's status must satisfy. */
  status?: CustomerStatusFilter | null | undefined;
  /** Filters that the customer's tier must satisfy. */
  tier?: CustomerTierFilter | null | undefined;
  /** Comparator for the updated at date. */
  updatedAt?: DateComparator | null | undefined;
};

/** Customer needs filtering options. */
export type CustomerNeedCollectionFilter = {
  /** Compound filters, all of which need to be matched by the customer needs. */
  and?: Array<CustomerNeedCollectionFilter> | null | undefined;
  /** Filters that the need's comment must satisfy. */
  comment?: NullableCommentFilter | null | undefined;
  /** Comparator for the created at date. */
  createdAt?: DateComparator | null | undefined;
  /** Filters that the need's customer must satisfy. */
  customer?: NullableCustomerFilter | null | undefined;
  /** Filters that needs to be matched by all customer needs. */
  every?: CustomerNeedFilter | null | undefined;
  /** Comparator for the identifier. */
  id?: IdComparator | null | undefined;
  /** Filters that the need's issue must satisfy. */
  issue?: NullableIssueFilter | null | undefined;
  /** Comparator for the collection length. */
  length?: NumberComparator | null | undefined;
  /** Compound filters, one of which need to be matched by the customer needs. */
  or?: Array<CustomerNeedCollectionFilter> | null | undefined;
  /** Comparator for the customer need priority. */
  priority?: NumberComparator | null | undefined;
  /** Filters that the need's project must satisfy. */
  project?: NullableProjectFilter | null | undefined;
  /** Filters that needs to be matched by some customer needs. */
  some?: CustomerNeedFilter | null | undefined;
  /** Comparator for the updated at date. */
  updatedAt?: DateComparator | null | undefined;
};

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

/** Customer filtering options. */
export type CustomerNeedFilter = {
  /** Compound filters, all of which need to be matched by the customer need. */
  and?: Array<CustomerNeedFilter> | null | undefined;
  /** Filters that the need's comment must satisfy. */
  comment?: NullableCommentFilter | null | undefined;
  /** Comparator for the created at date. */
  createdAt?: DateComparator | null | undefined;
  /** Filters that the need's customer must satisfy. */
  customer?: NullableCustomerFilter | null | undefined;
  /** Comparator for the identifier. */
  id?: IdComparator | null | undefined;
  /** Filters that the need's issue must satisfy. */
  issue?: NullableIssueFilter | null | undefined;
  /** Compound filters, one of which need to be matched by the customer need. */
  or?: Array<CustomerNeedFilter> | null | undefined;
  /** Comparator for the customer need priority. */
  priority?: NumberComparator | null | undefined;
  /** Filters that the need's project must satisfy. */
  project?: NullableProjectFilter | null | undefined;
  /** Comparator for the updated at date. */
  updatedAt?: DateComparator | null | undefined;
};

/** Input for updating a customer need. Supports reassigning the customer, moving to a different issue or project, changing priority, and updating body content. */
export type CustomerNeedUpdateInput = {
  /** When true and priority is also set, applies the same priority update to all other needs from the same customer on the same issue or project. */
  applyPriorityToRelatedNeeds?: boolean | null | undefined;
  /** A URL to create a new attachment from and set as the source for this customer need. Replaces any existing manually-added attachment. */
  attachmentUrl?: string | null | undefined;
  /** The updated body content of the need in Markdown format. Set to null to clear the body. Cannot be used together with bodyData. */
  body?: string | null | undefined;
  /** [Internal] The updated body content of the need as a Prosemirror document JSON string. Set to null to clear the body. Cannot be used together with body. */
  bodyData?: unknown;
  /** The external system ID of the customer to reassign this need to. Cannot be used together with customerId. */
  customerExternalId?: string | null | undefined;
  /** The UUID of the customer to reassign this need to. Cannot be used together with customerExternalId. */
  customerId?: string | null | undefined;
  /** An optional identifier in UUID v4 format. If provided, will be set as the customer need's ID. */
  id?: string | null | undefined;
  /** The issue to move this need to. Accepts a UUID or issue identifier (e.g., 'LIN-123'). The need's attachment will also be moved to the target issue. */
  issueId?: string | null | undefined;
  /** Whether the customer need is important or not. 0 = Not important, 1 = Important. */
  priority?: number | null | undefined;
  /** [INTERNAL] The project to move this need to. */
  projectId?: string | null | undefined;
};

/** Customer status filtering options. */
export type CustomerStatusFilter = {
  /** Compound filters, all of which need to be matched by the customer status. */
  and?: Array<CustomerStatusFilter> | null | undefined;
  /** Comparator for the customer status color. */
  color?: StringComparator | null | undefined;
  /** Comparator for the created at date. */
  createdAt?: DateComparator | null | undefined;
  /** Comparator for the customer status description. */
  description?: StringComparator | null | undefined;
  /** Comparator for the identifier. */
  id?: IdComparator | null | undefined;
  /** Comparator for the customer status name. */
  name?: StringComparator | null | undefined;
  /** Compound filters, one of which needs to be matched by the customer status. */
  or?: Array<CustomerStatusFilter> | null | undefined;
  /** Comparator for the customer status position. */
  position?: NumberComparator | null | undefined;
  /** Comparator for the customer status type. */
  type?: StringComparator | null | undefined;
  /** Comparator for the updated at date. */
  updatedAt?: DateComparator | null | undefined;
};

/** Customer tier filtering options. */
export type CustomerTierFilter = {
  /** Compound filters, all of which need to be matched by the customer tier. */
  and?: Array<CustomerTierFilter> | null | undefined;
  /** Comparator for the customer tier color. */
  color?: StringComparator | null | undefined;
  /** Comparator for the created at date. */
  createdAt?: DateComparator | null | undefined;
  /** Comparator for the customer tier description. */
  description?: StringComparator | null | undefined;
  /** Comparator for the customer tier display name. */
  displayName?: StringComparator | null | undefined;
  /** Comparator for the identifier. */
  id?: IdComparator | null | undefined;
  /** Compound filters, one of which needs to be matched by the customer tier. */
  or?: Array<CustomerTierFilter> | null | undefined;
  /** Comparator for the customer tier position. */
  position?: NumberComparator | null | undefined;
  /** Comparator for the updated at date. */
  updatedAt?: DateComparator | null | undefined;
};

/** Cycle filtering options. */
export type CycleFilter = {
  /** Compound filters, all of which need to be matched by the cycle. */
  and?: Array<CycleFilter> | null | undefined;
  /** Comparator for the cycle completed at date. */
  completedAt?: DateComparator | null | undefined;
  /** Comparator for the created at date. */
  createdAt?: DateComparator | null | undefined;
  /** Comparator for the cycle ends at date. */
  endsAt?: DateComparator | null | undefined;
  /** Comparator for the identifier. */
  id?: IdComparator | null | undefined;
  /** Comparator for the inherited cycle ID. */
  inheritedFromId?: IdComparator | null | undefined;
  /** Comparator for the filtering active cycle. */
  isActive?: BooleanComparator | null | undefined;
  /** Comparator for the filtering future cycles. */
  isFuture?: BooleanComparator | null | undefined;
  /** Comparator for filtering for whether the cycle is currently in cooldown. */
  isInCooldown?: BooleanComparator | null | undefined;
  /** Comparator for the filtering next cycle. */
  isNext?: BooleanComparator | null | undefined;
  /** Comparator for the filtering past cycles. */
  isPast?: BooleanComparator | null | undefined;
  /** Comparator for the filtering previous cycle. */
  isPrevious?: BooleanComparator | null | undefined;
  /** Filters that the cycles issues must satisfy. */
  issues?: IssueCollectionFilter | null | undefined;
  /** Comparator for the cycle name. */
  name?: StringComparator | null | undefined;
  /** Comparator for the cycle number. */
  number?: NumberComparator | null | undefined;
  /** Compound filters, one of which need to be matched by the cycle. */
  or?: Array<CycleFilter> | null | undefined;
  /** Comparator for the cycle start date. */
  startsAt?: DateComparator | null | undefined;
  /** Filters that the cycles team must satisfy. */
  team?: TeamFilter | null | undefined;
  /** Comparator for the updated at date. */
  updatedAt?: DateComparator | null | undefined;
};

export type CyclePeriod =
  | 'after'
  | 'before'
  | 'during';

/** Comparator for period when issue was added to a cycle. */
export type CyclePeriodComparator = {
  /** Equals constraint. */
  eq?: CyclePeriod | null | undefined;
  /** In-array constraint. */
  in?: Array<CyclePeriod> | null | undefined;
  /** Not-equals constraint. */
  neq?: CyclePeriod | null | undefined;
  /** Not-in-array constraint. */
  nin?: Array<CyclePeriod> | null | undefined;
  /** Null constraint. Matches any non-null values if the given value is false, otherwise it matches null values. */
  null?: boolean | null | undefined;
};

/** Comparator for dates. */
export type DateComparator = {
  /** Equals constraint. */
  eq?: unknown;
  /** Greater-than constraint. Matches any values that are greater than the given value. */
  gt?: unknown;
  /** Greater-than-or-equal constraint. Matches any values that are greater than or equal to the given value. */
  gte?: unknown;
  /** In-array constraint. */
  in?: Array<unknown> | null | undefined;
  /** Less-than constraint. Matches any values that are less than the given value. */
  lt?: unknown;
  /** Less-than-or-equal constraint. Matches any values that are less than or equal to the given value. */
  lte?: unknown;
  /** Not-equals constraint. */
  neq?: unknown;
  /** Not-in-array constraint. */
  nin?: Array<unknown> | null | undefined;
};

/** Document filtering options. */
export type DocumentFilter = {
  /** Compound filters, all of which need to be matched by the document. */
  and?: Array<DocumentFilter> | null | undefined;
  /** Comparator for the created at date. */
  createdAt?: DateComparator | null | undefined;
  /** Filters that the document's creator must satisfy. */
  creator?: UserFilter | null | undefined;
  /** Filters that the document's cycle must satisfy. */
  cycle?: CycleFilter | null | undefined;
  /** Comparator for the identifier. */
  id?: IdComparator | null | undefined;
  /** Filters that the document's initiative must satisfy. */
  initiative?: InitiativeFilter | null | undefined;
  /** Filters that the document's issue must satisfy. */
  issue?: IssueFilter | null | undefined;
  /** Compound filters, one of which need to be matched by the document. */
  or?: Array<DocumentFilter> | null | undefined;
  /** Filters that the document's project must satisfy. */
  project?: ProjectFilter | null | undefined;
  /** Filters that the document's release must satisfy. */
  release?: ReleaseFilter | null | undefined;
  /** Comparator for the document slug ID. */
  slugId?: StringComparator | null | undefined;
  /** Filters that the document's team must satisfy. */
  team?: NullableTeamFilter | null | undefined;
  /** Comparator for the document title. */
  title?: StringComparator | null | undefined;
  /** Comparator for the updated at date. */
  updatedAt?: DateComparator | null | undefined;
};

/** Comparator for estimates. */
export type EstimateComparator = {
  /** Compound filters, one of which need to be matched by the estimate. */
  and?: Array<NullableNumberComparator> | null | undefined;
  /** Equals constraint. */
  eq?: number | null | undefined;
  /** Greater-than constraint. Matches any values that are greater than the given value. */
  gt?: number | null | undefined;
  /** Greater-than-or-equal constraint. Matches any values that are greater than or equal to the given value. */
  gte?: number | null | undefined;
  /** In-array constraint. */
  in?: Array<number> | null | undefined;
  /** Less-than constraint. Matches any values that are less than the given value. */
  lt?: number | null | undefined;
  /** Less-than-or-equal constraint. Matches any values that are less than or equal to the given value. */
  lte?: number | null | undefined;
  /** Not-equals constraint. */
  neq?: number | null | undefined;
  /** Not-in-array constraint. */
  nin?: Array<number> | null | undefined;
  /** Null constraint. Matches any non-null values if the given value is false, otherwise it matches null values. */
  null?: boolean | null | undefined;
  /** Compound filters, all of which need to be matched by the estimate. */
  or?: Array<NullableNumberComparator> | null | undefined;
};

/** Comparator for identifiers. */
export type IdComparator = {
  /** Equals constraint. */
  eq?: string | number | null | undefined;
  /** In-array constraint. */
  in?: Array<string | number> | null | undefined;
  /** Not-equals constraint. */
  neq?: string | number | null | undefined;
  /** Not-in-array constraint. */
  nin?: Array<string | number> | null | undefined;
};

/** Initiative collection filtering options. */
export type InitiativeCollectionFilter = {
  /** Comparator for the initiative activity type. */
  activityType?: StringComparator | null | undefined;
  /** Filters that the initiative must be an ancestor of. */
  ancestors?: InitiativeCollectionFilter | null | undefined;
  /** Compound filters, all of which need to be matched by the initiative. */
  and?: Array<InitiativeCollectionFilter> | null | undefined;
  /** Comparator for the initiative completed at date. */
  completedAt?: NullableDateComparator | null | undefined;
  /** Comparator for the created at date. */
  createdAt?: DateComparator | null | undefined;
  /** Filters that the initiative creator must satisfy. */
  creator?: NullableUserFilter | null | undefined;
  /** Filters that needs to be matched by all initiatives. */
  every?: InitiativeFilter | null | undefined;
  /** Comparator for the initiative health: onTrack, atRisk, offTrack */
  health?: StringComparator | null | undefined;
  /** Comparator for the initiative health (with age): onTrack, atRisk, offTrack, outdated, noUpdate */
  healthWithAge?: StringComparator | null | undefined;
  /** Comparator for the identifier. */
  id?: IdComparator | null | undefined;
  /** Filters that the initiative updates must satisfy. */
  initiativeUpdates?: InitiativeUpdatesCollectionFilter | null | undefined;
  /** [Internal] Filters that the initiative labels must satisfy. */
  labels?: InitiativeLabelCollectionFilter | null | undefined;
  /** Comparator for the collection length. */
  length?: NumberComparator | null | undefined;
  /** Comparator for the initiative name. */
  name?: StringComparator | null | undefined;
  /** Compound filters, one of which need to be matched by the initiative. */
  or?: Array<InitiativeCollectionFilter> | null | undefined;
  /** Filters that the initiative owner must satisfy. */
  owner?: NullableUserFilter | null | undefined;
  /** [Internal] Comparator for the initiative priority. */
  priority?: NullableNumberComparator | null | undefined;
  /** Comparator for the initiative slug ID. */
  slugId?: StringComparator | null | undefined;
  /** Filters that needs to be matched by some initiatives. */
  some?: InitiativeFilter | null | undefined;
  /** Comparator for the initiative started at date. */
  startedAt?: NullableDateComparator | null | undefined;
  /** Comparator for the initiative status: Planned, Active, Completed */
  status?: StringComparator | null | undefined;
  /** Comparator for the initiative target date. */
  targetDate?: NullableDateComparator | null | undefined;
  /** Filters that the initiative teams must satisfy. */
  teams?: TeamCollectionFilter | null | undefined;
  /** Comparator for the updated at date. */
  updatedAt?: DateComparator | null | undefined;
};

/** Initiative filtering options. */
export type InitiativeFilter = {
  /** Comparator for the initiative activity type. */
  activityType?: StringComparator | null | undefined;
  /** Filters that the initiative must be an ancestor of. */
  ancestors?: InitiativeCollectionFilter | null | undefined;
  /** Compound filters, all of which need to be matched by the initiative. */
  and?: Array<InitiativeFilter> | null | undefined;
  /** Comparator for the initiative completed at date. */
  completedAt?: NullableDateComparator | null | undefined;
  /** Comparator for the created at date. */
  createdAt?: DateComparator | null | undefined;
  /** Filters that the initiative creator must satisfy. */
  creator?: NullableUserFilter | null | undefined;
  /** Comparator for the initiative health: onTrack, atRisk, offTrack */
  health?: StringComparator | null | undefined;
  /** Comparator for the initiative health (with age): onTrack, atRisk, offTrack, outdated, noUpdate */
  healthWithAge?: StringComparator | null | undefined;
  /** Comparator for the identifier. */
  id?: IdComparator | null | undefined;
  /** Filters that the initiative updates must satisfy. */
  initiativeUpdates?: InitiativeUpdatesCollectionFilter | null | undefined;
  /** [Internal] Filters that the initiative labels must satisfy. */
  labels?: InitiativeLabelCollectionFilter | null | undefined;
  /** Comparator for the initiative name. */
  name?: StringComparator | null | undefined;
  /** Compound filters, one of which need to be matched by the initiative. */
  or?: Array<InitiativeFilter> | null | undefined;
  /** Filters that the initiative owner must satisfy. */
  owner?: NullableUserFilter | null | undefined;
  /** [Internal] Comparator for the initiative priority. */
  priority?: NullableNumberComparator | null | undefined;
  /** Comparator for the initiative slug ID. */
  slugId?: StringComparator | null | undefined;
  /** Comparator for the initiative started at date. */
  startedAt?: NullableDateComparator | null | undefined;
  /** Comparator for the initiative status: Planned, Active, Completed */
  status?: StringComparator | null | undefined;
  /** Comparator for the initiative target date. */
  targetDate?: NullableDateComparator | null | undefined;
  /** Filters that the initiative teams must satisfy. */
  teams?: TeamCollectionFilter | null | undefined;
  /** Comparator for the updated at date. */
  updatedAt?: DateComparator | null | undefined;
};

/** Initiative label filtering options. */
export type InitiativeLabelCollectionFilter = {
  /** Compound filters, all of which need to be matched by the label. */
  and?: Array<InitiativeLabelCollectionFilter> | null | undefined;
  /** Comparator for the created at date. */
  createdAt?: DateComparator | null | undefined;
  /** Filters that the initiative labels creator must satisfy. */
  creator?: NullableUserFilter | null | undefined;
  /** Filters that needs to be matched by all initiative labels. */
  every?: InitiativeLabelFilter | null | undefined;
  /** Comparator for the identifier. */
  id?: IdComparator | null | undefined;
  /** Comparator for whether the label is a group label. */
  isGroup?: BooleanComparator | null | undefined;
  /** Comparator for the collection length. */
  length?: NumberComparator | null | undefined;
  /** Comparator for the name. */
  name?: StringComparator | null | undefined;
  /** Filter based on the existence of the relation. */
  null?: boolean | null | undefined;
  /** Compound filters, one of which need to be matched by the label. */
  or?: Array<InitiativeLabelCollectionFilter> | null | undefined;
  /** Filters that the initiative label's parent label must satisfy. */
  parent?: InitiativeLabelFilter | null | undefined;
  /** Filters that needs to be matched by some initiative labels. */
  some?: InitiativeLabelCollectionFilter | null | undefined;
  /** Comparator for the updated at date. */
  updatedAt?: DateComparator | null | undefined;
};

/** Initiative label filtering options. */
export type InitiativeLabelFilter = {
  /** Compound filters, all of which need to be matched by the label. */
  and?: Array<InitiativeLabelFilter> | null | undefined;
  /** Comparator for the created at date. */
  createdAt?: DateComparator | null | undefined;
  /** Filters that the initiative labels creator must satisfy. */
  creator?: NullableUserFilter | null | undefined;
  /** Comparator for the identifier. */
  id?: IdComparator | null | undefined;
  /** Comparator for whether the label is a group label. */
  isGroup?: BooleanComparator | null | undefined;
  /** Comparator for the name. */
  name?: StringComparator | null | undefined;
  /** Compound filters, one of which need to be matched by the label. */
  or?: Array<InitiativeLabelFilter> | null | undefined;
  /** Filters that the initiative label's parent label must satisfy. */
  parent?: InitiativeLabelFilter | null | undefined;
  /** Comparator for the updated at date. */
  updatedAt?: DateComparator | null | undefined;
};

/** Collection filtering options for filtering initiatives by initiative updates. */
export type InitiativeUpdatesCollectionFilter = {
  /** Compound filters, all of which need to be matched by the initiative update. */
  and?: Array<InitiativeUpdatesCollectionFilter> | null | undefined;
  /** Comparator for the created at date. */
  createdAt?: DateComparator | null | undefined;
  /** Filters that needs to be matched by all initiative updates. */
  every?: InitiativeUpdatesFilter | null | undefined;
  /** Comparator for the identifier. */
  id?: IdComparator | null | undefined;
  /** Comparator for the collection length. */
  length?: NumberComparator | null | undefined;
  /** Compound filters, one of which need to be matched by the update. */
  or?: Array<InitiativeUpdatesCollectionFilter> | null | undefined;
  /** Filters that needs to be matched by some initiative updates. */
  some?: InitiativeUpdatesFilter | null | undefined;
  /** Comparator for the updated at date. */
  updatedAt?: DateComparator | null | undefined;
};

/** Options for filtering initiatives by initiative updates. */
export type InitiativeUpdatesFilter = {
  /** Compound filters, all of which need to be matched by the initiative updates. */
  and?: Array<InitiativeUpdatesFilter> | null | undefined;
  /** Comparator for the created at date. */
  createdAt?: DateComparator | null | undefined;
  /** Comparator for the identifier. */
  id?: IdComparator | null | undefined;
  /** Compound filters, one of which need to be matched by the initiative updates. */
  or?: Array<InitiativeUpdatesFilter> | null | undefined;
  /** Comparator for the updated at date. */
  updatedAt?: DateComparator | null | undefined;
};

/** Issue filtering options. */
export type IssueCollectionFilter = {
  /** [Internal] Comparator for the issue's accumulatedStateUpdatedAt date. */
  accumulatedStateUpdatedAt?: NullableDateComparator | null | undefined;
  /** Filters that the issue's activities must satisfy. */
  activity?: ActivityCollectionFilter | null | undefined;
  /** Comparator for the issues added to cycle at date. */
  addedToCycleAt?: NullableDateComparator | null | undefined;
  /** Comparator for the period when issue was added to a cycle. */
  addedToCyclePeriod?: CyclePeriodComparator | null | undefined;
  /** [Internal] Age (created -> now) comparator, defined if the issue is still open. */
  ageTime?: NullableDurationComparator | null | undefined;
  /** Compound filters, all of which need to be matched by the issue. */
  and?: Array<IssueCollectionFilter> | null | undefined;
  /** Comparator for the issues archived at date. */
  archivedAt?: NullableDateComparator | null | undefined;
  /** Filters that the issues assignee must satisfy. */
  assignee?: NullableUserFilter | null | undefined;
  /** Filters that the issues attachments must satisfy. */
  attachments?: AttachmentCollectionFilter | null | undefined;
  /** Comparator for the issues auto archived at date. */
  autoArchivedAt?: NullableDateComparator | null | undefined;
  /** Comparator for the issues auto closed at date. */
  autoClosedAt?: NullableDateComparator | null | undefined;
  /** Comparator for the issues canceled at date. */
  canceledAt?: NullableDateComparator | null | undefined;
  /** Filters that the child issues must satisfy. */
  children?: IssueCollectionFilter | null | undefined;
  /** Filters that the issues comments must satisfy. */
  comments?: CommentCollectionFilter | null | undefined;
  /** Comparator for the issues completed at date. */
  completedAt?: NullableDateComparator | null | undefined;
  /** Comparator for the created at date. */
  createdAt?: DateComparator | null | undefined;
  /** Filters that the issues creator must satisfy. */
  creator?: NullableUserFilter | null | undefined;
  /** Count of customers */
  customerCount?: NumberComparator | null | undefined;
  /** Count of important customers */
  customerImportantCount?: NumberComparator | null | undefined;
  /** Filters that the issues cycle must satisfy. */
  cycle?: NullableCycleFilter | null | undefined;
  /** [Internal] Cycle time (started -> completed) comparator. */
  cycleTime?: NullableDurationComparator | null | undefined;
  /** Filters that the issue's delegated agent must satisfy. */
  delegate?: NullableUserFilter | null | undefined;
  /** Comparator for the issues description. */
  description?: NullableStringComparator | null | undefined;
  /** Comparator for the issues due date. */
  dueDate?: NullableTimelessDateComparator | null | undefined;
  /** Comparator for the issues estimate. */
  estimate?: EstimateComparator | null | undefined;
  /** Filters that needs to be matched by all issues. */
  every?: IssueFilter | null | undefined;
  /** [Internal] Comparator for filtering issues bucketed as having active agent sessions, no closed agent pull requests, and no merged agent pull requests. */
  hasActiveAgentSessions?: RelationExistsComparator | null | undefined;
  /** Comparator for filtering issues which are blocked. */
  hasBlockedByRelations?: RelationExistsComparator | null | undefined;
  /** Comparator for filtering issues which are blocking. */
  hasBlockingRelations?: RelationExistsComparator | null | undefined;
  /** [Internal] Comparator for filtering issues bucketed as having all agent sessions dismissed or closed, and no merged agent pull requests. */
  hasDismissedAgentSessions?: RelationExistsComparator | null | undefined;
  /** Comparator for filtering issues which are duplicates. */
  hasDuplicateRelations?: RelationExistsComparator | null | undefined;
  /** [Internal] Comparator for filtering issues bucketed as having an errored agent session, no active sessions, and no merged agent pull requests. */
  hasErroredAgentSessions?: RelationExistsComparator | null | undefined;
  /** [Internal] Comparator for filtering issues which have agent-session-linked pull requests that were merged. */
  hasMergedAgentPullRequests?: RelationExistsComparator | null | undefined;
  /** Comparator for filtering issues with relations. */
  hasRelatedRelations?: RelationExistsComparator | null | undefined;
  /** Comparator for filtering issues which have been shared with users outside of the team. */
  hasSharedUsers?: RelationExistsComparator | null | undefined;
  /** [Internal] Comparator for filtering issues which have suggested assignees. */
  hasSuggestedAssignees?: RelationExistsComparator | null | undefined;
  /** [Internal] Comparator for filtering issues which have suggested labels. */
  hasSuggestedLabels?: RelationExistsComparator | null | undefined;
  /** [Internal] Comparator for filtering issues which have suggested projects. */
  hasSuggestedProjects?: RelationExistsComparator | null | undefined;
  /** [Internal] Comparator for filtering issues which have suggested related issues. */
  hasSuggestedRelatedIssues?: RelationExistsComparator | null | undefined;
  /** [Internal] Comparator for filtering issues which have suggested similar issues. */
  hasSuggestedSimilarIssues?: RelationExistsComparator | null | undefined;
  /** [Internal] Comparator for filtering issues which have suggested teams. */
  hasSuggestedTeams?: RelationExistsComparator | null | undefined;
  /** Comparator for the identifier. */
  id?: IssueIdComparator | null | undefined;
  /** Filters that issue labels must satisfy. */
  labels?: IssueLabelCollectionFilter | null | undefined;
  /** Filters that the last applied template must satisfy. */
  lastAppliedTemplate?: NullableTemplateFilter | null | undefined;
  /** [Internal] Lead time (created -> completed) comparator. */
  leadTime?: NullableDurationComparator | null | undefined;
  /** Comparator for the collection length. */
  length?: NumberComparator | null | undefined;
  /** Filters that the issue's customer needs must satisfy. */
  needs?: CustomerNeedCollectionFilter | null | undefined;
  /** Comparator for the issues number. */
  number?: NumberComparator | null | undefined;
  /** Compound filters, one of which need to be matched by the issue. */
  or?: Array<IssueCollectionFilter> | null | undefined;
  /** Filters that the issue parent must satisfy. */
  parent?: NullableIssueFilter | null | undefined;
  /** Comparator for the issues priority. 0 = No priority, 1 = Urgent, 2 = High, 3 = Medium, 4 = Low. */
  priority?: NullableNumberComparator | null | undefined;
  /** Filters that the issues project must satisfy. */
  project?: NullableProjectFilter | null | undefined;
  /** Filters that the issues project milestone must satisfy. */
  projectMilestone?: NullableProjectMilestoneFilter | null | undefined;
  /** Filters that the issues reactions must satisfy. */
  reactions?: ReactionCollectionFilter | null | undefined;
  /** [ALPHA] Filters that the recurring issue template must satisfy. */
  recurringIssueTemplate?: NullableTemplateFilter | null | undefined;
  /** Filters that the issue's releases must satisfy. */
  releases?: ReleaseCollectionFilter | null | undefined;
  /** [Internal] Comparator for the issues content. */
  searchableContent?: ContentComparator | null | undefined;
  /** Filters that users the issue has been shared with must satisfy. */
  sharedWith?: UserCollectionFilter | null | undefined;
  /** Comparator for the issue's SLA breach date. */
  slaBreachesAt?: NullableDateComparator | null | undefined;
  /** Comparator for the issues sla status. */
  slaStatus?: SlaStatusComparator | null | undefined;
  /** Filters that the issues snoozer must satisfy. */
  snoozedBy?: NullableUserFilter | null | undefined;
  /** Comparator for the issues snoozed until date. */
  snoozedUntilAt?: NullableDateComparator | null | undefined;
  /** Filters that needs to be matched by some issues. */
  some?: IssueFilter | null | undefined;
  /** Filters that the source must satisfy. */
  sourceMetadata?: SourceMetadataComparator | null | undefined;
  /** Comparator for the issues started at date. */
  startedAt?: NullableDateComparator | null | undefined;
  /** Filters that the issues state must satisfy. */
  state?: WorkflowStateFilter | null | undefined;
  /** Filters that issue subscribers must satisfy. */
  subscribers?: UserCollectionFilter | null | undefined;
  /** [Internal] Filters that the issue's suggestions must satisfy. */
  suggestions?: IssueSuggestionCollectionFilter | null | undefined;
  /** Filters that the issues team must satisfy. */
  team?: TeamFilter | null | undefined;
  /** Comparator for the issues title. */
  title?: StringComparator | null | undefined;
  /** [Internal] Triage time (entered triaged -> triaged) comparator. */
  triageTime?: NullableDurationComparator | null | undefined;
  /** Comparator for the issues triaged at date. */
  triagedAt?: NullableDateComparator | null | undefined;
  /** Comparator for the updated at date. */
  updatedAt?: DateComparator | null | undefined;
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

/** Issue filtering options. */
export type IssueFilter = {
  /** [Internal] Comparator for the issue's accumulatedStateUpdatedAt date. */
  accumulatedStateUpdatedAt?: NullableDateComparator | null | undefined;
  /** Filters that the issue's activities must satisfy. */
  activity?: ActivityCollectionFilter | null | undefined;
  /** Comparator for the issues added to cycle at date. */
  addedToCycleAt?: NullableDateComparator | null | undefined;
  /** Comparator for the period when issue was added to a cycle. */
  addedToCyclePeriod?: CyclePeriodComparator | null | undefined;
  /** [Internal] Age (created -> now) comparator, defined if the issue is still open. */
  ageTime?: NullableDurationComparator | null | undefined;
  /** Compound filters, all of which need to be matched by the issue. */
  and?: Array<IssueFilter> | null | undefined;
  /** Comparator for the issues archived at date. */
  archivedAt?: NullableDateComparator | null | undefined;
  /** Filters that the issues assignee must satisfy. */
  assignee?: NullableUserFilter | null | undefined;
  /** Filters that the issues attachments must satisfy. */
  attachments?: AttachmentCollectionFilter | null | undefined;
  /** Comparator for the issues auto archived at date. */
  autoArchivedAt?: NullableDateComparator | null | undefined;
  /** Comparator for the issues auto closed at date. */
  autoClosedAt?: NullableDateComparator | null | undefined;
  /** Comparator for the issues canceled at date. */
  canceledAt?: NullableDateComparator | null | undefined;
  /** Filters that the child issues must satisfy. */
  children?: IssueCollectionFilter | null | undefined;
  /** Filters that the issues comments must satisfy. */
  comments?: CommentCollectionFilter | null | undefined;
  /** Comparator for the issues completed at date. */
  completedAt?: NullableDateComparator | null | undefined;
  /** Comparator for the created at date. */
  createdAt?: DateComparator | null | undefined;
  /** Filters that the issues creator must satisfy. */
  creator?: NullableUserFilter | null | undefined;
  /** Count of customers */
  customerCount?: NumberComparator | null | undefined;
  /** Count of important customers */
  customerImportantCount?: NumberComparator | null | undefined;
  /** Filters that the issues cycle must satisfy. */
  cycle?: NullableCycleFilter | null | undefined;
  /** [Internal] Cycle time (started -> completed) comparator. */
  cycleTime?: NullableDurationComparator | null | undefined;
  /** Filters that the issue's delegated agent must satisfy. */
  delegate?: NullableUserFilter | null | undefined;
  /** Comparator for the issues description. */
  description?: NullableStringComparator | null | undefined;
  /** Comparator for the issues due date. */
  dueDate?: NullableTimelessDateComparator | null | undefined;
  /** Comparator for the issues estimate. */
  estimate?: EstimateComparator | null | undefined;
  /** [Internal] Comparator for filtering issues bucketed as having active agent sessions, no closed agent pull requests, and no merged agent pull requests. */
  hasActiveAgentSessions?: RelationExistsComparator | null | undefined;
  /** Comparator for filtering issues which are blocked. */
  hasBlockedByRelations?: RelationExistsComparator | null | undefined;
  /** Comparator for filtering issues which are blocking. */
  hasBlockingRelations?: RelationExistsComparator | null | undefined;
  /** [Internal] Comparator for filtering issues bucketed as having all agent sessions dismissed or closed, and no merged agent pull requests. */
  hasDismissedAgentSessions?: RelationExistsComparator | null | undefined;
  /** Comparator for filtering issues which are duplicates. */
  hasDuplicateRelations?: RelationExistsComparator | null | undefined;
  /** [Internal] Comparator for filtering issues bucketed as having an errored agent session, no active sessions, and no merged agent pull requests. */
  hasErroredAgentSessions?: RelationExistsComparator | null | undefined;
  /** [Internal] Comparator for filtering issues which have agent-session-linked pull requests that were merged. */
  hasMergedAgentPullRequests?: RelationExistsComparator | null | undefined;
  /** Comparator for filtering issues with relations. */
  hasRelatedRelations?: RelationExistsComparator | null | undefined;
  /** Comparator for filtering issues which have been shared with users outside of the team. */
  hasSharedUsers?: RelationExistsComparator | null | undefined;
  /** [Internal] Comparator for filtering issues which have suggested assignees. */
  hasSuggestedAssignees?: RelationExistsComparator | null | undefined;
  /** [Internal] Comparator for filtering issues which have suggested labels. */
  hasSuggestedLabels?: RelationExistsComparator | null | undefined;
  /** [Internal] Comparator for filtering issues which have suggested projects. */
  hasSuggestedProjects?: RelationExistsComparator | null | undefined;
  /** [Internal] Comparator for filtering issues which have suggested related issues. */
  hasSuggestedRelatedIssues?: RelationExistsComparator | null | undefined;
  /** [Internal] Comparator for filtering issues which have suggested similar issues. */
  hasSuggestedSimilarIssues?: RelationExistsComparator | null | undefined;
  /** [Internal] Comparator for filtering issues which have suggested teams. */
  hasSuggestedTeams?: RelationExistsComparator | null | undefined;
  /** Comparator for the identifier. */
  id?: IssueIdComparator | null | undefined;
  /** Filters that issue labels must satisfy. */
  labels?: IssueLabelCollectionFilter | null | undefined;
  /** Filters that the last applied template must satisfy. */
  lastAppliedTemplate?: NullableTemplateFilter | null | undefined;
  /** [Internal] Lead time (created -> completed) comparator. */
  leadTime?: NullableDurationComparator | null | undefined;
  /** Filters that the issue's customer needs must satisfy. */
  needs?: CustomerNeedCollectionFilter | null | undefined;
  /** Comparator for the issues number. */
  number?: NumberComparator | null | undefined;
  /** Compound filters, one of which need to be matched by the issue. */
  or?: Array<IssueFilter> | null | undefined;
  /** Filters that the issue parent must satisfy. */
  parent?: NullableIssueFilter | null | undefined;
  /** Comparator for the issues priority. 0 = No priority, 1 = Urgent, 2 = High, 3 = Medium, 4 = Low. */
  priority?: NullableNumberComparator | null | undefined;
  /** Filters that the issues project must satisfy. */
  project?: NullableProjectFilter | null | undefined;
  /** Filters that the issues project milestone must satisfy. */
  projectMilestone?: NullableProjectMilestoneFilter | null | undefined;
  /** Filters that the issues reactions must satisfy. */
  reactions?: ReactionCollectionFilter | null | undefined;
  /** [ALPHA] Filters that the recurring issue template must satisfy. */
  recurringIssueTemplate?: NullableTemplateFilter | null | undefined;
  /** Filters that the issue's releases must satisfy. */
  releases?: ReleaseCollectionFilter | null | undefined;
  /** [Internal] Comparator for the issues content. */
  searchableContent?: ContentComparator | null | undefined;
  /** Filters that users the issue has been shared with must satisfy. */
  sharedWith?: UserCollectionFilter | null | undefined;
  /** Comparator for the issue's SLA breach date. */
  slaBreachesAt?: NullableDateComparator | null | undefined;
  /** Comparator for the issues sla status. */
  slaStatus?: SlaStatusComparator | null | undefined;
  /** Filters that the issues snoozer must satisfy. */
  snoozedBy?: NullableUserFilter | null | undefined;
  /** Comparator for the issues snoozed until date. */
  snoozedUntilAt?: NullableDateComparator | null | undefined;
  /** Filters that the source must satisfy. */
  sourceMetadata?: SourceMetadataComparator | null | undefined;
  /** Comparator for the issues started at date. */
  startedAt?: NullableDateComparator | null | undefined;
  /** Filters that the issues state must satisfy. */
  state?: WorkflowStateFilter | null | undefined;
  /** Filters that issue subscribers must satisfy. */
  subscribers?: UserCollectionFilter | null | undefined;
  /** [Internal] Filters that the issue's suggestions must satisfy. */
  suggestions?: IssueSuggestionCollectionFilter | null | undefined;
  /** Filters that the issues team must satisfy. */
  team?: TeamFilter | null | undefined;
  /** Comparator for the issues title. */
  title?: StringComparator | null | undefined;
  /** [Internal] Triage time (entered triaged -> triaged) comparator. */
  triageTime?: NullableDurationComparator | null | undefined;
  /** Comparator for the issues triaged at date. */
  triagedAt?: NullableDateComparator | null | undefined;
  /** Comparator for the updated at date. */
  updatedAt?: DateComparator | null | undefined;
};

/** Comparator for issue identifiers. */
export type IssueIdComparator = {
  /** Equals constraint. */
  eq?: string | number | null | undefined;
  /** In-array constraint. */
  in?: Array<string | number> | null | undefined;
  /** Not-equals constraint. */
  neq?: string | number | null | undefined;
  /** Not-in-array constraint. */
  nin?: Array<string | number> | null | undefined;
};

/** Issue label filtering options. */
export type IssueLabelCollectionFilter = {
  /** Compound filters, all of which need to be matched by the label. */
  and?: Array<IssueLabelCollectionFilter> | null | undefined;
  /** Comparator for the created at date. */
  createdAt?: DateComparator | null | undefined;
  /** Filters that the issue labels creator must satisfy. */
  creator?: NullableUserFilter | null | undefined;
  /** Filters that needs to be matched by all issue labels. */
  every?: IssueLabelFilter | null | undefined;
  /** Comparator for the identifier. */
  id?: IdComparator | null | undefined;
  /** Comparator for whether the label is a group label. */
  isGroup?: BooleanComparator | null | undefined;
  /** Comparator for the collection length. */
  length?: NumberComparator | null | undefined;
  /** Comparator for the name. */
  name?: StringComparator | null | undefined;
  /** Filter based on the existence of the relation. */
  null?: boolean | null | undefined;
  /** Compound filters, one of which need to be matched by the label. */
  or?: Array<IssueLabelCollectionFilter> | null | undefined;
  /** Filters that the issue label's parent label must satisfy. */
  parent?: IssueLabelFilter | null | undefined;
  /** Filters that needs to be matched by some issue labels. */
  some?: IssueLabelFilter | null | undefined;
  /** Filters that the issue labels team must satisfy. */
  team?: NullableTeamFilter | null | undefined;
  /** Comparator for the updated at date. */
  updatedAt?: DateComparator | null | undefined;
};

/** Issue label filtering options. */
export type IssueLabelFilter = {
  /** Compound filters, all of which need to be matched by the label. */
  and?: Array<IssueLabelFilter> | null | undefined;
  /** Comparator for the created at date. */
  createdAt?: DateComparator | null | undefined;
  /** Filters that the issue labels creator must satisfy. */
  creator?: NullableUserFilter | null | undefined;
  /** Comparator for the identifier. */
  id?: IdComparator | null | undefined;
  /** Comparator for whether the label is a group label. */
  isGroup?: BooleanComparator | null | undefined;
  /** Comparator for the name. */
  name?: StringComparator | null | undefined;
  /** Compound filters, one of which need to be matched by the label. */
  or?: Array<IssueLabelFilter> | null | undefined;
  /** Filters that the issue label's parent label must satisfy. */
  parent?: IssueLabelFilter | null | undefined;
  /** Filters that the issue labels team must satisfy. */
  team?: NullableTeamFilter | null | undefined;
  /** Comparator for the updated at date. */
  updatedAt?: DateComparator | null | undefined;
};

/** IssueSuggestion collection filtering options. */
export type IssueSuggestionCollectionFilter = {
  /** Compound filters, all of which need to be matched by the suggestion. */
  and?: Array<IssueSuggestionCollectionFilter> | null | undefined;
  /** Comparator for the created at date. */
  createdAt?: DateComparator | null | undefined;
  /** Filters that needs to be matched by all suggestions. */
  every?: IssueSuggestionFilter | null | undefined;
  /** Comparator for the identifier. */
  id?: IdComparator | null | undefined;
  /** Comparator for the collection length. */
  length?: NumberComparator | null | undefined;
  /** Compound filters, one of which need to be matched by the suggestion. */
  or?: Array<IssueSuggestionCollectionFilter> | null | undefined;
  /** Filters that needs to be matched by some suggestions. */
  some?: IssueSuggestionFilter | null | undefined;
  /** Comparator for the suggestion state. */
  state?: StringComparator | null | undefined;
  /** Filters that the suggested label must satisfy. */
  suggestedLabel?: IssueLabelFilter | null | undefined;
  /** Filters that the suggested project must satisfy. */
  suggestedProject?: NullableProjectFilter | null | undefined;
  /** Filters that the suggested team must satisfy. */
  suggestedTeam?: NullableTeamFilter | null | undefined;
  /** Filters that the suggested user must satisfy. */
  suggestedUser?: NullableUserFilter | null | undefined;
  /** Comparator for the suggestion type. */
  type?: StringComparator | null | undefined;
  /** Comparator for the updated at date. */
  updatedAt?: DateComparator | null | undefined;
};

/** IssueSuggestion filtering options. */
export type IssueSuggestionFilter = {
  /** Compound filters, all of which need to be matched by the suggestion. */
  and?: Array<IssueSuggestionFilter> | null | undefined;
  /** Comparator for the created at date. */
  createdAt?: DateComparator | null | undefined;
  /** Comparator for the identifier. */
  id?: IdComparator | null | undefined;
  /** Compound filters, one of which need to be matched by the suggestion. */
  or?: Array<IssueSuggestionFilter> | null | undefined;
  /** Comparator for the suggestion state. */
  state?: StringComparator | null | undefined;
  /** Filters that the suggested label must satisfy. */
  suggestedLabel?: IssueLabelFilter | null | undefined;
  /** Filters that the suggested project must satisfy. */
  suggestedProject?: NullableProjectFilter | null | undefined;
  /** Filters that the suggested team must satisfy. */
  suggestedTeam?: NullableTeamFilter | null | undefined;
  /** Filters that the suggested user must satisfy. */
  suggestedUser?: NullableUserFilter | null | undefined;
  /** Comparator for the suggestion type. */
  type?: StringComparator | null | undefined;
  /** Comparator for the updated at date. */
  updatedAt?: DateComparator | null | undefined;
};

/** Comment filtering options. */
export type NullableCommentFilter = {
  /** Compound filters, all of which need to be matched by the comment. */
  and?: Array<NullableCommentFilter> | null | undefined;
  /** Comparator for the comment's body. */
  body?: StringComparator | null | undefined;
  /** Comparator for the created at date. */
  createdAt?: DateComparator | null | undefined;
  /** Filters that the comment's document content must satisfy. */
  documentContent?: NullableDocumentContentFilter | null | undefined;
  /** Comparator for the identifier. */
  id?: IdComparator | null | undefined;
  /** [Internal] Filters that the comment's initiative must satisfy. */
  initiative?: NullableInitiativeFilter | null | undefined;
  /** Filters that the comment's issue must satisfy. */
  issue?: NullableIssueFilter | null | undefined;
  /** Filters that the comment's customer needs must satisfy. */
  needs?: CustomerNeedCollectionFilter | null | undefined;
  /** Filter based on the existence of the relation. */
  null?: boolean | null | undefined;
  /** Compound filters, one of which need to be matched by the comment. */
  or?: Array<NullableCommentFilter> | null | undefined;
  /** Filters that the comment parent must satisfy. */
  parent?: NullableCommentFilter | null | undefined;
  /** [Internal] Filters that the comment's project must satisfy. */
  project?: NullableProjectFilter | null | undefined;
  /** Filters that the comment's project update must satisfy. */
  projectUpdate?: NullableProjectUpdateFilter | null | undefined;
  /** Filters that the comment's reactions must satisfy. */
  reactions?: ReactionCollectionFilter | null | undefined;
  /** Comparator for the updated at date. */
  updatedAt?: DateComparator | null | undefined;
  /** Filters that the comment's creator must satisfy. */
  user?: UserFilter | null | undefined;
};

/** Customer filtering options. */
export type NullableCustomerFilter = {
  /** Compound filters, all of which need to be matched by the customer. */
  and?: Array<NullableCustomerFilter> | null | undefined;
  /** Comparator for the created at date. */
  createdAt?: DateComparator | null | undefined;
  /** Comparator for the customer's domains. */
  domains?: StringArrayComparator | null | undefined;
  /** Comparator for the customer's external IDs. */
  externalIds?: StringArrayComparator | null | undefined;
  /** Comparator for the identifier. */
  id?: IdComparator | null | undefined;
  /** Comparator for the customer name. */
  name?: StringComparator | null | undefined;
  /** Filters that the customer's needs must satisfy. */
  needs?: CustomerNeedCollectionFilter | null | undefined;
  /** Filter based on the existence of the relation. */
  null?: boolean | null | undefined;
  /** Compound filters, one of which need to be matched by the customer. */
  or?: Array<NullableCustomerFilter> | null | undefined;
  /** Filters that the customer owner must satisfy. */
  owner?: NullableUserFilter | null | undefined;
  /** Comparator for the customer generated revenue. */
  revenue?: NumberComparator | null | undefined;
  /** Comparator for the customer size. */
  size?: NumberComparator | null | undefined;
  /** Comparator for the customer slack channel ID. */
  slackChannelId?: StringComparator | null | undefined;
  /** Filters that the customer's status must satisfy. */
  status?: CustomerStatusFilter | null | undefined;
  /** Filters that the customer's tier must satisfy. */
  tier?: CustomerTierFilter | null | undefined;
  /** Comparator for the updated at date. */
  updatedAt?: DateComparator | null | undefined;
};

/** Cycle filtering options. */
export type NullableCycleFilter = {
  /** Compound filters, all of which need to be matched by the cycle. */
  and?: Array<NullableCycleFilter> | null | undefined;
  /** Comparator for the cycle completed at date. */
  completedAt?: DateComparator | null | undefined;
  /** Comparator for the created at date. */
  createdAt?: DateComparator | null | undefined;
  /** Comparator for the cycle ends at date. */
  endsAt?: DateComparator | null | undefined;
  /** Comparator for the identifier. */
  id?: IdComparator | null | undefined;
  /** Comparator for the inherited cycle ID. */
  inheritedFromId?: IdComparator | null | undefined;
  /** Comparator for the filtering active cycle. */
  isActive?: BooleanComparator | null | undefined;
  /** Comparator for the filtering future cycles. */
  isFuture?: BooleanComparator | null | undefined;
  /** Comparator for filtering for whether the cycle is currently in cooldown. */
  isInCooldown?: BooleanComparator | null | undefined;
  /** Comparator for the filtering next cycle. */
  isNext?: BooleanComparator | null | undefined;
  /** Comparator for the filtering past cycles. */
  isPast?: BooleanComparator | null | undefined;
  /** Comparator for the filtering previous cycle. */
  isPrevious?: BooleanComparator | null | undefined;
  /** Filters that the cycles issues must satisfy. */
  issues?: IssueCollectionFilter | null | undefined;
  /** Comparator for the cycle name. */
  name?: StringComparator | null | undefined;
  /** Filter based on the existence of the relation. */
  null?: boolean | null | undefined;
  /** Comparator for the cycle number. */
  number?: NumberComparator | null | undefined;
  /** Compound filters, one of which need to be matched by the cycle. */
  or?: Array<NullableCycleFilter> | null | undefined;
  /** Comparator for the cycle start date. */
  startsAt?: DateComparator | null | undefined;
  /** Filters that the cycles team must satisfy. */
  team?: TeamFilter | null | undefined;
  /** Comparator for the updated at date. */
  updatedAt?: DateComparator | null | undefined;
};

/** Comparator for optional dates. */
export type NullableDateComparator = {
  /** Equals constraint. */
  eq?: unknown;
  /** Greater-than constraint. Matches any values that are greater than the given value. */
  gt?: unknown;
  /** Greater-than-or-equal constraint. Matches any values that are greater than or equal to the given value. */
  gte?: unknown;
  /** In-array constraint. */
  in?: Array<unknown> | null | undefined;
  /** Less-than constraint. Matches any values that are less than the given value. */
  lt?: unknown;
  /** Less-than-or-equal constraint. Matches any values that are less than or equal to the given value. */
  lte?: unknown;
  /** Not-equals constraint. */
  neq?: unknown;
  /** Not-in-array constraint. */
  nin?: Array<unknown> | null | undefined;
  /** Null constraint. Matches any non-null values if the given value is false, otherwise it matches null values. */
  null?: boolean | null | undefined;
};

/** Document content filtering options. */
export type NullableDocumentContentFilter = {
  /** Compound filters, all of which need to be matched by the user. */
  and?: Array<NullableDocumentContentFilter> | null | undefined;
  /** Comparator for the document content. */
  content?: NullableStringComparator | null | undefined;
  /** Comparator for the created at date. */
  createdAt?: DateComparator | null | undefined;
  /** Filters that the document content document must satisfy. */
  document?: DocumentFilter | null | undefined;
  /** Comparator for the identifier. */
  id?: IdComparator | null | undefined;
  /** Filters that the document content initiative must satisfy. */
  initiative?: InitiativeFilter | null | undefined;
  /** Filters that the document content issue must satisfy. */
  issue?: IssueFilter | null | undefined;
  /** Filter based on the existence of the relation. */
  null?: boolean | null | undefined;
  /** Compound filters, one of which need to be matched by the user. */
  or?: Array<NullableDocumentContentFilter> | null | undefined;
  /** Filters that the document content project must satisfy. */
  project?: ProjectFilter | null | undefined;
  /** Filters that the document content project milestone must satisfy. */
  projectMilestone?: ProjectMilestoneFilter | null | undefined;
  /** Comparator for the updated at date. */
  updatedAt?: DateComparator | null | undefined;
};

/** Nullable comparator for optional durations. */
export type NullableDurationComparator = {
  /** Equals constraint. */
  eq?: unknown;
  /** Greater-than constraint. Matches any values that are greater than the given value. */
  gt?: unknown;
  /** Greater-than-or-equal constraint. Matches any values that are greater than or equal to the given value. */
  gte?: unknown;
  /** In-array constraint. */
  in?: Array<unknown> | null | undefined;
  /** Less-than constraint. Matches any values that are less than the given value. */
  lt?: unknown;
  /** Less-than-or-equal constraint. Matches any values that are less than or equal to the given value. */
  lte?: unknown;
  /** Not-equals constraint. */
  neq?: unknown;
  /** Not-in-array constraint. */
  nin?: Array<unknown> | null | undefined;
  /** Null constraint. Matches any non-null values if the given value is false, otherwise it matches null values. */
  null?: boolean | null | undefined;
};

/** Initiative filtering options. */
export type NullableInitiativeFilter = {
  /** Comparator for the initiative activity type. */
  activityType?: StringComparator | null | undefined;
  /** Filters that the initiative must be an ancestor of. */
  ancestors?: InitiativeCollectionFilter | null | undefined;
  /** Compound filters, all of which need to be matched by the initiative. */
  and?: Array<NullableInitiativeFilter> | null | undefined;
  /** Comparator for the initiative completed at date. */
  completedAt?: NullableDateComparator | null | undefined;
  /** Comparator for the created at date. */
  createdAt?: DateComparator | null | undefined;
  /** Filters that the initiative creator must satisfy. */
  creator?: NullableUserFilter | null | undefined;
  /** Comparator for the initiative health: onTrack, atRisk, offTrack */
  health?: StringComparator | null | undefined;
  /** Comparator for the initiative health (with age): onTrack, atRisk, offTrack, outdated, noUpdate */
  healthWithAge?: StringComparator | null | undefined;
  /** Comparator for the identifier. */
  id?: IdComparator | null | undefined;
  /** Filters that the initiative updates must satisfy. */
  initiativeUpdates?: InitiativeUpdatesCollectionFilter | null | undefined;
  /** [Internal] Filters that the initiative labels must satisfy. */
  labels?: InitiativeLabelCollectionFilter | null | undefined;
  /** Comparator for the initiative name. */
  name?: StringComparator | null | undefined;
  /** Filter based on the existence of the relation. */
  null?: boolean | null | undefined;
  /** Compound filters, one of which need to be matched by the initiative. */
  or?: Array<NullableInitiativeFilter> | null | undefined;
  /** Filters that the initiative owner must satisfy. */
  owner?: NullableUserFilter | null | undefined;
  /** [Internal] Comparator for the initiative priority. */
  priority?: NullableNumberComparator | null | undefined;
  /** Comparator for the initiative slug ID. */
  slugId?: StringComparator | null | undefined;
  /** Comparator for the initiative started at date. */
  startedAt?: NullableDateComparator | null | undefined;
  /** Comparator for the initiative status: Planned, Active, Completed */
  status?: StringComparator | null | undefined;
  /** Comparator for the initiative target date. */
  targetDate?: NullableDateComparator | null | undefined;
  /** Filters that the initiative teams must satisfy. */
  teams?: TeamCollectionFilter | null | undefined;
  /** Comparator for the updated at date. */
  updatedAt?: DateComparator | null | undefined;
};

/** Issue filtering options. */
export type NullableIssueFilter = {
  /** [Internal] Comparator for the issue's accumulatedStateUpdatedAt date. */
  accumulatedStateUpdatedAt?: NullableDateComparator | null | undefined;
  /** Filters that the issue's activities must satisfy. */
  activity?: ActivityCollectionFilter | null | undefined;
  /** Comparator for the issues added to cycle at date. */
  addedToCycleAt?: NullableDateComparator | null | undefined;
  /** Comparator for the period when issue was added to a cycle. */
  addedToCyclePeriod?: CyclePeriodComparator | null | undefined;
  /** [Internal] Age (created -> now) comparator, defined if the issue is still open. */
  ageTime?: NullableDurationComparator | null | undefined;
  /** Compound filters, all of which need to be matched by the issue. */
  and?: Array<NullableIssueFilter> | null | undefined;
  /** Comparator for the issues archived at date. */
  archivedAt?: NullableDateComparator | null | undefined;
  /** Filters that the issues assignee must satisfy. */
  assignee?: NullableUserFilter | null | undefined;
  /** Filters that the issues attachments must satisfy. */
  attachments?: AttachmentCollectionFilter | null | undefined;
  /** Comparator for the issues auto archived at date. */
  autoArchivedAt?: NullableDateComparator | null | undefined;
  /** Comparator for the issues auto closed at date. */
  autoClosedAt?: NullableDateComparator | null | undefined;
  /** Comparator for the issues canceled at date. */
  canceledAt?: NullableDateComparator | null | undefined;
  /** Filters that the child issues must satisfy. */
  children?: IssueCollectionFilter | null | undefined;
  /** Filters that the issues comments must satisfy. */
  comments?: CommentCollectionFilter | null | undefined;
  /** Comparator for the issues completed at date. */
  completedAt?: NullableDateComparator | null | undefined;
  /** Comparator for the created at date. */
  createdAt?: DateComparator | null | undefined;
  /** Filters that the issues creator must satisfy. */
  creator?: NullableUserFilter | null | undefined;
  /** Count of customers */
  customerCount?: NumberComparator | null | undefined;
  /** Count of important customers */
  customerImportantCount?: NumberComparator | null | undefined;
  /** Filters that the issues cycle must satisfy. */
  cycle?: NullableCycleFilter | null | undefined;
  /** [Internal] Cycle time (started -> completed) comparator. */
  cycleTime?: NullableDurationComparator | null | undefined;
  /** Filters that the issue's delegated agent must satisfy. */
  delegate?: NullableUserFilter | null | undefined;
  /** Comparator for the issues description. */
  description?: NullableStringComparator | null | undefined;
  /** Comparator for the issues due date. */
  dueDate?: NullableTimelessDateComparator | null | undefined;
  /** Comparator for the issues estimate. */
  estimate?: EstimateComparator | null | undefined;
  /** [Internal] Comparator for filtering issues bucketed as having active agent sessions, no closed agent pull requests, and no merged agent pull requests. */
  hasActiveAgentSessions?: RelationExistsComparator | null | undefined;
  /** Comparator for filtering issues which are blocked. */
  hasBlockedByRelations?: RelationExistsComparator | null | undefined;
  /** Comparator for filtering issues which are blocking. */
  hasBlockingRelations?: RelationExistsComparator | null | undefined;
  /** [Internal] Comparator for filtering issues bucketed as having all agent sessions dismissed or closed, and no merged agent pull requests. */
  hasDismissedAgentSessions?: RelationExistsComparator | null | undefined;
  /** Comparator for filtering issues which are duplicates. */
  hasDuplicateRelations?: RelationExistsComparator | null | undefined;
  /** [Internal] Comparator for filtering issues bucketed as having an errored agent session, no active sessions, and no merged agent pull requests. */
  hasErroredAgentSessions?: RelationExistsComparator | null | undefined;
  /** [Internal] Comparator for filtering issues which have agent-session-linked pull requests that were merged. */
  hasMergedAgentPullRequests?: RelationExistsComparator | null | undefined;
  /** Comparator for filtering issues with relations. */
  hasRelatedRelations?: RelationExistsComparator | null | undefined;
  /** Comparator for filtering issues which have been shared with users outside of the team. */
  hasSharedUsers?: RelationExistsComparator | null | undefined;
  /** [Internal] Comparator for filtering issues which have suggested assignees. */
  hasSuggestedAssignees?: RelationExistsComparator | null | undefined;
  /** [Internal] Comparator for filtering issues which have suggested labels. */
  hasSuggestedLabels?: RelationExistsComparator | null | undefined;
  /** [Internal] Comparator for filtering issues which have suggested projects. */
  hasSuggestedProjects?: RelationExistsComparator | null | undefined;
  /** [Internal] Comparator for filtering issues which have suggested related issues. */
  hasSuggestedRelatedIssues?: RelationExistsComparator | null | undefined;
  /** [Internal] Comparator for filtering issues which have suggested similar issues. */
  hasSuggestedSimilarIssues?: RelationExistsComparator | null | undefined;
  /** [Internal] Comparator for filtering issues which have suggested teams. */
  hasSuggestedTeams?: RelationExistsComparator | null | undefined;
  /** Comparator for the identifier. */
  id?: IssueIdComparator | null | undefined;
  /** Filters that issue labels must satisfy. */
  labels?: IssueLabelCollectionFilter | null | undefined;
  /** Filters that the last applied template must satisfy. */
  lastAppliedTemplate?: NullableTemplateFilter | null | undefined;
  /** [Internal] Lead time (created -> completed) comparator. */
  leadTime?: NullableDurationComparator | null | undefined;
  /** Filters that the issue's customer needs must satisfy. */
  needs?: CustomerNeedCollectionFilter | null | undefined;
  /** Filter based on the existence of the relation. */
  null?: boolean | null | undefined;
  /** Comparator for the issues number. */
  number?: NumberComparator | null | undefined;
  /** Compound filters, one of which need to be matched by the issue. */
  or?: Array<NullableIssueFilter> | null | undefined;
  /** Filters that the issue parent must satisfy. */
  parent?: NullableIssueFilter | null | undefined;
  /** Comparator for the issues priority. 0 = No priority, 1 = Urgent, 2 = High, 3 = Medium, 4 = Low. */
  priority?: NullableNumberComparator | null | undefined;
  /** Filters that the issues project must satisfy. */
  project?: NullableProjectFilter | null | undefined;
  /** Filters that the issues project milestone must satisfy. */
  projectMilestone?: NullableProjectMilestoneFilter | null | undefined;
  /** Filters that the issues reactions must satisfy. */
  reactions?: ReactionCollectionFilter | null | undefined;
  /** [ALPHA] Filters that the recurring issue template must satisfy. */
  recurringIssueTemplate?: NullableTemplateFilter | null | undefined;
  /** Filters that the issue's releases must satisfy. */
  releases?: ReleaseCollectionFilter | null | undefined;
  /** [Internal] Comparator for the issues content. */
  searchableContent?: ContentComparator | null | undefined;
  /** Filters that users the issue has been shared with must satisfy. */
  sharedWith?: UserCollectionFilter | null | undefined;
  /** Comparator for the issue's SLA breach date. */
  slaBreachesAt?: NullableDateComparator | null | undefined;
  /** Comparator for the issues sla status. */
  slaStatus?: SlaStatusComparator | null | undefined;
  /** Filters that the issues snoozer must satisfy. */
  snoozedBy?: NullableUserFilter | null | undefined;
  /** Comparator for the issues snoozed until date. */
  snoozedUntilAt?: NullableDateComparator | null | undefined;
  /** Filters that the source must satisfy. */
  sourceMetadata?: SourceMetadataComparator | null | undefined;
  /** Comparator for the issues started at date. */
  startedAt?: NullableDateComparator | null | undefined;
  /** Filters that the issues state must satisfy. */
  state?: WorkflowStateFilter | null | undefined;
  /** Filters that issue subscribers must satisfy. */
  subscribers?: UserCollectionFilter | null | undefined;
  /** [Internal] Filters that the issue's suggestions must satisfy. */
  suggestions?: IssueSuggestionCollectionFilter | null | undefined;
  /** Filters that the issues team must satisfy. */
  team?: TeamFilter | null | undefined;
  /** Comparator for the issues title. */
  title?: StringComparator | null | undefined;
  /** [Internal] Triage time (entered triaged -> triaged) comparator. */
  triageTime?: NullableDurationComparator | null | undefined;
  /** Comparator for the issues triaged at date. */
  triagedAt?: NullableDateComparator | null | undefined;
  /** Comparator for the updated at date. */
  updatedAt?: DateComparator | null | undefined;
};

/** Comparator for optional numbers. */
export type NullableNumberComparator = {
  /** Equals constraint. */
  eq?: number | null | undefined;
  /** Greater-than constraint. Matches any values that are greater than the given value. */
  gt?: number | null | undefined;
  /** Greater-than-or-equal constraint. Matches any values that are greater than or equal to the given value. */
  gte?: number | null | undefined;
  /** In-array constraint. */
  in?: Array<number> | null | undefined;
  /** Less-than constraint. Matches any values that are less than the given value. */
  lt?: number | null | undefined;
  /** Less-than-or-equal constraint. Matches any values that are less than or equal to the given value. */
  lte?: number | null | undefined;
  /** Not-equals constraint. */
  neq?: number | null | undefined;
  /** Not-in-array constraint. */
  nin?: Array<number> | null | undefined;
  /** Null constraint. Matches any non-null values if the given value is false, otherwise it matches null values. */
  null?: boolean | null | undefined;
};

/** Project filtering options. */
export type NullableProjectFilter = {
  /** Filters that the project's team must satisfy. */
  accessibleTeams?: TeamCollectionFilter | null | undefined;
  /** [ALPHA] Comparator for the project activity type: buzzin, active, some, none */
  activityType?: StringComparator | null | undefined;
  /** Compound filters, all of which need to be matched by the project. */
  and?: Array<NullableProjectFilter> | null | undefined;
  /** Comparator for the project cancelation date. */
  canceledAt?: NullableDateComparator | null | undefined;
  /** Comparator for the project completion date. */
  completedAt?: NullableDateComparator | null | undefined;
  /** Filters that the project's completed milestones must satisfy. */
  completedProjectMilestones?: ProjectMilestoneCollectionFilter | null | undefined;
  /** Comparator for the created at date. */
  createdAt?: DateComparator | null | undefined;
  /** Filters that the projects creator must satisfy. */
  creator?: UserFilter | null | undefined;
  /** Count of customers */
  customerCount?: NumberComparator | null | undefined;
  /** Count of important customers */
  customerImportantCount?: NumberComparator | null | undefined;
  /** Comparator for filtering projects which are blocked. */
  hasBlockedByRelations?: RelationExistsComparator | null | undefined;
  /** Comparator for filtering projects which are blocking. */
  hasBlockingRelations?: RelationExistsComparator | null | undefined;
  /** [Deprecated] Comparator for filtering projects which this is depended on by. */
  hasDependedOnByRelations?: RelationExistsComparator | null | undefined;
  /** [Deprecated]Comparator for filtering projects which this depends on. */
  hasDependsOnRelations?: RelationExistsComparator | null | undefined;
  /** Comparator for filtering projects with relations. */
  hasRelatedRelations?: RelationExistsComparator | null | undefined;
  /** Comparator for filtering projects with violated dependencies. */
  hasViolatedRelations?: RelationExistsComparator | null | undefined;
  /** Comparator for the project health: onTrack, atRisk, offTrack */
  health?: StringComparator | null | undefined;
  /** Comparator for the project health (with age): onTrack, atRisk, offTrack, outdated, noUpdate */
  healthWithAge?: StringComparator | null | undefined;
  /** Comparator for the identifier. */
  id?: IdComparator | null | undefined;
  /** Filters that the projects initiatives must satisfy. */
  initiatives?: InitiativeCollectionFilter | null | undefined;
  /** Filters that the projects issues must satisfy. */
  issues?: IssueCollectionFilter | null | undefined;
  /** Filters that project labels must satisfy. */
  labels?: ProjectLabelCollectionFilter | null | undefined;
  /** Filters that the last applied template must satisfy. */
  lastAppliedTemplate?: NullableTemplateFilter | null | undefined;
  /** Filters that the projects lead must satisfy. */
  lead?: NullableUserFilter | null | undefined;
  /** Filters that the projects members must satisfy. */
  members?: UserCollectionFilter | null | undefined;
  /** Comparator for the project name. */
  name?: StringComparator | null | undefined;
  /** Filters that the project's customer needs must satisfy. */
  needs?: CustomerNeedCollectionFilter | null | undefined;
  /** Filters that the project's next milestone must satisfy. */
  nextProjectMilestone?: ProjectMilestoneFilter | null | undefined;
  /** Filter based on the existence of the relation. */
  null?: boolean | null | undefined;
  /** Compound filters, one of which need to be matched by the project. */
  or?: Array<NullableProjectFilter> | null | undefined;
  /** Comparator for the project priority. */
  priority?: NullableNumberComparator | null | undefined;
  /** Filters that the project's milestones must satisfy. */
  projectMilestones?: ProjectMilestoneCollectionFilter | null | undefined;
  /** Comparator for the project updates. */
  projectUpdates?: ProjectUpdatesCollectionFilter | null | undefined;
  /** Filters that the projects roadmaps must satisfy. */
  roadmaps?: RoadmapCollectionFilter | null | undefined;
  /** [Internal] Comparator for the project's content. */
  searchableContent?: ContentComparator | null | undefined;
  /** Comparator for the project slug ID. */
  slugId?: StringComparator | null | undefined;
  /** Comparator for the project start date. */
  startDate?: NullableDateComparator | null | undefined;
  /** Comparator for the project started date (when it was moved to an "In Progress" status). */
  startedAt?: NullableDateComparator | null | undefined;
  /** [DEPRECATED] Comparator for the project state. */
  state?: StringComparator | null | undefined;
  /** Filters that the project status must satisfy. */
  status?: ProjectStatusFilter | null | undefined;
  /** Comparator for the project target date. */
  targetDate?: NullableDateComparator | null | undefined;
  /** Comparator for the updated at date. */
  updatedAt?: DateComparator | null | undefined;
};

/** Project milestone filtering options. */
export type NullableProjectMilestoneFilter = {
  /** Compound filters, all of which need to be matched by the project milestone. */
  and?: Array<NullableProjectMilestoneFilter> | null | undefined;
  /** Comparator for the created at date. */
  createdAt?: DateComparator | null | undefined;
  /** Comparator for the identifier. */
  id?: IdComparator | null | undefined;
  /** Comparator for the project milestone name. */
  name?: NullableStringComparator | null | undefined;
  /** Filter based on the existence of the relation. */
  null?: boolean | null | undefined;
  /** Compound filters, one of which need to be matched by the project milestone. */
  or?: Array<NullableProjectMilestoneFilter> | null | undefined;
  /** Filters that the project milestone's project must satisfy. */
  project?: NullableProjectFilter | null | undefined;
  /** Comparator for the project milestone target date. */
  targetDate?: NullableDateComparator | null | undefined;
  /** Comparator for the updated at date. */
  updatedAt?: DateComparator | null | undefined;
};

/** Nullable project update filtering options. */
export type NullableProjectUpdateFilter = {
  /** Compound filters, all of which need to be matched by the project update. */
  and?: Array<NullableProjectUpdateFilter> | null | undefined;
  /** Comparator for the created at date. */
  createdAt?: DateComparator | null | undefined;
  /** Comparator for the identifier. */
  id?: IdComparator | null | undefined;
  /** Filter based on the existence of the relation. */
  null?: boolean | null | undefined;
  /** Compound filters, one of which need to be matched by the project update. */
  or?: Array<NullableProjectUpdateFilter> | null | undefined;
  /** Filters that the project update project must satisfy. */
  project?: ProjectFilter | null | undefined;
  /** Filters that the project updates reactions must satisfy. */
  reactions?: ReactionCollectionFilter | null | undefined;
  /** Comparator for the updated at date. */
  updatedAt?: DateComparator | null | undefined;
  /** Filters that the project update creator must satisfy. */
  user?: UserFilter | null | undefined;
};

/** Comparator for optional strings. */
export type NullableStringComparator = {
  /** Contains constraint. Matches any values that contain the given string. */
  contains?: string | null | undefined;
  /** Contains case insensitive constraint. Matches any values that contain the given string case insensitive. */
  containsIgnoreCase?: string | null | undefined;
  /** Contains case and accent insensitive constraint. Matches any values that contain the given string case and accent insensitive. */
  containsIgnoreCaseAndAccent?: string | null | undefined;
  /** Ends with constraint. Matches any values that end with the given string. */
  endsWith?: string | null | undefined;
  /** Equals constraint. */
  eq?: string | null | undefined;
  /** Equals case insensitive. Matches any values that matches the given string case insensitive. */
  eqIgnoreCase?: string | null | undefined;
  /** In-array constraint. */
  in?: Array<string> | null | undefined;
  /** Not-equals constraint. */
  neq?: string | null | undefined;
  /** Not-equals case insensitive. Matches any values that don't match the given string case insensitive. */
  neqIgnoreCase?: string | null | undefined;
  /** Not-in-array constraint. */
  nin?: Array<string> | null | undefined;
  /** Doesn't contain constraint. Matches any values that don't contain the given string. */
  notContains?: string | null | undefined;
  /** Doesn't contain case insensitive constraint. Matches any values that don't contain the given string case insensitive. */
  notContainsIgnoreCase?: string | null | undefined;
  /** Doesn't end with constraint. Matches any values that don't end with the given string. */
  notEndsWith?: string | null | undefined;
  /** Doesn't start with constraint. Matches any values that don't start with the given string. */
  notStartsWith?: string | null | undefined;
  /** Null constraint. Matches any non-null values if the given value is false, otherwise it matches null values. */
  null?: boolean | null | undefined;
  /** Starts with constraint. Matches any values that start with the given string. */
  startsWith?: string | null | undefined;
  /** Starts with case insensitive constraint. Matches any values that start with the given string. */
  startsWithIgnoreCase?: string | null | undefined;
};

/** Team filtering options. */
export type NullableTeamFilter = {
  /** Filters that the team's ancestors must satisfy. */
  ancestors?: TeamCollectionFilter | null | undefined;
  /** Compound filters, all of which need to be matched by the team. */
  and?: Array<NullableTeamFilter> | null | undefined;
  /** Comparator for the created at date. */
  createdAt?: DateComparator | null | undefined;
  /** Comparator for the team description. */
  description?: NullableStringComparator | null | undefined;
  /** Comparator for the identifier. */
  id?: IdComparator | null | undefined;
  /** Filters that the team's issues must satisfy. */
  issues?: IssueCollectionFilter | null | undefined;
  /** Comparator for the team key. */
  key?: StringComparator | null | undefined;
  /** Filters that the team's members must satisfy. */
  members?: UserCollectionFilter | null | undefined;
  /** Comparator for the team name. */
  name?: StringComparator | null | undefined;
  /** Filter based on the existence of the relation. */
  null?: boolean | null | undefined;
  /** Compound filters, one of which need to be matched by the team. */
  or?: Array<NullableTeamFilter> | null | undefined;
  /** Filters that the team's parent must satisfy. */
  parent?: NullableTeamFilter | null | undefined;
  /** [DEPRECATED] Comparator for the team privacy. */
  private?: BooleanComparator | null | undefined;
  /** Filters that the team's release pipelines must satisfy. */
  releasePipelines?: ReleasePipelineCollectionFilter | null | undefined;
  /** [Internal] Filters that the private team forming this team's visibility boundary must satisfy. Only relevant for non-public teams. */
  restrictedBy?: NullableTeamFilter | null | undefined;
  /** Comparator for the time at which the team was retired. */
  retiredAt?: NullableDateComparator | null | undefined;
  /** Comparator for the updated at date. */
  updatedAt?: DateComparator | null | undefined;
  /** Comparator for the team visibility. */
  visibility?: TeamVisibilityComparator | null | undefined;
};

/** Template filtering options. */
export type NullableTemplateFilter = {
  /** Compound filters, all of which need to be matched by the template. */
  and?: Array<NullableTemplateFilter> | null | undefined;
  /** Comparator for the created at date. */
  createdAt?: DateComparator | null | undefined;
  /** Comparator for the identifier. */
  id?: IdComparator | null | undefined;
  /** Comparator for the inherited template's ID. */
  inheritedFromId?: IdComparator | null | undefined;
  /** Comparator for the template's name. */
  name?: StringComparator | null | undefined;
  /** Filter based on the existence of the relation. */
  null?: boolean | null | undefined;
  /** Compound filters, one of which need to be matched by the template. */
  or?: Array<NullableTemplateFilter> | null | undefined;
  /** Comparator for the template's type. */
  type?: StringComparator | null | undefined;
  /** Comparator for the updated at date. */
  updatedAt?: DateComparator | null | undefined;
};

/** Comparator for optional timeless dates. */
export type NullableTimelessDateComparator = {
  /** Equals constraint. */
  eq?: unknown;
  /** Greater-than constraint. Matches any values that are greater than the given value. */
  gt?: unknown;
  /** Greater-than-or-equal constraint. Matches any values that are greater than or equal to the given value. */
  gte?: unknown;
  /** In-array constraint. */
  in?: Array<unknown> | null | undefined;
  /** Less-than constraint. Matches any values that are less than the given value. */
  lt?: unknown;
  /** Less-than-or-equal constraint. Matches any values that are less than or equal to the given value. */
  lte?: unknown;
  /** Not-equals constraint. */
  neq?: unknown;
  /** Not-in-array constraint. */
  nin?: Array<unknown> | null | undefined;
  /** Null constraint. Matches any non-null values if the given value is false, otherwise it matches null values. */
  null?: boolean | null | undefined;
};

/** User filtering options. */
export type NullableUserFilter = {
  /** Comparator for the user's activity status. */
  active?: BooleanComparator | null | undefined;
  /** Comparator for the user's admin status. */
  admin?: BooleanComparator | null | undefined;
  /** Compound filters, all of which need to be matched by the user. */
  and?: Array<NullableUserFilter> | null | undefined;
  /** Comparator for the user's app status. */
  app?: BooleanComparator | null | undefined;
  /** Filters that the users assigned issues must satisfy. */
  assignedIssues?: IssueCollectionFilter | null | undefined;
  /** Comparator for the created at date. */
  createdAt?: DateComparator | null | undefined;
  /** Comparator for the user's display name. */
  displayName?: StringComparator | null | undefined;
  /** Comparator for the user's email. */
  email?: StringComparator | null | undefined;
  /** Comparator for the identifier. */
  id?: IdComparator | null | undefined;
  /** Comparator for the user's invited status. */
  invited?: BooleanComparator | null | undefined;
  /** Comparator for the user's invited status. */
  isInvited?: BooleanComparator | null | undefined;
  /** Filter based on the currently authenticated user. Set to true to filter for the authenticated user, false for any other user. */
  isMe?: BooleanComparator | null | undefined;
  /** Comparator for the user's name. */
  name?: StringComparator | null | undefined;
  /** Filter based on the existence of the relation. */
  null?: boolean | null | undefined;
  /** Compound filters, one of which need to be matched by the user. */
  or?: Array<NullableUserFilter> | null | undefined;
  /** Comparator for the user's owner status. */
  owner?: BooleanComparator | null | undefined;
  /** Comparator for the updated at date. */
  updatedAt?: DateComparator | null | undefined;
};

/** Comparator for numbers. */
export type NumberComparator = {
  /** Equals constraint. */
  eq?: number | null | undefined;
  /** Greater-than constraint. Matches any values that are greater than the given value. */
  gt?: number | null | undefined;
  /** Greater-than-or-equal constraint. Matches any values that are greater than or equal to the given value. */
  gte?: number | null | undefined;
  /** In-array constraint. */
  in?: Array<number> | null | undefined;
  /** Less-than constraint. Matches any values that are less than the given value. */
  lt?: number | null | undefined;
  /** Less-than-or-equal constraint. Matches any values that are less than or equal to the given value. */
  lte?: number | null | undefined;
  /** Not-equals constraint. */
  neq?: number | null | undefined;
  /** Not-in-array constraint. */
  nin?: Array<number> | null | undefined;
};

/** Project filtering options. */
export type ProjectCollectionFilter = {
  /** Filters that the project's team must satisfy. */
  accessibleTeams?: TeamCollectionFilter | null | undefined;
  /** [ALPHA] Comparator for the project activity type: buzzin, active, some, none */
  activityType?: StringComparator | null | undefined;
  /** Compound filters, all of which need to be matched by the project. */
  and?: Array<ProjectCollectionFilter> | null | undefined;
  /** Comparator for the project cancelation date. */
  canceledAt?: NullableDateComparator | null | undefined;
  /** Comparator for the project completion date. */
  completedAt?: NullableDateComparator | null | undefined;
  /** Filters that the project's completed milestones must satisfy. */
  completedProjectMilestones?: ProjectMilestoneCollectionFilter | null | undefined;
  /** Comparator for the created at date. */
  createdAt?: DateComparator | null | undefined;
  /** Filters that the projects creator must satisfy. */
  creator?: UserFilter | null | undefined;
  /** Count of customers */
  customerCount?: NumberComparator | null | undefined;
  /** Count of important customers */
  customerImportantCount?: NumberComparator | null | undefined;
  /** Filters that needs to be matched by all projects. */
  every?: ProjectFilter | null | undefined;
  /** Comparator for filtering projects which are blocked. */
  hasBlockedByRelations?: RelationExistsComparator | null | undefined;
  /** Comparator for filtering projects which are blocking. */
  hasBlockingRelations?: RelationExistsComparator | null | undefined;
  /** [Deprecated] Comparator for filtering projects which this is depended on by. */
  hasDependedOnByRelations?: RelationExistsComparator | null | undefined;
  /** [Deprecated]Comparator for filtering projects which this depends on. */
  hasDependsOnRelations?: RelationExistsComparator | null | undefined;
  /** Comparator for filtering projects with relations. */
  hasRelatedRelations?: RelationExistsComparator | null | undefined;
  /** Comparator for filtering projects with violated dependencies. */
  hasViolatedRelations?: RelationExistsComparator | null | undefined;
  /** Comparator for the project health: onTrack, atRisk, offTrack */
  health?: StringComparator | null | undefined;
  /** Comparator for the project health (with age): onTrack, atRisk, offTrack, outdated, noUpdate */
  healthWithAge?: StringComparator | null | undefined;
  /** Comparator for the identifier. */
  id?: IdComparator | null | undefined;
  /** Filters that the projects initiatives must satisfy. */
  initiatives?: InitiativeCollectionFilter | null | undefined;
  /** Filters that the projects issues must satisfy. */
  issues?: IssueCollectionFilter | null | undefined;
  /** Filters that project labels must satisfy. */
  labels?: ProjectLabelCollectionFilter | null | undefined;
  /** Filters that the last applied template must satisfy. */
  lastAppliedTemplate?: NullableTemplateFilter | null | undefined;
  /** Filters that the projects lead must satisfy. */
  lead?: NullableUserFilter | null | undefined;
  /** Comparator for the collection length. */
  length?: NumberComparator | null | undefined;
  /** Filters that the projects members must satisfy. */
  members?: UserCollectionFilter | null | undefined;
  /** Comparator for the project name. */
  name?: StringComparator | null | undefined;
  /** Filters that the project's customer needs must satisfy. */
  needs?: CustomerNeedCollectionFilter | null | undefined;
  /** Filters that the project's next milestone must satisfy. */
  nextProjectMilestone?: ProjectMilestoneFilter | null | undefined;
  /** Compound filters, one of which need to be matched by the project. */
  or?: Array<ProjectCollectionFilter> | null | undefined;
  /** Comparator for the project priority. */
  priority?: NullableNumberComparator | null | undefined;
  /** Filters that the project's milestones must satisfy. */
  projectMilestones?: ProjectMilestoneCollectionFilter | null | undefined;
  /** Comparator for the project updates. */
  projectUpdates?: ProjectUpdatesCollectionFilter | null | undefined;
  /** Filters that the projects roadmaps must satisfy. */
  roadmaps?: RoadmapCollectionFilter | null | undefined;
  /** [Internal] Comparator for the project's content. */
  searchableContent?: ContentComparator | null | undefined;
  /** Comparator for the project slug ID. */
  slugId?: StringComparator | null | undefined;
  /** Filters that needs to be matched by some projects. */
  some?: ProjectFilter | null | undefined;
  /** Comparator for the project start date. */
  startDate?: NullableDateComparator | null | undefined;
  /** Comparator for the project started date (when it was moved to an "In Progress" status). */
  startedAt?: NullableDateComparator | null | undefined;
  /** [DEPRECATED] Comparator for the project state. */
  state?: StringComparator | null | undefined;
  /** Filters that the project status must satisfy. */
  status?: ProjectStatusFilter | null | undefined;
  /** Comparator for the project target date. */
  targetDate?: NullableDateComparator | null | undefined;
  /** Comparator for the updated at date. */
  updatedAt?: DateComparator | null | undefined;
};

/** Project filtering options. */
export type ProjectFilter = {
  /** Filters that the project's team must satisfy. */
  accessibleTeams?: TeamCollectionFilter | null | undefined;
  /** [ALPHA] Comparator for the project activity type: buzzin, active, some, none */
  activityType?: StringComparator | null | undefined;
  /** Compound filters, all of which need to be matched by the project. */
  and?: Array<ProjectFilter> | null | undefined;
  /** Comparator for the project cancelation date. */
  canceledAt?: NullableDateComparator | null | undefined;
  /** Comparator for the project completion date. */
  completedAt?: NullableDateComparator | null | undefined;
  /** Filters that the project's completed milestones must satisfy. */
  completedProjectMilestones?: ProjectMilestoneCollectionFilter | null | undefined;
  /** Comparator for the created at date. */
  createdAt?: DateComparator | null | undefined;
  /** Filters that the projects creator must satisfy. */
  creator?: UserFilter | null | undefined;
  /** Count of customers */
  customerCount?: NumberComparator | null | undefined;
  /** Count of important customers */
  customerImportantCount?: NumberComparator | null | undefined;
  /** Comparator for filtering projects which are blocked. */
  hasBlockedByRelations?: RelationExistsComparator | null | undefined;
  /** Comparator for filtering projects which are blocking. */
  hasBlockingRelations?: RelationExistsComparator | null | undefined;
  /** [Deprecated] Comparator for filtering projects which this is depended on by. */
  hasDependedOnByRelations?: RelationExistsComparator | null | undefined;
  /** [Deprecated]Comparator for filtering projects which this depends on. */
  hasDependsOnRelations?: RelationExistsComparator | null | undefined;
  /** Comparator for filtering projects with relations. */
  hasRelatedRelations?: RelationExistsComparator | null | undefined;
  /** Comparator for filtering projects with violated dependencies. */
  hasViolatedRelations?: RelationExistsComparator | null | undefined;
  /** Comparator for the project health: onTrack, atRisk, offTrack */
  health?: StringComparator | null | undefined;
  /** Comparator for the project health (with age): onTrack, atRisk, offTrack, outdated, noUpdate */
  healthWithAge?: StringComparator | null | undefined;
  /** Comparator for the identifier. */
  id?: IdComparator | null | undefined;
  /** Filters that the projects initiatives must satisfy. */
  initiatives?: InitiativeCollectionFilter | null | undefined;
  /** Filters that the projects issues must satisfy. */
  issues?: IssueCollectionFilter | null | undefined;
  /** Filters that project labels must satisfy. */
  labels?: ProjectLabelCollectionFilter | null | undefined;
  /** Filters that the last applied template must satisfy. */
  lastAppliedTemplate?: NullableTemplateFilter | null | undefined;
  /** Filters that the projects lead must satisfy. */
  lead?: NullableUserFilter | null | undefined;
  /** Filters that the projects members must satisfy. */
  members?: UserCollectionFilter | null | undefined;
  /** Comparator for the project name. */
  name?: StringComparator | null | undefined;
  /** Filters that the project's customer needs must satisfy. */
  needs?: CustomerNeedCollectionFilter | null | undefined;
  /** Filters that the project's next milestone must satisfy. */
  nextProjectMilestone?: ProjectMilestoneFilter | null | undefined;
  /** Compound filters, one of which need to be matched by the project. */
  or?: Array<ProjectFilter> | null | undefined;
  /** Comparator for the project priority. */
  priority?: NullableNumberComparator | null | undefined;
  /** Filters that the project's milestones must satisfy. */
  projectMilestones?: ProjectMilestoneCollectionFilter | null | undefined;
  /** Comparator for the project updates. */
  projectUpdates?: ProjectUpdatesCollectionFilter | null | undefined;
  /** Filters that the projects roadmaps must satisfy. */
  roadmaps?: RoadmapCollectionFilter | null | undefined;
  /** [Internal] Comparator for the project's content. */
  searchableContent?: ContentComparator | null | undefined;
  /** Comparator for the project slug ID. */
  slugId?: StringComparator | null | undefined;
  /** Comparator for the project start date. */
  startDate?: NullableDateComparator | null | undefined;
  /** Comparator for the project started date (when it was moved to an "In Progress" status). */
  startedAt?: NullableDateComparator | null | undefined;
  /** [DEPRECATED] Comparator for the project state. */
  state?: StringComparator | null | undefined;
  /** Filters that the project status must satisfy. */
  status?: ProjectStatusFilter | null | undefined;
  /** Comparator for the project target date. */
  targetDate?: NullableDateComparator | null | undefined;
  /** Comparator for the updated at date. */
  updatedAt?: DateComparator | null | undefined;
};

/** Project label filtering options. */
export type ProjectLabelCollectionFilter = {
  /** Compound filters, all of which need to be matched by the label. */
  and?: Array<ProjectLabelCollectionFilter> | null | undefined;
  /** Comparator for the created at date. */
  createdAt?: DateComparator | null | undefined;
  /** Filters that the project labels creator must satisfy. */
  creator?: NullableUserFilter | null | undefined;
  /** Filters that needs to be matched by all project labels. */
  every?: ProjectLabelFilter | null | undefined;
  /** Comparator for the identifier. */
  id?: IdComparator | null | undefined;
  /** Comparator for whether the label is a group label. */
  isGroup?: BooleanComparator | null | undefined;
  /** Comparator for the collection length. */
  length?: NumberComparator | null | undefined;
  /** Comparator for the name. */
  name?: StringComparator | null | undefined;
  /** Filter based on the existence of the relation. */
  null?: boolean | null | undefined;
  /** Compound filters, one of which need to be matched by the label. */
  or?: Array<ProjectLabelCollectionFilter> | null | undefined;
  /** Filters that the project label's parent label must satisfy. */
  parent?: ProjectLabelFilter | null | undefined;
  /** Filters that needs to be matched by some project labels. */
  some?: ProjectLabelCollectionFilter | null | undefined;
  /** Comparator for the updated at date. */
  updatedAt?: DateComparator | null | undefined;
};

/** Project label filtering options. */
export type ProjectLabelFilter = {
  /** Compound filters, all of which need to be matched by the label. */
  and?: Array<ProjectLabelFilter> | null | undefined;
  /** Comparator for the created at date. */
  createdAt?: DateComparator | null | undefined;
  /** Filters that the project labels creator must satisfy. */
  creator?: NullableUserFilter | null | undefined;
  /** Comparator for the identifier. */
  id?: IdComparator | null | undefined;
  /** Comparator for whether the label is a group label. */
  isGroup?: BooleanComparator | null | undefined;
  /** Comparator for the name. */
  name?: StringComparator | null | undefined;
  /** Compound filters, one of which need to be matched by the label. */
  or?: Array<ProjectLabelFilter> | null | undefined;
  /** Filters that the project label's parent label must satisfy. */
  parent?: ProjectLabelFilter | null | undefined;
  /** Comparator for the updated at date. */
  updatedAt?: DateComparator | null | undefined;
};

/** Milestone collection filtering options. */
export type ProjectMilestoneCollectionFilter = {
  /** Compound filters, all of which need to be matched by the milestone. */
  and?: Array<ProjectMilestoneCollectionFilter> | null | undefined;
  /** Comparator for the created at date. */
  createdAt?: DateComparator | null | undefined;
  /** Filters that needs to be matched by all milestones. */
  every?: ProjectMilestoneFilter | null | undefined;
  /** Comparator for the identifier. */
  id?: IdComparator | null | undefined;
  /** Comparator for the collection length. */
  length?: NumberComparator | null | undefined;
  /** Comparator for the project milestone name. */
  name?: NullableStringComparator | null | undefined;
  /** Compound filters, one of which need to be matched by the milestone. */
  or?: Array<ProjectMilestoneCollectionFilter> | null | undefined;
  /** Filters that the project milestone's project must satisfy. */
  project?: NullableProjectFilter | null | undefined;
  /** Filters that needs to be matched by some milestones. */
  some?: ProjectMilestoneFilter | null | undefined;
  /** Comparator for the project milestone target date. */
  targetDate?: NullableDateComparator | null | undefined;
  /** Comparator for the updated at date. */
  updatedAt?: DateComparator | null | undefined;
};

/** Project milestone filtering options. */
export type ProjectMilestoneFilter = {
  /** Compound filters, all of which need to be matched by the project milestone. */
  and?: Array<ProjectMilestoneFilter> | null | undefined;
  /** Comparator for the created at date. */
  createdAt?: DateComparator | null | undefined;
  /** Comparator for the identifier. */
  id?: IdComparator | null | undefined;
  /** Comparator for the project milestone name. */
  name?: NullableStringComparator | null | undefined;
  /** Compound filters, one of which need to be matched by the project milestone. */
  or?: Array<ProjectMilestoneFilter> | null | undefined;
  /** Filters that the project milestone's project must satisfy. */
  project?: NullableProjectFilter | null | undefined;
  /** Comparator for the project milestone target date. */
  targetDate?: NullableDateComparator | null | undefined;
  /** Comparator for the updated at date. */
  updatedAt?: DateComparator | null | undefined;
};

/** Project status filtering options. */
export type ProjectStatusFilter = {
  /** Compound filters, all of which need to be matched by the project status. */
  and?: Array<ProjectStatusFilter> | null | undefined;
  /** Comparator for the created at date. */
  createdAt?: DateComparator | null | undefined;
  /** Comparator for the project status description. */
  description?: StringComparator | null | undefined;
  /** Comparator for the identifier. */
  id?: IdComparator | null | undefined;
  /** Comparator for the project status name. */
  name?: StringComparator | null | undefined;
  /** Compound filters, one of which needs to be matched by the project status. */
  or?: Array<ProjectStatusFilter> | null | undefined;
  /** Comparator for the project status position. */
  position?: NumberComparator | null | undefined;
  /** Filters that the project status projects must satisfy. */
  projects?: ProjectCollectionFilter | null | undefined;
  /** Comparator for the project status type. */
  type?: StringComparator | null | undefined;
  /** Comparator for the updated at date. */
  updatedAt?: DateComparator | null | undefined;
};

/** Collection filtering options for filtering projects by project updates. */
export type ProjectUpdatesCollectionFilter = {
  /** Compound filters, all of which need to be matched by the project update. */
  and?: Array<ProjectUpdatesCollectionFilter> | null | undefined;
  /** Comparator for the created at date. */
  createdAt?: DateComparator | null | undefined;
  /** Filters that needs to be matched by all updates. */
  every?: ProjectUpdatesFilter | null | undefined;
  /** Comparator for the project update health. */
  health?: StringComparator | null | undefined;
  /** Comparator for the identifier. */
  id?: IdComparator | null | undefined;
  /** Comparator for the collection length. */
  length?: NumberComparator | null | undefined;
  /** Compound filters, one of which need to be matched by the update. */
  or?: Array<ProjectUpdatesCollectionFilter> | null | undefined;
  /** Filters that needs to be matched by some updates. */
  some?: ProjectUpdatesFilter | null | undefined;
  /** Comparator for the updated at date. */
  updatedAt?: DateComparator | null | undefined;
};

/** Options for filtering projects by project updates. */
export type ProjectUpdatesFilter = {
  /** Compound filters, all of which need to be matched by the project updates. */
  and?: Array<ProjectUpdatesFilter> | null | undefined;
  /** Comparator for the created at date. */
  createdAt?: DateComparator | null | undefined;
  /** Comparator for the project update health. */
  health?: StringComparator | null | undefined;
  /** Comparator for the identifier. */
  id?: IdComparator | null | undefined;
  /** Compound filters, one of which need to be matched by the project updates. */
  or?: Array<ProjectUpdatesFilter> | null | undefined;
  /** Comparator for the updated at date. */
  updatedAt?: DateComparator | null | undefined;
};

/** Reaction filtering options. */
export type ReactionCollectionFilter = {
  /** Compound filters, all of which need to be matched by the reaction. */
  and?: Array<ReactionCollectionFilter> | null | undefined;
  /** Comparator for the created at date. */
  createdAt?: DateComparator | null | undefined;
  /** Comparator for the reactions custom emoji. */
  customEmojiId?: IdComparator | null | undefined;
  /** Comparator for the reactions emoji. */
  emoji?: StringComparator | null | undefined;
  /** Filters that needs to be matched by all reactions. */
  every?: ReactionFilter | null | undefined;
  /** Comparator for the identifier. */
  id?: IdComparator | null | undefined;
  /** Comparator for the collection length. */
  length?: NumberComparator | null | undefined;
  /** Compound filters, one of which need to be matched by the reaction. */
  or?: Array<ReactionCollectionFilter> | null | undefined;
  /** Filters that needs to be matched by some reactions. */
  some?: ReactionFilter | null | undefined;
  /** Comparator for the updated at date. */
  updatedAt?: DateComparator | null | undefined;
};

/** Reaction filtering options. */
export type ReactionFilter = {
  /** Compound filters, all of which need to be matched by the reaction. */
  and?: Array<ReactionFilter> | null | undefined;
  /** Comparator for the created at date. */
  createdAt?: DateComparator | null | undefined;
  /** Comparator for the reactions custom emoji. */
  customEmojiId?: IdComparator | null | undefined;
  /** Comparator for the reactions emoji. */
  emoji?: StringComparator | null | undefined;
  /** Comparator for the identifier. */
  id?: IdComparator | null | undefined;
  /** Compound filters, one of which need to be matched by the reaction. */
  or?: Array<ReactionFilter> | null | undefined;
  /** Comparator for the updated at date. */
  updatedAt?: DateComparator | null | undefined;
};

/** Comparator for relation existence. */
export type RelationExistsComparator = {
  /** Equals constraint. */
  eq?: boolean | null | undefined;
  /** Not equals constraint. */
  neq?: boolean | null | undefined;
};

/** Release collection filtering options. */
export type ReleaseCollectionFilter = {
  /** Compound filters, all of which need to be matched by the release. */
  and?: Array<ReleaseCollectionFilter> | null | undefined;
  /** Comparator for the release completion date. */
  completedAt?: NullableDateComparator | null | undefined;
  /** Comparator for the created at date. */
  createdAt?: DateComparator | null | undefined;
  /** Filters that needs to be matched by all releases. */
  every?: ReleaseFilter | null | undefined;
  /** Comparator for whether the release is covered by any (non-archived) release note. Filter with `{ eq: false }` to retrieve releases that do not yet have release notes attached. */
  hasReleaseNotes?: BooleanComparator | null | undefined;
  /** Comparator for the identifier. */
  id?: IdComparator | null | undefined;
  /** Comparator for the collection length. */
  length?: NumberComparator | null | undefined;
  /** Comparator for the release name. */
  name?: StringComparator | null | undefined;
  /** Compound filters, one of which need to be matched by the release. */
  or?: Array<ReleaseCollectionFilter> | null | undefined;
  /** Filters that the release's pipeline must satisfy. */
  pipeline?: ReleasePipelineFilter | null | undefined;
  /** Filters that needs to be matched by some releases. */
  some?: ReleaseFilter | null | undefined;
  /** Filters that the release's stage must satisfy. */
  stage?: ReleaseStageFilter | null | undefined;
  /** Comparator for the updated at date. */
  updatedAt?: DateComparator | null | undefined;
  /** Comparator for the release version. */
  version?: StringComparator | null | undefined;
};

/** Release filtering options. */
export type ReleaseFilter = {
  /** Compound filters, all of which need to be matched by the release. */
  and?: Array<ReleaseFilter> | null | undefined;
  /** Comparator for the release completion date. */
  completedAt?: NullableDateComparator | null | undefined;
  /** Comparator for the created at date. */
  createdAt?: DateComparator | null | undefined;
  /** Comparator for whether the release is covered by any (non-archived) release note. Filter with `{ eq: false }` to retrieve releases that do not yet have release notes attached. */
  hasReleaseNotes?: BooleanComparator | null | undefined;
  /** Comparator for the identifier. */
  id?: IdComparator | null | undefined;
  /** Comparator for the release name. */
  name?: StringComparator | null | undefined;
  /** Compound filters, one of which need to be matched by the release. */
  or?: Array<ReleaseFilter> | null | undefined;
  /** Filters that the release's pipeline must satisfy. */
  pipeline?: ReleasePipelineFilter | null | undefined;
  /** Filters that the release's stage must satisfy. */
  stage?: ReleaseStageFilter | null | undefined;
  /** Comparator for the updated at date. */
  updatedAt?: DateComparator | null | undefined;
  /** Comparator for the release version. */
  version?: StringComparator | null | undefined;
};

/** Release pipeline collection filtering options. */
export type ReleasePipelineCollectionFilter = {
  /** Compound filters, all of which need to be matched by the release pipeline. */
  and?: Array<ReleasePipelineCollectionFilter> | null | undefined;
  /** Comparator for the created at date. */
  createdAt?: DateComparator | null | undefined;
  /** Filters that needs to be matched by all release pipelines. */
  every?: ReleasePipelineFilter | null | undefined;
  /** Comparator for the identifier. */
  id?: IdComparator | null | undefined;
  /** Comparator for the pipeline production flag. */
  isProduction?: BooleanComparator | null | undefined;
  /** Comparator for the collection length. */
  length?: NumberComparator | null | undefined;
  /** Comparator for the pipeline name. */
  name?: StringComparator | null | undefined;
  /** Compound filters, one of which need to be matched by the release pipeline. */
  or?: Array<ReleasePipelineCollectionFilter> | null | undefined;
  /** Filters that needs to be matched by some release pipelines. */
  some?: ReleasePipelineFilter | null | undefined;
  /** Filters that the release pipeline's teams must satisfy. */
  teams?: TeamCollectionFilter | null | undefined;
  /** Comparator for the updated at date. */
  updatedAt?: DateComparator | null | undefined;
};

/** Release pipeline filtering options. */
export type ReleasePipelineFilter = {
  /** Compound filters, all of which need to be matched by the pipeline. */
  and?: Array<ReleasePipelineFilter> | null | undefined;
  /** Comparator for the created at date. */
  createdAt?: DateComparator | null | undefined;
  /** Comparator for the identifier. */
  id?: IdComparator | null | undefined;
  /** Comparator for the pipeline production flag. */
  isProduction?: BooleanComparator | null | undefined;
  /** Comparator for the pipeline name. */
  name?: StringComparator | null | undefined;
  /** Compound filters, one of which need to be matched by the pipeline. */
  or?: Array<ReleasePipelineFilter> | null | undefined;
  /** Filters that the release pipeline's teams must satisfy. */
  teams?: TeamCollectionFilter | null | undefined;
  /** Comparator for the updated at date. */
  updatedAt?: DateComparator | null | undefined;
};

/** Release stage filtering options. */
export type ReleaseStageFilter = {
  /** Compound filters, all of which need to be matched by the stage. */
  and?: Array<ReleaseStageFilter> | null | undefined;
  /** Comparator for the created at date. */
  createdAt?: DateComparator | null | undefined;
  /** Comparator for the identifier. */
  id?: IdComparator | null | undefined;
  /** Comparator for the stage name. */
  name?: StringComparator | null | undefined;
  /** Compound filters, one of which need to be matched by the stage. */
  or?: Array<ReleaseStageFilter> | null | undefined;
  /** Comparator for the stage type. */
  type?: ReleaseStageTypeComparator | null | undefined;
  /** Comparator for the updated at date. */
  updatedAt?: DateComparator | null | undefined;
};

/** The type of a release stage, which determines the release's lifecycle state. Types include planned, started, completed, and canceled. Each pipeline must have at least one stage of each type, though only started stages may have multiple instances. */
export type ReleaseStageType =
  | 'canceled'
  | 'completed'
  | 'planned'
  | 'started';

/** Comparator for release stage type. */
export type ReleaseStageTypeComparator = {
  /** Equals constraint. */
  eq?: ReleaseStageType | null | undefined;
  /** In-array constraint. */
  in?: Array<ReleaseStageType> | null | undefined;
  /** Not-equals constraint. */
  neq?: ReleaseStageType | null | undefined;
  /** Not-in-array constraint. */
  nin?: Array<ReleaseStageType> | null | undefined;
  /** Null constraint. Matches any non-null values if the given value is false, otherwise it matches null values. */
  null?: boolean | null | undefined;
};

/** Roadmap collection filtering options. */
export type RoadmapCollectionFilter = {
  /** Compound filters, all of which need to be matched by the roadmap. */
  and?: Array<RoadmapCollectionFilter> | null | undefined;
  /** Comparator for the created at date. */
  createdAt?: DateComparator | null | undefined;
  /** Filters that the roadmap creator must satisfy. */
  creator?: UserFilter | null | undefined;
  /** Filters that needs to be matched by all roadmaps. */
  every?: RoadmapFilter | null | undefined;
  /** Comparator for the identifier. */
  id?: IdComparator | null | undefined;
  /** Comparator for the collection length. */
  length?: NumberComparator | null | undefined;
  /** Comparator for the roadmap name. */
  name?: StringComparator | null | undefined;
  /** Compound filters, one of which need to be matched by the roadmap. */
  or?: Array<RoadmapCollectionFilter> | null | undefined;
  /** Comparator for the roadmap slug ID. */
  slugId?: StringComparator | null | undefined;
  /** Filters that needs to be matched by some roadmaps. */
  some?: RoadmapFilter | null | undefined;
  /** Comparator for the updated at date. */
  updatedAt?: DateComparator | null | undefined;
};

/** Roadmap filtering options. */
export type RoadmapFilter = {
  /** Compound filters, all of which need to be matched by the roadmap. */
  and?: Array<RoadmapFilter> | null | undefined;
  /** Comparator for the created at date. */
  createdAt?: DateComparator | null | undefined;
  /** Filters that the roadmap creator must satisfy. */
  creator?: UserFilter | null | undefined;
  /** Comparator for the identifier. */
  id?: IdComparator | null | undefined;
  /** Comparator for the roadmap name. */
  name?: StringComparator | null | undefined;
  /** Compound filters, one of which need to be matched by the roadmap. */
  or?: Array<RoadmapFilter> | null | undefined;
  /** Comparator for the roadmap slug ID. */
  slugId?: StringComparator | null | undefined;
  /** Comparator for the updated at date. */
  updatedAt?: DateComparator | null | undefined;
};

/** Which day count to use for SLA calculations. */
export type SlaDayCountType =
  | 'all'
  | 'onlyBusinessDays';

/** [INTERNAL] Comparator for Salesforce metadata. */
export type SalesforceMetadataIntegrationComparator = {
  /** Salesforce Case metadata filter */
  caseMetadata?: unknown;
};

export type SlaStatus =
  | 'Breached'
  | 'Completed'
  | 'Failed'
  | 'HighRisk'
  | 'LowRisk'
  | 'MediumRisk';

/** Comparator for sla status. */
export type SlaStatusComparator = {
  /** Equals constraint. */
  eq?: SlaStatus | null | undefined;
  /** In-array constraint. */
  in?: Array<SlaStatus> | null | undefined;
  /** Not-equals constraint. */
  neq?: SlaStatus | null | undefined;
  /** Not-in-array constraint. */
  nin?: Array<SlaStatus> | null | undefined;
  /** Null constraint. Matches any non-null values if the given value is false, otherwise it matches null values. */
  null?: boolean | null | undefined;
};

/** Comparator for issue source type. */
export type SourceMetadataComparator = {
  /** Null constraint. Matches any non-null values if the given value is false, otherwise it matches null values. */
  null?: boolean | null | undefined;
  /** [INTERNAL] Comparator for the salesforce metadata. */
  salesforceMetadata?: SalesforceMetadataIntegrationComparator | null | undefined;
  /** Comparator for the sub type. */
  subType?: SubTypeComparator | null | undefined;
};

/** Comparator for `sourceType` field. */
export type SourceTypeComparator = {
  /** Contains constraint. Matches any values that contain the given string. */
  contains?: string | null | undefined;
  /** Contains case insensitive constraint. Matches any values that contain the given string case insensitive. */
  containsIgnoreCase?: string | null | undefined;
  /** Contains case and accent insensitive constraint. Matches any values that contain the given string case and accent insensitive. */
  containsIgnoreCaseAndAccent?: string | null | undefined;
  /** Ends with constraint. Matches any values that end with the given string. */
  endsWith?: string | null | undefined;
  /** Equals constraint. */
  eq?: string | null | undefined;
  /** Equals case insensitive. Matches any values that matches the given string case insensitive. */
  eqIgnoreCase?: string | null | undefined;
  /** In-array constraint. */
  in?: Array<string> | null | undefined;
  /** Not-equals constraint. */
  neq?: string | null | undefined;
  /** Not-equals case insensitive. Matches any values that don't match the given string case insensitive. */
  neqIgnoreCase?: string | null | undefined;
  /** Not-in-array constraint. */
  nin?: Array<string> | null | undefined;
  /** Doesn't contain constraint. Matches any values that don't contain the given string. */
  notContains?: string | null | undefined;
  /** Doesn't contain case insensitive constraint. Matches any values that don't contain the given string case insensitive. */
  notContainsIgnoreCase?: string | null | undefined;
  /** Doesn't end with constraint. Matches any values that don't end with the given string. */
  notEndsWith?: string | null | undefined;
  /** Doesn't start with constraint. Matches any values that don't start with the given string. */
  notStartsWith?: string | null | undefined;
  /** Starts with constraint. Matches any values that start with the given string. */
  startsWith?: string | null | undefined;
  /** Starts with case insensitive constraint. Matches any values that start with the given string. */
  startsWithIgnoreCase?: string | null | undefined;
};

/** Comparator for strings. */
export type StringArrayComparator = {
  /** Compound filters, all of which need to be matched. */
  every?: StringItemComparator | null | undefined;
  /** Length of the array. Matches any values that have the given length. */
  length?: NumberComparator | null | undefined;
  /** Compound filters, one of which needs to be matched. */
  some?: StringItemComparator | null | undefined;
};

/** Comparator for strings. */
export type StringComparator = {
  /** Contains constraint. Matches any values that contain the given string. */
  contains?: string | null | undefined;
  /** Contains case insensitive constraint. Matches any values that contain the given string case insensitive. */
  containsIgnoreCase?: string | null | undefined;
  /** Contains case and accent insensitive constraint. Matches any values that contain the given string case and accent insensitive. */
  containsIgnoreCaseAndAccent?: string | null | undefined;
  /** Ends with constraint. Matches any values that end with the given string. */
  endsWith?: string | null | undefined;
  /** Equals constraint. */
  eq?: string | null | undefined;
  /** Equals case insensitive. Matches any values that matches the given string case insensitive. */
  eqIgnoreCase?: string | null | undefined;
  /** In-array constraint. */
  in?: Array<string> | null | undefined;
  /** Not-equals constraint. */
  neq?: string | null | undefined;
  /** Not-equals case insensitive. Matches any values that don't match the given string case insensitive. */
  neqIgnoreCase?: string | null | undefined;
  /** Not-in-array constraint. */
  nin?: Array<string> | null | undefined;
  /** Doesn't contain constraint. Matches any values that don't contain the given string. */
  notContains?: string | null | undefined;
  /** Doesn't contain case insensitive constraint. Matches any values that don't contain the given string case insensitive. */
  notContainsIgnoreCase?: string | null | undefined;
  /** Doesn't end with constraint. Matches any values that don't end with the given string. */
  notEndsWith?: string | null | undefined;
  /** Doesn't start with constraint. Matches any values that don't start with the given string. */
  notStartsWith?: string | null | undefined;
  /** Starts with constraint. Matches any values that start with the given string. */
  startsWith?: string | null | undefined;
  /** Starts with case insensitive constraint. Matches any values that start with the given string. */
  startsWithIgnoreCase?: string | null | undefined;
};

/** Comparator for strings in arrays. */
export type StringItemComparator = {
  /** Contains constraint. Matches any values that contain the given string. */
  contains?: string | null | undefined;
  /** Contains case insensitive constraint. Matches any values that contain the given string case insensitive. */
  containsIgnoreCase?: string | null | undefined;
  /** Contains case and accent insensitive constraint. Matches any values that contain the given string case and accent insensitive. */
  containsIgnoreCaseAndAccent?: string | null | undefined;
  /** Ends with constraint. Matches any values that end with the given string. */
  endsWith?: string | null | undefined;
  /** Equals constraint. */
  eq?: string | null | undefined;
  /** Equals case insensitive. Matches any values that matches the given string case insensitive. */
  eqIgnoreCase?: string | null | undefined;
  /** In-array constraint. */
  in?: Array<string> | null | undefined;
  /** Not-equals constraint. */
  neq?: string | null | undefined;
  /** Not-equals case insensitive. Matches any values that don't match the given string case insensitive. */
  neqIgnoreCase?: string | null | undefined;
  /** Not-in-array constraint. */
  nin?: Array<string> | null | undefined;
  /** Doesn't contain constraint. Matches any values that don't contain the given string. */
  notContains?: string | null | undefined;
  /** Doesn't contain case insensitive constraint. Matches any values that don't contain the given string case insensitive. */
  notContainsIgnoreCase?: string | null | undefined;
  /** Doesn't end with constraint. Matches any values that don't end with the given string. */
  notEndsWith?: string | null | undefined;
  /** Doesn't start with constraint. Matches any values that don't start with the given string. */
  notStartsWith?: string | null | undefined;
  /** Starts with constraint. Matches any values that start with the given string. */
  startsWith?: string | null | undefined;
  /** Starts with case insensitive constraint. Matches any values that start with the given string. */
  startsWithIgnoreCase?: string | null | undefined;
};

/** Comparator for source type. */
export type SubTypeComparator = {
  /** Equals constraint. */
  eq?: string | null | undefined;
  /** In-array constraint. */
  in?: Array<string> | null | undefined;
  /** Not-equals constraint. */
  neq?: string | null | undefined;
  /** Not-in-array constraint. */
  nin?: Array<string> | null | undefined;
  /** Null constraint. Matches any non-null values if the given value is false, otherwise it matches null values. */
  null?: boolean | null | undefined;
};

/** Team collection filtering options. */
export type TeamCollectionFilter = {
  /** Filters that the team's ancestors must satisfy. */
  ancestors?: TeamCollectionFilter | null | undefined;
  /** Compound filters, all of which need to be matched by the team. */
  and?: Array<TeamCollectionFilter> | null | undefined;
  /** Comparator for the created at date. */
  createdAt?: DateComparator | null | undefined;
  /** Filters that needs to be matched by all teams. */
  every?: TeamFilter | null | undefined;
  /** Comparator for the identifier. */
  id?: IdComparator | null | undefined;
  /** Comparator for the collection length. */
  length?: NumberComparator | null | undefined;
  /** Compound filters, one of which need to be matched by the team. */
  or?: Array<TeamCollectionFilter> | null | undefined;
  /** Filters that the teams parent must satisfy. */
  parent?: NullableTeamFilter | null | undefined;
  /** Filters that needs to be matched by some teams. */
  some?: TeamFilter | null | undefined;
  /** Comparator for the updated at date. */
  updatedAt?: DateComparator | null | undefined;
};

/** Team filtering options. */
export type TeamFilter = {
  /** Filters that the team's ancestors must satisfy. */
  ancestors?: TeamCollectionFilter | null | undefined;
  /** Compound filters, all of which need to be matched by the team. */
  and?: Array<TeamFilter> | null | undefined;
  /** Comparator for the created at date. */
  createdAt?: DateComparator | null | undefined;
  /** Comparator for the team description. */
  description?: NullableStringComparator | null | undefined;
  /** Comparator for the identifier. */
  id?: IdComparator | null | undefined;
  /** Filters that the team's issues must satisfy. */
  issues?: IssueCollectionFilter | null | undefined;
  /** Comparator for the team key. */
  key?: StringComparator | null | undefined;
  /** Filters that the team's members must satisfy. */
  members?: UserCollectionFilter | null | undefined;
  /** Comparator for the team name. */
  name?: StringComparator | null | undefined;
  /** Compound filters, one of which need to be matched by the team. */
  or?: Array<TeamFilter> | null | undefined;
  /** Filters that the team's parent must satisfy. */
  parent?: NullableTeamFilter | null | undefined;
  /** [DEPRECATED] Comparator for the team privacy. */
  private?: BooleanComparator | null | undefined;
  /** Filters that the team's release pipelines must satisfy. */
  releasePipelines?: ReleasePipelineCollectionFilter | null | undefined;
  /** [Internal] Filters that the private team forming this team's visibility boundary must satisfy. Only relevant for non-public teams. */
  restrictedBy?: NullableTeamFilter | null | undefined;
  /** Comparator for the time at which the team was retired. */
  retiredAt?: NullableDateComparator | null | undefined;
  /** Comparator for the updated at date. */
  updatedAt?: DateComparator | null | undefined;
  /** Comparator for the team visibility. */
  visibility?: TeamVisibilityComparator | null | undefined;
};

/** The visibility of a team. A team can be public, private, or restricted within an enclosing private-team boundary. */
export type TeamVisibility =
  | 'private'
  | 'public'
  | 'restricted';

/** Comparator for team visibility. */
export type TeamVisibilityComparator = {
  /** Equals constraint. */
  eq?: TeamVisibility | null | undefined;
  /** In-array constraint. */
  in?: Array<TeamVisibility> | null | undefined;
  /** Not-equals constraint. */
  neq?: TeamVisibility | null | undefined;
  /** Not-in-array constraint. */
  nin?: Array<TeamVisibility> | null | undefined;
};

/** User filtering options. */
export type UserCollectionFilter = {
  /** Comparator for the user's activity status. */
  active?: BooleanComparator | null | undefined;
  /** Comparator for the user's admin status. */
  admin?: BooleanComparator | null | undefined;
  /** Compound filters, all of which need to be matched by the user. */
  and?: Array<UserCollectionFilter> | null | undefined;
  /** Comparator for the user's app status. */
  app?: BooleanComparator | null | undefined;
  /** Filters that the users assigned issues must satisfy. */
  assignedIssues?: IssueCollectionFilter | null | undefined;
  /** Comparator for the created at date. */
  createdAt?: DateComparator | null | undefined;
  /** Comparator for the user's display name. */
  displayName?: StringComparator | null | undefined;
  /** Comparator for the user's email. */
  email?: StringComparator | null | undefined;
  /** Filters that needs to be matched by all users. */
  every?: UserFilter | null | undefined;
  /** Comparator for the identifier. */
  id?: IdComparator | null | undefined;
  /** Comparator for the user's invited status. */
  invited?: BooleanComparator | null | undefined;
  /** Comparator for the user's invited status. */
  isInvited?: BooleanComparator | null | undefined;
  /** Filter based on the currently authenticated user. Set to true to filter for the authenticated user, false for any other user. */
  isMe?: BooleanComparator | null | undefined;
  /** Comparator for the collection length. */
  length?: NumberComparator | null | undefined;
  /** Comparator for the user's name. */
  name?: StringComparator | null | undefined;
  /** Compound filters, one of which need to be matched by the user. */
  or?: Array<UserCollectionFilter> | null | undefined;
  /** Comparator for the user's owner status. */
  owner?: BooleanComparator | null | undefined;
  /** Filters that needs to be matched by some users. */
  some?: UserFilter | null | undefined;
  /** Comparator for the updated at date. */
  updatedAt?: DateComparator | null | undefined;
};

/** User filtering options. */
export type UserFilter = {
  /** Comparator for the user's activity status. */
  active?: BooleanComparator | null | undefined;
  /** Comparator for the user's admin status. */
  admin?: BooleanComparator | null | undefined;
  /** Compound filters, all of which need to be matched by the user. */
  and?: Array<UserFilter> | null | undefined;
  /** Comparator for the user's app status. */
  app?: BooleanComparator | null | undefined;
  /** Filters that the users assigned issues must satisfy. */
  assignedIssues?: IssueCollectionFilter | null | undefined;
  /** Comparator for the created at date. */
  createdAt?: DateComparator | null | undefined;
  /** Comparator for the user's display name. */
  displayName?: StringComparator | null | undefined;
  /** Comparator for the user's email. */
  email?: StringComparator | null | undefined;
  /** Comparator for the identifier. */
  id?: IdComparator | null | undefined;
  /** Comparator for the user's invited status. */
  invited?: BooleanComparator | null | undefined;
  /** Comparator for the user's invited status. */
  isInvited?: BooleanComparator | null | undefined;
  /** Filter based on the currently authenticated user. Set to true to filter for the authenticated user, false for any other user. */
  isMe?: BooleanComparator | null | undefined;
  /** Comparator for the user's name. */
  name?: StringComparator | null | undefined;
  /** Compound filters, one of which need to be matched by the user. */
  or?: Array<UserFilter> | null | undefined;
  /** Comparator for the user's owner status. */
  owner?: BooleanComparator | null | undefined;
  /** Comparator for the updated at date. */
  updatedAt?: DateComparator | null | undefined;
};

/** Workflow state filtering options. */
export type WorkflowStateFilter = {
  /** Compound filters, all of which need to be matched by the workflow state. */
  and?: Array<WorkflowStateFilter> | null | undefined;
  /** Comparator for the created at date. */
  createdAt?: DateComparator | null | undefined;
  /** Comparator for the workflow state description. */
  description?: StringComparator | null | undefined;
  /** Comparator for the identifier. */
  id?: IdComparator | null | undefined;
  /** Filters that the workflow states issues must satisfy. */
  issues?: IssueCollectionFilter | null | undefined;
  /** Comparator for the workflow state name. */
  name?: StringComparator | null | undefined;
  /** Compound filters, one of which need to be matched by the workflow state. */
  or?: Array<WorkflowStateFilter> | null | undefined;
  /** Comparator for the workflow state position. */
  position?: NumberComparator | null | undefined;
  /** Filters that the workflow states team must satisfy. */
  team?: TeamFilter | null | undefined;
  /** Comparator for the workflow state type. Possible values are "triage", "backlog", "unstarted", "started", "completed", "canceled", "duplicate". */
  type?: StringComparator | null | undefined;
  /** Comparator for the updated at date. */
  updatedAt?: DateComparator | null | undefined;
};

export type GetNeedlineIssuesQueryVariables = Exact<{
  customerId?: string | number | null | undefined;
}>;


export type GetNeedlineIssuesQuery = { issues: { nodes: Array<{ id: string, title: string, needs: { nodes: Array<{ priority: number }> }, currentCustomerNeeds: { nodes: Array<{ id: string, priority: number, body: string | null }> } }> }, projects: { nodes: Array<{ id: string, title: string, needs: { nodes: Array<{ priority: number }> }, currentCustomerNeeds: { nodes: Array<{ id: string, priority: number, body: string | null }> } }> } };

export type CustomerNeedCreateMutationVariables = Exact<{
  input: CustomerNeedCreateInput;
}>;


export type CustomerNeedCreateMutation = { customerNeedCreate: { success: boolean, need: { id: string, body: string | null, priority: number } } };

export type CustomerNeedUpdateMutationVariables = Exact<{
  customerNeedUpdateId: string;
  input: CustomerNeedUpdateInput;
}>;


export type CustomerNeedUpdateMutation = { customerNeedUpdate: { success: boolean, need: { id: string, body: string | null, priority: number } } };

export type IssueCreateMutationVariables = Exact<{
  input: IssueCreateInput;
}>;


export type IssueCreateMutation = { issueCreate: { success: boolean, issue: { id: string, identifier: string, title: string } | null } };

export type CustomerNeedDeleteMutationVariables = Exact<{
  customerNeedDeleteId: string;
}>;


export type CustomerNeedDeleteMutation = { customerNeedDelete: { success: boolean } };

export type CustomerQueryVariables = Exact<{
  filter?: CustomerFilter | null | undefined;
  first?: number | null | undefined;
}>;


export type CustomerQuery = { customers: { nodes: Array<{ id: string, name: string }> } };


export const GetNeedlineIssuesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetNeedlineIssues"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"customerId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"issues"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"labels"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"containsIgnoreCase"},"value":{"kind":"StringValue","value":"needline","block":false}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"needs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"priority"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"currentCustomerNeeds"},"name":{"kind":"Name","value":"needs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"customer"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"customerId"}}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"priority"}},{"kind":"Field","name":{"kind":"Name","value":"body"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"projects"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"labels"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"containsIgnoreCase"},"value":{"kind":"StringValue","value":"needline","block":false}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"title"},"name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"needs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"priority"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"currentCustomerNeeds"},"name":{"kind":"Name","value":"needs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"customer"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"customerId"}}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"priority"}},{"kind":"Field","name":{"kind":"Name","value":"body"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetNeedlineIssuesQuery, GetNeedlineIssuesQueryVariables>;
export const CustomerNeedCreateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CustomerNeedCreate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerNeedCreateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"customerNeedCreate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"need"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"priority"}}]}}]}}]}}]} as unknown as DocumentNode<CustomerNeedCreateMutation, CustomerNeedCreateMutationVariables>;
export const CustomerNeedUpdateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CustomerNeedUpdate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"customerNeedUpdateId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerNeedUpdateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"customerNeedUpdate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"customerNeedUpdateId"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"need"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"priority"}}]}}]}}]}}]} as unknown as DocumentNode<CustomerNeedUpdateMutation, CustomerNeedUpdateMutationVariables>;
export const IssueCreateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"IssueCreate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"IssueCreateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"issueCreate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"issue"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"identifier"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]} as unknown as DocumentNode<IssueCreateMutation, IssueCreateMutationVariables>;
export const CustomerNeedDeleteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CustomerNeedDelete"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"customerNeedDeleteId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"customerNeedDelete"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"customerNeedDeleteId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}}]}}]}}]} as unknown as DocumentNode<CustomerNeedDeleteMutation, CustomerNeedDeleteMutationVariables>;
export const CustomerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Customer"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerFilter"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"customers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<CustomerQuery, CustomerQueryVariables>;