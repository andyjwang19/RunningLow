/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createRunningLowData = /* GraphQL */ `mutation CreateRunningLowData(
  $input: CreateRunningLowDataInput!
  $condition: ModelRunningLowDataConditionInput
) {
  createRunningLowData(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateRunningLowDataMutationVariables,
  APITypes.CreateRunningLowDataMutation
>;
export const updateRunningLowData = /* GraphQL */ `mutation UpdateRunningLowData(
  $input: UpdateRunningLowDataInput!
  $condition: ModelRunningLowDataConditionInput
) {
  updateRunningLowData(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateRunningLowDataMutationVariables,
  APITypes.UpdateRunningLowDataMutation
>;
export const deleteRunningLowData = /* GraphQL */ `mutation DeleteRunningLowData(
  $input: DeleteRunningLowDataInput!
  $condition: ModelRunningLowDataConditionInput
) {
  deleteRunningLowData(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteRunningLowDataMutationVariables,
  APITypes.DeleteRunningLowDataMutation
>;
export const createUser = /* GraphQL */ `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
  $input: DeleteUserInput!
  $condition: ModelUserConditionInput
) {
  deleteUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
export const createEntry = /* GraphQL */ `mutation CreateEntry(
  $input: CreateEntryInput!
  $condition: ModelEntryConditionInput
) {
  createEntry(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateEntryMutationVariables,
  APITypes.CreateEntryMutation
>;
export const updateEntry = /* GraphQL */ `mutation UpdateEntry(
  $input: UpdateEntryInput!
  $condition: ModelEntryConditionInput
) {
  updateEntry(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateEntryMutationVariables,
  APITypes.UpdateEntryMutation
>;
export const deleteEntry = /* GraphQL */ `mutation DeleteEntry(
  $input: DeleteEntryInput!
  $condition: ModelEntryConditionInput
) {
  deleteEntry(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteEntryMutationVariables,
  APITypes.DeleteEntryMutation
>;
