import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: 'Victor',
  age: "very old",
  hobbies: ['Музыка', 'Чтение книг']
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {}
})

export default userSlice.reducer