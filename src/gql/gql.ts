/* eslint-disable */
import * as types from './graphql';
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n  query GetNeedlineIssues($customerId: ID) {\n    issues(filter: { labels: { name: { containsIgnoreCase: \"needline\" } } }) {\n      nodes {\n        id\n        title\n        needs {\n          nodes {\n            priority\n          }\n        }\n\n        currentCustomerNeeds: needs(\n          first: 1\n          filter: { customer: { id: { eq: $customerId } } }\n        ) {\n          nodes {\n            id\n            priority\n            body\n          }\n        }\n        status: state {\n          type\n        }\n      }\n    }\n    projects(filter: { labels: { name: { containsIgnoreCase: \"needline\" } } }) {\n      nodes {\n        id\n        title: name\n        needs {\n          nodes {\n            priority\n          }\n        }\n\n        currentCustomerNeeds: needs(\n          first: 1\n          filter: { customer: { id: { eq: $customerId } } }\n        ) {\n          nodes {\n            id\n            priority\n            body\n          }\n        }\n        status {\n          type\n        }\n      }\n    }\n  }\n": typeof types.GetNeedlineIssuesDocument,
    "\n  mutation CustomerNeedCreate($input: CustomerNeedCreateInput!) {\n    customerNeedCreate(input: $input) {\n      success\n      need {\n        id\n        body\n        priority\n      }\n    }\n  }\n": typeof types.CustomerNeedCreateDocument,
    "\n  mutation CustomerNeedUpdate(\n    $customerNeedUpdateId: String!\n    $input: CustomerNeedUpdateInput!\n  ) {\n    customerNeedUpdate(id: $customerNeedUpdateId, input: $input) {\n      success\n      need {\n        id\n        body\n        priority\n      }\n    }\n  }\n": typeof types.CustomerNeedUpdateDocument,
    "\n  mutation IssueCreate($input: IssueCreateInput!) {\n    issueCreate(input: $input) {\n      success\n      issue {\n        id\n        identifier\n        title\n        status: state {\n          type\n        }\n      }\n    }\n  }\n": typeof types.IssueCreateDocument,
    "\n  mutation CustomerNeedDelete($customerNeedDeleteId: String!) {\n    customerNeedDelete(id: $customerNeedDeleteId) {\n      success\n    }\n  }\n": typeof types.CustomerNeedDeleteDocument,
    "\n  query Customer($filter: CustomerFilter, $first: Int) {\n    customers(filter: $filter, first: $first) {\n      nodes {\n        id\n        name\n      }\n    }\n  }\n": typeof types.CustomerDocument,
};
const documents: Documents = {
    "\n  query GetNeedlineIssues($customerId: ID) {\n    issues(filter: { labels: { name: { containsIgnoreCase: \"needline\" } } }) {\n      nodes {\n        id\n        title\n        needs {\n          nodes {\n            priority\n          }\n        }\n\n        currentCustomerNeeds: needs(\n          first: 1\n          filter: { customer: { id: { eq: $customerId } } }\n        ) {\n          nodes {\n            id\n            priority\n            body\n          }\n        }\n        status: state {\n          type\n        }\n      }\n    }\n    projects(filter: { labels: { name: { containsIgnoreCase: \"needline\" } } }) {\n      nodes {\n        id\n        title: name\n        needs {\n          nodes {\n            priority\n          }\n        }\n\n        currentCustomerNeeds: needs(\n          first: 1\n          filter: { customer: { id: { eq: $customerId } } }\n        ) {\n          nodes {\n            id\n            priority\n            body\n          }\n        }\n        status {\n          type\n        }\n      }\n    }\n  }\n": types.GetNeedlineIssuesDocument,
    "\n  mutation CustomerNeedCreate($input: CustomerNeedCreateInput!) {\n    customerNeedCreate(input: $input) {\n      success\n      need {\n        id\n        body\n        priority\n      }\n    }\n  }\n": types.CustomerNeedCreateDocument,
    "\n  mutation CustomerNeedUpdate(\n    $customerNeedUpdateId: String!\n    $input: CustomerNeedUpdateInput!\n  ) {\n    customerNeedUpdate(id: $customerNeedUpdateId, input: $input) {\n      success\n      need {\n        id\n        body\n        priority\n      }\n    }\n  }\n": types.CustomerNeedUpdateDocument,
    "\n  mutation IssueCreate($input: IssueCreateInput!) {\n    issueCreate(input: $input) {\n      success\n      issue {\n        id\n        identifier\n        title\n        status: state {\n          type\n        }\n      }\n    }\n  }\n": types.IssueCreateDocument,
    "\n  mutation CustomerNeedDelete($customerNeedDeleteId: String!) {\n    customerNeedDelete(id: $customerNeedDeleteId) {\n      success\n    }\n  }\n": types.CustomerNeedDeleteDocument,
    "\n  query Customer($filter: CustomerFilter, $first: Int) {\n    customers(filter: $filter, first: $first) {\n      nodes {\n        id\n        name\n      }\n    }\n  }\n": types.CustomerDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetNeedlineIssues($customerId: ID) {\n    issues(filter: { labels: { name: { containsIgnoreCase: \"needline\" } } }) {\n      nodes {\n        id\n        title\n        needs {\n          nodes {\n            priority\n          }\n        }\n\n        currentCustomerNeeds: needs(\n          first: 1\n          filter: { customer: { id: { eq: $customerId } } }\n        ) {\n          nodes {\n            id\n            priority\n            body\n          }\n        }\n        status: state {\n          type\n        }\n      }\n    }\n    projects(filter: { labels: { name: { containsIgnoreCase: \"needline\" } } }) {\n      nodes {\n        id\n        title: name\n        needs {\n          nodes {\n            priority\n          }\n        }\n\n        currentCustomerNeeds: needs(\n          first: 1\n          filter: { customer: { id: { eq: $customerId } } }\n        ) {\n          nodes {\n            id\n            priority\n            body\n          }\n        }\n        status {\n          type\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetNeedlineIssues($customerId: ID) {\n    issues(filter: { labels: { name: { containsIgnoreCase: \"needline\" } } }) {\n      nodes {\n        id\n        title\n        needs {\n          nodes {\n            priority\n          }\n        }\n\n        currentCustomerNeeds: needs(\n          first: 1\n          filter: { customer: { id: { eq: $customerId } } }\n        ) {\n          nodes {\n            id\n            priority\n            body\n          }\n        }\n        status: state {\n          type\n        }\n      }\n    }\n    projects(filter: { labels: { name: { containsIgnoreCase: \"needline\" } } }) {\n      nodes {\n        id\n        title: name\n        needs {\n          nodes {\n            priority\n          }\n        }\n\n        currentCustomerNeeds: needs(\n          first: 1\n          filter: { customer: { id: { eq: $customerId } } }\n        ) {\n          nodes {\n            id\n            priority\n            body\n          }\n        }\n        status {\n          type\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CustomerNeedCreate($input: CustomerNeedCreateInput!) {\n    customerNeedCreate(input: $input) {\n      success\n      need {\n        id\n        body\n        priority\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation CustomerNeedCreate($input: CustomerNeedCreateInput!) {\n    customerNeedCreate(input: $input) {\n      success\n      need {\n        id\n        body\n        priority\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CustomerNeedUpdate(\n    $customerNeedUpdateId: String!\n    $input: CustomerNeedUpdateInput!\n  ) {\n    customerNeedUpdate(id: $customerNeedUpdateId, input: $input) {\n      success\n      need {\n        id\n        body\n        priority\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation CustomerNeedUpdate(\n    $customerNeedUpdateId: String!\n    $input: CustomerNeedUpdateInput!\n  ) {\n    customerNeedUpdate(id: $customerNeedUpdateId, input: $input) {\n      success\n      need {\n        id\n        body\n        priority\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation IssueCreate($input: IssueCreateInput!) {\n    issueCreate(input: $input) {\n      success\n      issue {\n        id\n        identifier\n        title\n        status: state {\n          type\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation IssueCreate($input: IssueCreateInput!) {\n    issueCreate(input: $input) {\n      success\n      issue {\n        id\n        identifier\n        title\n        status: state {\n          type\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CustomerNeedDelete($customerNeedDeleteId: String!) {\n    customerNeedDelete(id: $customerNeedDeleteId) {\n      success\n    }\n  }\n"): (typeof documents)["\n  mutation CustomerNeedDelete($customerNeedDeleteId: String!) {\n    customerNeedDelete(id: $customerNeedDeleteId) {\n      success\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Customer($filter: CustomerFilter, $first: Int) {\n    customers(filter: $filter, first: $first) {\n      nodes {\n        id\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  query Customer($filter: CustomerFilter, $first: Int) {\n    customers(filter: $filter, first: $first) {\n      nodes {\n        id\n        name\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;