/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateRunningLowData = /* GraphQL */ `subscription OnCreateRunningLowData(
  $filter: ModelSubscriptionRunningLowDataFilterInput
) {
  onCreateRunningLowData(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateRunningLowDataSubscriptionVariables,
  APITypes.OnCreateRunningLowDataSubscription
>;
export const onUpdateRunningLowData = /* GraphQL */ `subscription OnUpdateRunningLowData(
  $filter: ModelSubscriptionRunningLowDataFilterInput
) {
  onUpdateRunningLowData(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateRunningLowDataSubscriptionVariables,
  APITypes.OnUpdateRunningLowDataSubscription
>;
export const onDeleteRunningLowData = /* GraphQL */ `subscription OnDeleteRunningLowData(
  $filter: ModelSubscriptionRunningLowDataFilterInput
) {
  onDeleteRunningLowData(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteRunningLowDataSubscriptionVariables,
  APITypes.OnDeleteRunningLowDataSubscription
>;
export const onCreateUser = /* GraphQL */ `subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
  onCreateUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
  onUpdateUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
  onDeleteUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
export const onCreateEntry = /* GraphQL */ `subscription OnCreateEntry($filter: ModelSubscriptionEntryFilterInput) {
  onCreateEntry(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateEntrySubscriptionVariables,
  APITypes.OnCreateEntrySubscription
>;
export const onUpdateEntry = /* GraphQL */ `subscription OnUpdateEntry($filter: ModelSubscriptionEntryFilterInput) {
  onUpdateEntry(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateEntrySubscriptionVariables,
  APITypes.OnUpdateEntrySubscription
>;
export const onDeleteEntry = /* GraphQL */ `subscription OnDeleteEntry($filter: ModelSubscriptionEntryFilterInput) {
  onDeleteEntry(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteEntrySubscriptionVariables,
  APITypes.OnDeleteEntrySubscription
>;
