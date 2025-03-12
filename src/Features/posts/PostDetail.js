import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";

export default function PostDetail() {
  const { id } = useParams();
  const post = useSelector((state) =>
    state.posts.items.find((p) => p.id === parseInt(id))
  );

  if (!post) return <p>Post not found</p>;

  return (
    <>
      <div>
        <div className="detailBox">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <Link to="/">
            ← Back
          </Link>
        </div>
      </div>
    </>
  );
}
