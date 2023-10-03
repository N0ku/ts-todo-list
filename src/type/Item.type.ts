enum ItemStatus {
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
function getStatusColor(status: ItemStatus): string {
  if (status in statusMapping) {
    return statusMapping[status].color;
  }
  // Par défaut, retournez une couleur par défaut si l'état n'est pas trouvé
  return "gray"; // Vous pouvez définir une couleur par défaut de votre choix
}
