import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import postsReducer from './PostSlice'
import PostsList from './PostsList'
import { BrowserRouter } from 'react-router-dom'

// Create a Redux store for testing
const store = createStore(postsReducer, {
  posts: {
    items: [
      { id: 1, title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit' },
      { id: 2, title: 'qui est esse' },
    ],
    status: 'succeeded',
    error: null,
    search: '',
  },
})

describe('PostsList Component', () => {
  test('renders list of posts', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <PostsList />
        </BrowserRouter>
      </Provider>
    )

    // Check if the posts are displayed
    expect(screen.getByText('sunt aut facere repellat provident occaecati excepturi optio reprehenderit')).toBeInTheDocument()
    expect(screen.getByText('qui est esse')).toBeInTheDocument()
  })
})
