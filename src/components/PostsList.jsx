import { useSelector, useDispatch } from "react-redux";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButton";
// import { selectAllPosts } from "../slices/posts";

const PostsList = () => {
  const posts = useSelector((state) => state.posts);
  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));
  const renderedPosts = orderedPosts.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <p className="postCredit">
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>
      <ReactionButtons post={post} />
    </article>
  ));

  return (
    <section>
      <h1>Posts</h1>
      {renderedPosts}
    </section>
  );
};

export default PostsList;
