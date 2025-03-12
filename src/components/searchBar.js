import { useDispatch } from "react-redux";
import { setSearch } from "../Features/posts/PostSlice";

export default function SearchBar() {
  const dispatch = useDispatch();

  return (
    <>
      <div className="searchBar">
        <input
          type="text"
          placeholder="Search posts..."
          onChange={(e) => dispatch(setSearch(e.target.value))}
        />
      </div>
    </>
  );
}
