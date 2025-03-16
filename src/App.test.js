
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import store from './store'

test('renders fetched posts', async () => {
  render(<>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
    </>);

  // Wait for post title to appear
  const post1 = await screen.findByText(/sunt aut facere repellat provident occaecati excepturi optio reprehenderit/i);
  const post2 = await screen.findByText(/qui est esse/i);

  expect(post1).toBeInTheDocument();
  expect(post2).toBeInTheDocument();
  
});



// import React from "react";
// import App from "./App";
// import { Provider } from "react-redux";
// import { BrowserRouter } from "react-router-dom";
// import { store } from "./store";
// import { render, screen } from "@testing-library/react";

// test("renders learn react link", () => {
//   render(
//     <Provider store={store}>
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>
//     </Provider>
//   );
//   expect(screen.getByText(/sunt aut facere repellat provident occaecati excepturi optio reprehenderit/i)).toBeInTheDocument();
//   expect(screen.getByText(/qui est esse/i)).toBeInTheDocument();
// });
