import { defineStore } from "pinia";
import { Statut } from "./enums";

interface TodoCardStoreStage {
  products: TodoCard[];
}

interface TodoCard {
  id: number;
  statut: Statut;
  label: string;
}

interface TodoListStoreStage {
  allLists: TodoList[];
}

interface TodoList {
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

export const useTodoList = defineStore("TodoList", {
  state: (): TodoListStoreStage => ({
    allLists: [],
  }),
  getters: {
    getLists(state): TodoList[] {
      return state.allLists;
    },
  },
  actions: {
    setLists({ allLists }: { allLists: TodoList[] }) {
      this.allLists = allLists;
    },
    addList({ list }: { list: TodoList }) {
      this.allLists.push(list);
    },
    removeList({ id }: { id: number }) {
      this.allLists = this.allLists.filter((list) => list.id !== id);
    },
  },
});
