import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Асинхронное действие для загрузки данных
export const fetchData = createAsyncThunk(
  'tasks/fetchData',
  async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();
    return data;
  }
);

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    data: [],
    status: 'idle',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      });
  },
});

export default tasksSlice.reducer;
