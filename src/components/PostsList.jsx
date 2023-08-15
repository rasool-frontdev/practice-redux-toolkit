import { useSelector, useDispatch } from "react-redux";
// import { selectAllPosts } from "../slices/posts";

const PostsList = () => {
  const posts = useSelector((state) => state.posts);
  console.log(posts);

  // const renderedPosts = posts.map((post) => (

  // ));
  return (
    <section>
      <h1>Posts</h1>
      {/* <h1>{posts.title}</h1> */}
      {posts.map((post) => (
        <article key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </article>
      ))}
    </section>
  );
};

export default PostsList;
