import { RunningLowData } from "../../src/API";

export function getGroup(
  groups: RunningLowData[] | undefined,
  groupId: string
) {
  if (groups === undefined) {
    return undefined;
  }
  return groups.find((g) => g.id === groupId);
}
