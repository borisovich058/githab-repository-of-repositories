import { createSlice } from '@reduxjs/toolkit'

export const reposSlice = createSlice({
  name: 'repos',
  initialState: {
    items: [],
    isFetching: true,
    currentPage: 1,
    perPage: 10,
    totalCount: 0 
  },
  reducers: {
    setRepos: (state, action) => {
       state.items = action.payload.items,
       state.totalCount = action.payload.total_count,
       state.isFetching = false
      },
    setIsFetching: (state, action) => {
      state.isFetching = action.payload
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload
    }
  }
})

export const { setRepos, setIsFetching, setCurrentPage } = reposSlice.actions

export default reposSlice.reducer