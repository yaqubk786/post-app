import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchPosts } from "./PostSlice";
import { Link } from "react-router-dom";
import SearchBar from "../../components/searchBar";

export default function PostsList() {
  const dispatch = useDispatch();
  const { items, status, error, search } = useSelector((state) => state.posts);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPosts());
    }
  }, [dispatch, status]);

  const filtered = items.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <h1>Posts</h1>
      <SearchBar />
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p>{error}</p>}
      <ul className="listBox">
        {filtered.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
