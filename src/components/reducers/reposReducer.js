import { createSlice } from '@reduxjs/toolkit'

export const reposSlice = createSlice({
  name: 'repos',
  initialState: {
    items: [],
    isFetching: true,
  },
  reducers: {
    setRepos: (state, action) => {
       state.items = action.payload.items
      },
  }
})

export const { setRepos } = reposSlice.actions

export default reposSlice.reducer