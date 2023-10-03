import type { Item } from "./Item.type";

export interface List {
  id: string;
  name: string;
  itemsList: Item[];
}
