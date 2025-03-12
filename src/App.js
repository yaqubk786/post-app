import { Routes, Route } from "react-router-dom";
import PostsList from "./Features/posts/PostsList";
import PostDetail from "./Features/posts/PostDetail";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <Routes>
          <Route path="/" element={<PostsList />} />
          <Route path="/posts/:id" element={<PostDetail />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
