/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateRunningLowDataInput = {
  id?: string | null,
  name: string,
  _version?: number | null,
};

export type ModelRunningLowDataConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelRunningLowDataConditionInput | null > | null,
  or?: Array< ModelRunningLowDataConditionInput | null > | null,
  not?: ModelRunningLowDataConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type RunningLowData = {
  __typename: "RunningLowData",
  id: string,
  name: string,
  posts?: ModelUserConnection | null,
  entries?: ModelEntryConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type User = {
  __typename: "User",
  id: string,
  name: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  runningLowDataPostsId?: string | null,
};

export type ModelEntryConnection = {
  __typename: "ModelEntryConnection",
  items:  Array<Entry | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type Entry = {
  __typename: "Entry",
  id: string,
  content: string,
  claimed?: boolean | null,
  claimer?:  Array<User | null > | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  runningLowDataEntriesId?: string | null,
};

export type UpdateRunningLowDataInput = {
  id: string,
  name?: string | null,
  _version?: number | null,
};

export type DeleteRunningLowDataInput = {
  id: string,
  _version?: number | null,
};

export type CreateUserInput = {
  id?: string | null,
  name: string,
  _version?: number | null,
  runningLowDataPostsId?: string | null,
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  runningLowDataPostsId?: ModelIDInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateUserInput = {
  id: string,
  name?: string | null,
  _version?: number | null,
  runningLowDataPostsId?: string | null,
};

export type DeleteUserInput = {
  id: string,
  _version?: number | null,
};

export type CreateEntryInput = {
  id?: string | null,
  content: string,
  claimed?: boolean | null,
  _version?: number | null,
  runningLowDataEntriesId?: string | null,
};

export type ModelEntryConditionInput = {
  content?: ModelStringInput | null,
  claimed?: ModelBooleanInput | null,
  and?: Array< ModelEntryConditionInput | null > | null,
  or?: Array< ModelEntryConditionInput | null > | null,
  not?: ModelEntryConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  runningLowDataEntriesId?: ModelIDInput | null,
};

export type UpdateEntryInput = {
  id: string,
  content?: string | null,
  claimed?: boolean | null,
  _version?: number | null,
  runningLowDataEntriesId?: string | null,
};

export type DeleteEntryInput = {
  id: string,
  _version?: number | null,
};

export type ModelRunningLowDataFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelRunningLowDataFilterInput | null > | null,
  or?: Array< ModelRunningLowDataFilterInput | null > | null,
  not?: ModelRunningLowDataFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelRunningLowDataConnection = {
  __typename: "ModelRunningLowDataConnection",
  items:  Array<RunningLowData | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
  _deleted?: ModelBooleanInput | null,
  runningLowDataPostsId?: ModelIDInput | null,
};

export type ModelEntryFilterInput = {
  id?: ModelIDInput | null,
  content?: ModelStringInput | null,
  claimed?: ModelBooleanInput | null,
  and?: Array< ModelEntryFilterInput | null > | null,
  or?: Array< ModelEntryFilterInput | null > | null,
  not?: ModelEntryFilterInput | null,
  _deleted?: ModelBooleanInput | null,
  runningLowDataEntriesId?: ModelIDInput | null,
};

export type ModelSubscriptionRunningLowDataFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionRunningLowDataFilterInput | null > | null,
  or?: Array< ModelSubscriptionRunningLowDataFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionEntryFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  content?: ModelSubscriptionStringInput | null,
  claimed?: ModelSubscriptionBooleanInput | null,
  and?: Array< ModelSubscriptionEntryFilterInput | null > | null,
  or?: Array< ModelSubscriptionEntryFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type CreateRunningLowDataMutationVariables = {
  input: CreateRunningLowDataInput,
  condition?: ModelRunningLowDataConditionInput | null,
};

export type CreateRunningLowDataMutation = {
  createRunningLowData?:  {
    __typename: "RunningLowData",
    id: string,
    name: string,
    posts?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    entries?:  {
      __typename: "ModelEntryConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateRunningLowDataMutationVariables = {
  input: UpdateRunningLowDataInput,
  condition?: ModelRunningLowDataConditionInput | null,
};

export type UpdateRunningLowDataMutation = {
  updateRunningLowData?:  {
    __typename: "RunningLowData",
    id: string,
    name: string,
    posts?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    entries?:  {
      __typename: "ModelEntryConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteRunningLowDataMutationVariables = {
  input: DeleteRunningLowDataInput,
  condition?: ModelRunningLowDataConditionInput | null,
};

export type DeleteRunningLowDataMutation = {
  deleteRunningLowData?:  {
    __typename: "RunningLowData",
    id: string,
    name: string,
    posts?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    entries?:  {
      __typename: "ModelEntryConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    runningLowDataPostsId?: string | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    runningLowDataPostsId?: string | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    runningLowDataPostsId?: string | null,
  } | null,
};

export type CreateEntryMutationVariables = {
  input: CreateEntryInput,
  condition?: ModelEntryConditionInput | null,
};

export type CreateEntryMutation = {
  createEntry?:  {
    __typename: "Entry",
    id: string,
    content: string,
    claimed?: boolean | null,
    claimer?:  Array< {
      __typename: "User",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      runningLowDataPostsId?: string | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    runningLowDataEntriesId?: string | null,
  } | null,
};

export type UpdateEntryMutationVariables = {
  input: UpdateEntryInput,
  condition?: ModelEntryConditionInput | null,
};

export type UpdateEntryMutation = {
  updateEntry?:  {
    __typename: "Entry",
    id: string,
    content: string,
    claimed?: boolean | null,
    claimer?:  Array< {
      __typename: "User",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      runningLowDataPostsId?: string | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    runningLowDataEntriesId?: string | null,
  } | null,
};

export type DeleteEntryMutationVariables = {
  input: DeleteEntryInput,
  condition?: ModelEntryConditionInput | null,
};

export type DeleteEntryMutation = {
  deleteEntry?:  {
    __typename: "Entry",
    id: string,
    content: string,
    claimed?: boolean | null,
    claimer?:  Array< {
      __typename: "User",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      runningLowDataPostsId?: string | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    runningLowDataEntriesId?: string | null,
  } | null,
};

export type GetRunningLowDataQueryVariables = {
  id: string,
};

export type GetRunningLowDataQuery = {
  getRunningLowData?:  {
    __typename: "RunningLowData",
    id: string,
    name: string,
    posts?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    entries?:  {
      __typename: "ModelEntryConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListRunningLowDataQueryVariables = {
  filter?: ModelRunningLowDataFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRunningLowDataQuery = {
  listRunningLowData?:  {
    __typename: "ModelRunningLowDataConnection",
    items:  Array< {
      __typename: "RunningLowData",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncRunningLowDataQueryVariables = {
  filter?: ModelRunningLowDataFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncRunningLowDataQuery = {
  syncRunningLowData?:  {
    __typename: "ModelRunningLowDataConnection",
    items:  Array< {
      __typename: "RunningLowData",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    runningLowDataPostsId?: string | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      runningLowDataPostsId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUsersQuery = {
  syncUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      runningLowDataPostsId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetEntryQueryVariables = {
  id: string,
};

export type GetEntryQuery = {
  getEntry?:  {
    __typename: "Entry",
    id: string,
    content: string,
    claimed?: boolean | null,
    claimer?:  Array< {
      __typename: "User",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      runningLowDataPostsId?: string | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    runningLowDataEntriesId?: string | null,
  } | null,
};

export type ListEntriesQueryVariables = {
  filter?: ModelEntryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEntriesQuery = {
  listEntries?:  {
    __typename: "ModelEntryConnection",
    items:  Array< {
      __typename: "Entry",
      id: string,
      content: string,
      claimed?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      runningLowDataEntriesId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncEntriesQueryVariables = {
  filter?: ModelEntryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncEntriesQuery = {
  syncEntries?:  {
    __typename: "ModelEntryConnection",
    items:  Array< {
      __typename: "Entry",
      id: string,
      content: string,
      claimed?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      runningLowDataEntriesId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateRunningLowDataSubscriptionVariables = {
  filter?: ModelSubscriptionRunningLowDataFilterInput | null,
};

export type OnCreateRunningLowDataSubscription = {
  onCreateRunningLowData?:  {
    __typename: "RunningLowData",
    id: string,
    name: string,
    posts?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    entries?:  {
      __typename: "ModelEntryConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateRunningLowDataSubscriptionVariables = {
  filter?: ModelSubscriptionRunningLowDataFilterInput | null,
};

export type OnUpdateRunningLowDataSubscription = {
  onUpdateRunningLowData?:  {
    __typename: "RunningLowData",
    id: string,
    name: string,
    posts?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    entries?:  {
      __typename: "ModelEntryConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteRunningLowDataSubscriptionVariables = {
  filter?: ModelSubscriptionRunningLowDataFilterInput | null,
};

export type OnDeleteRunningLowDataSubscription = {
  onDeleteRunningLowData?:  {
    __typename: "RunningLowData",
    id: string,
    name: string,
    posts?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    entries?:  {
      __typename: "ModelEntryConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    runningLowDataPostsId?: string | null,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    runningLowDataPostsId?: string | null,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    runningLowDataPostsId?: string | null,
  } | null,
};

export type OnCreateEntrySubscriptionVariables = {
  filter?: ModelSubscriptionEntryFilterInput | null,
};

export type OnCreateEntrySubscription = {
  onCreateEntry?:  {
    __typename: "Entry",
    id: string,
    content: string,
    claimed?: boolean | null,
    claimer?:  Array< {
      __typename: "User",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      runningLowDataPostsId?: string | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    runningLowDataEntriesId?: string | null,
  } | null,
};

export type OnUpdateEntrySubscriptionVariables = {
  filter?: ModelSubscriptionEntryFilterInput | null,
};

export type OnUpdateEntrySubscription = {
  onUpdateEntry?:  {
    __typename: "Entry",
    id: string,
    content: string,
    claimed?: boolean | null,
    claimer?:  Array< {
      __typename: "User",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      runningLowDataPostsId?: string | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    runningLowDataEntriesId?: string | null,
  } | null,
};

export type OnDeleteEntrySubscriptionVariables = {
  filter?: ModelSubscriptionEntryFilterInput | null,
};

export type OnDeleteEntrySubscription = {
  onDeleteEntry?:  {
    __typename: "Entry",
    id: string,
    content: string,
    claimed?: boolean | null,
    claimer?:  Array< {
      __typename: "User",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      runningLowDataPostsId?: string | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    runningLowDataEntriesId?: string | null,
  } | null,
};
