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
  showModal: boolean;
}

interface TodoList {
  id: number;
  title: string;
  date: Date;
  items: TodoCard[];
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
    showModal: false,
  }),
  getters: {
    getLists(state): TodoList[] {
      return state.allLists;
    },
    getShowModal(state): boolean {
      return state.showModal;
    },
  },
  actions: {
    setLists({ allLists }: { allLists: TodoList[] }) {
      this.allLists = allLists;
    },
    addList({ list }: { list: TodoList }) {
      let copyLists = { ...list };
      this.allLists.push(copyLists);
    },
    removeList({ id }: { id: number }) {
      this.allLists = this.allLists.filter((list) => list.id !== id);
    },
    setShowModal({ showModal }: { showModal: boolean }) {
      this.showModal = showModal;
    },
  },
});
