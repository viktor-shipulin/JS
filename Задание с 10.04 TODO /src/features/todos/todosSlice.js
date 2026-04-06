import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

let todos = [
  { id: 1, title: "Купить продукты", done: false },
  { id: 2, title: "Сделать домашнее задание", done: true },
];

const delay = (ms) => new Promise(res => setTimeout(res, ms));

export const fetchTodos = createAsyncThunk("todos/fetchAll", async () => {
  await delay(300);
  return [...todos];
});

export const fetchTodoById = createAsyncThunk("todos/fetchById", async (id) => {
  await delay(200);
  return todos.find(t => t.id === Number(id)) || null;
});

export const createTodo = createAsyncThunk("todos/create", async (title) => {
  await delay(300);
  const newTodo = { id: Date.now(), title, done: false };
  todos.push(newTodo);
  return { ...newTodo };
});

export const updateTodo = createAsyncThunk("todos/update", async (todo) => {
  await delay(300);
  const index = todos.findIndex(t => t.id === todo.id);
  if (index !== -1) todos[index] = { ...todo };
  return { ...todo };
});

export const deleteTodo = createAsyncThunk("todos/delete", async (id) => {
  await delay(300);
  todos = todos.filter(t => t.id !== id);
  return id;
});

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    items: [],
    selectedTodo: null,
    status: "idle",
  },
  reducers: {
    clearSelected(state) {
      state.selectedTodo = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => { state.status = "loading"; })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchTodoById.fulfilled, (state, action) => {
        state.selectedTodo = action.payload;
      })
      .addCase(createTodo.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(updateTodo.fulfilled, (state, action) => {
        const index = state.items.findIndex(t => t.id === action.payload.id);
        if (index !== -1) state.items[index] = action.payload;
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.items = state.items.filter(t => t.id !== action.payload);
      });
  }
});

export const { clearSelected } = todosSlice.actions;
export default todosSlice.reducer;