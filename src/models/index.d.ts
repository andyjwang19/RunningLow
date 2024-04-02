import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";





type EagerRunningLowData = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<RunningLowData, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly posts?: (User | null)[] | null;
  readonly entries?: (Entry | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRunningLowData = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<RunningLowData, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly posts: AsyncCollection<User>;
  readonly entries: AsyncCollection<Entry>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type RunningLowData = LazyLoading extends LazyLoadingDisabled ? EagerRunningLowData : LazyRunningLowData

export declare const RunningLowData: (new (init: ModelInit<RunningLowData>) => RunningLowData) & {
  copyOf(source: RunningLowData, mutator: (draft: MutableModel<RunningLowData>) => MutableModel<RunningLowData> | void): RunningLowData;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly runningLowDataPostsId?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly runningLowDataPostsId?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

type EagerEntry = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Entry, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly content: string;
  readonly claimed?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly runningLowDataEntriesId?: string | null;
}

type LazyEntry = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Entry, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly content: string;
  readonly claimed?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly runningLowDataEntriesId?: string | null;
}

export declare type Entry = LazyLoading extends LazyLoadingDisabled ? EagerEntry : LazyEntry

export declare const Entry: (new (init: ModelInit<Entry>) => Entry) & {
  copyOf(source: Entry, mutator: (draft: MutableModel<Entry>) => MutableModel<Entry> | void): Entry;
}