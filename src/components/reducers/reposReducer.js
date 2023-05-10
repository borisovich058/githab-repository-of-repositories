import { createSlice } from '@reduxjs/toolkit'

export const reposSlice = createSlice({
  name: 'repos',
  initialState: {
    items: [],
    isFetching: true,
  },
  reducers: {
    setRepos: (state, action) => {
       state.items = action.payload.items,
       state.isFetching = false
      },
    setIsFetching: (state, action) => {
      state.isFetching = action.payload
    }
  }
})

export const { setRepos, setIsFetching } = reposSlice.actions

export default reposSlice.reducer