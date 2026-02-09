import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: 'Victor',
    role: 'Developer',
    status: 'Active',
    lastUpdate: '05.02.2026'
  },
  reducers: {}
});

export default userSlice.reducer;