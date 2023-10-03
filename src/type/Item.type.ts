export enum ItemStatus {
  ToDo = "ToDo",
  InProgress = "InProgress",
  Blocked = "Blocked",
  Done = "Done",
}

interface Item {
  id: string;
  status: ItemStatus;
  label: string;
}
const statusMapping: Record<ItemStatus, { color: string }> = {
  [ItemStatus.ToDo]: {
    color: "gray",
  },
  [ItemStatus.InProgress]: { color: "yellow" },
  [ItemStatus.Blocked]: { color: "red" },
  [ItemStatus.Done]: { color: "green" },
};
export function getStatusColor(status: ItemStatus): string {
  if (status in statusMapping) {
    return statusMapping[status].color;
  }

  return "gray";
}
