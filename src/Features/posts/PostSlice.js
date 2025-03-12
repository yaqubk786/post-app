import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

/**
 * Async thunk to fetch posts from the JSONPlaceholder API.
 * This returns a promise that dispatches pending, fulfilled, or rejected based on API response.
 */
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
  return response.data 
})

/**
 * Creating a Redux slice for posts feature.
 */
const postsSlice = createSlice({
  name: 'posts', // Name of the slice
  initialState: {
    items: [],       // To store list of posts
    status: 'idle',  // Can be 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,     // Stores error message if API fails
    search: ''       // Search term for filtering posts
  },
  reducers: {
    /**
     * Updates the search value in the state.
     * This is used to filter posts on the frontend.
     */
    setSearch(state, action) {
      state.search = action.payload
    }
  },
  /**
   * Handling the lifecycle of the fetchPosts async thunk using extraReducers.
   */
  extraReducers: builder => {
    builder
      // When the fetchPosts request is sent and waiting for response
      .addCase(fetchPosts.pending, state => {
        state.status = 'loading'
      })
      // When the fetchPosts request is successfully completed
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.items = action.payload // Store fetched posts in items array
      })
      // When the fetchPosts request fails
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message 
      })
  }
})

export const { setSearch } = postsSlice.actions

export default postsSlice.reducer
