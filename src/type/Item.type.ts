enum ItemStatus {
  ToDo = "ToDo",
  InProgress = "InProgress",
  Blocked = "Blocked",
  Done = "Done",
}

interface Item {
  id: number;
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
