// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { RunningLowData, User, Entry } = initSchema(schema);

export {
  RunningLowData,
  User,
  Entry
};