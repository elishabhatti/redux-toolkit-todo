import { createSlice, nanoid } from "@reduxjs/toolkit";

const loadTodos = () => {
  const saved = localStorage.getItem("todos");
  return saved ? JSON.parse(saved) : [];
};

const saveTodos = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

const initialState = {
  todos: loadTodos(),
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
      saveTodos(state.todos); // Save updated list
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      saveTodos(state.todos);
    },
    removeAllTodos: (state) => {
      state.todos = [];
      saveTodos(state.todos);
    },

    markAsCompleted: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload ? { ...todo, isCompleted: true } : todo
      );
    },
  },
});

export const { addTodo, removeTodo, removeAllTodos, markAsCompleted } =
  todoSlice.actions;

export default todoSlice.reducer;
