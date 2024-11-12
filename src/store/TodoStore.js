// src/todoStore.js
import { create } from "zustand";

const useTodoStore = create((set) => ({
  list: [],
  isEdit: false,
  todoId: null,
  item: "",

  setItem: (newList) => set({ item: newList }),
  addItem: () =>
    set((state) => {
      return {
        list: [...state.list, { id: Date.now(), text: state.item }],
        item: "",
      };
    }),
  removeItem: (index) =>
    set((state) => {
      const newList = [...state.list];
      newList.splice(index, 1);
      return { list: newList };
    }),

  setEditTodo: (id, item) => set({ item: item, isEdit: true, todoId: id }),
  updateItem: () =>
    set((state) => {
      if (state.todoId !== null) {
        return {
          list: state.list.map((todo, i) =>
            todo.id === state.todoId ? { ...todo, text: state.item } : todo
          ),

          item: "",
          isEdit: false,
          todoId: null,
        };
      }
      return state;
    }),
}));

export default useTodoStore;
