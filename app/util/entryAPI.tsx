import { Entry } from "../../src/API";
import { createEntry, deleteEntry } from "../../src/graphql/mutations";
import { Item } from "../models/item";
import { V6Client } from "@aws-amplify/api-graphql";

export async function removeEntry(client: V6Client<never>, item: Entry) {
  if (item.id === undefined) {
    return null;
  }
  try {
    const entryData = await client.graphql({
      query: deleteEntry,
      variables: {
        input: {
          id: item.id,
          _version: 1,
        },
      },
    });
  } catch (err) {
    console.log("error adding ", err);
  }
}

export async function addEntry(
  client: V6Client<never>,
  entryName: string,
  groupId: string
) {
  try {
    const entryData = await client.graphql({
      query: createEntry,
      variables: {
        input: { content: entryName, runningLowDataEntriesId: groupId },
      },
    });
    return entryData.data.createEntry;
  } catch (err) {
    console.log("error adding ", err);
  }
}
