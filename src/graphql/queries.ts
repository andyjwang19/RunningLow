/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getRunningLowData = /* GraphQL */ `query GetRunningLowData($id: ID!) {
  getRunningLowData(id: $id) {
    id
    name
    posts {
      nextToken
      startedAt
      __typename
    }
    entries {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetRunningLowDataQueryVariables,
  APITypes.GetRunningLowDataQuery
>;
export const listRunningLowData = /* GraphQL */ `query ListRunningLowData(
  $filter: ModelRunningLowDataFilterInput
  $limit: Int
  $nextToken: String
) {
  listRunningLowData(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListRunningLowDataQueryVariables,
  APITypes.ListRunningLowDataQuery
>;
export const syncRunningLowData = /* GraphQL */ `query SyncRunningLowData(
  $filter: ModelRunningLowDataFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncRunningLowData(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncRunningLowDataQueryVariables,
  APITypes.SyncRunningLowDataQuery
>;
export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    name
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    runningLowDataPostsId
    __typename
  }
}
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const listUsers = /* GraphQL */ `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      runningLowDataPostsId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
export const syncUsers = /* GraphQL */ `query SyncUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncUsers(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      runningLowDataPostsId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.SyncUsersQueryVariables, APITypes.SyncUsersQuery>;
export const getEntry = /* GraphQL */ `query GetEntry($id: ID!) {
  getEntry(id: $id) {
    id
    content
    claimed
    claimer {
      id
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      runningLowDataPostsId
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    runningLowDataEntriesId
    __typename
  }
}
` as GeneratedQuery<APITypes.GetEntryQueryVariables, APITypes.GetEntryQuery>;
export const listEntries = /* GraphQL */ `query ListEntries(
  $filter: ModelEntryFilterInput
  $limit: Int
  $nextToken: String
) {
  listEntries(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      content
      claimed
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      runningLowDataEntriesId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEntriesQueryVariables,
  APITypes.ListEntriesQuery
>;
export const syncEntries = /* GraphQL */ `query SyncEntries(
  $filter: ModelEntryFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncEntries(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      content
      claimed
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      runningLowDataEntriesId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncEntriesQueryVariables,
  APITypes.SyncEntriesQuery
>;
