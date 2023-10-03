import { defineStore } from "pinia";
import { Statut } from "./enums";
import type { List } from "@/type/List.type";
import { ItemStatus } from "@/type/Item.type";

interface TodoCardStoreStage {
  products: TodoCard[];
}

export interface TodoCard {
  id: number;
  statut: Statut;
  label: string;
}

interface TodoListStoreStage {
  allLists: List[];
}

export interface TodoList {
  id: number;
  created_at: Date;
  title: string;
}

export const useTodoCard = defineStore("TodoCard", {
  state: (): TodoCardStoreStage => ({
    products: [],
  }),
  getters: {
    getProducts(state): TodoCard[] {
      return state.products;
    },
  },
  actions: {
    setProducts({ products }: { products: TodoCard[] }) {
      this.products = products;
    },
    addProduct({ product }: { product: TodoCard }) {
      this.products.push(product);
    },
    removeProduct({ id }: { id: number }) {
      this.products = this.products.filter((product) => product.id !== id);
    },
  },
});

export const useTodoList = defineStore("List", {
  state: (): TodoListStoreStage => ({
    allLists: [
      {
        id: "err",
        name: "test",
        itemsList: [
          {
            id: "test",
            status: ItemStatus.Done,
            label: "zebi",
          },
        ],
      },
    ],
  }),
  getters: {
    getLists(state): List[] {
      return state.allLists;
    },
  },
  actions: {
    setLists({ allLists }: { allLists: List[] }) {
      this.allLists = allLists;
    },
    addList({ list }: { list: List }) {
      this.allLists.push(list);
    },
    removeList({ id }: { id: string }) {
      this.allLists = this.allLists.filter((list) => list.id !== id);
    },
  },
});
