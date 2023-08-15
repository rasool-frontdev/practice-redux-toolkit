import { useSelector } from "react-redux";

const postsList = () => {
  const posts = useSelector((state) => state.posts);

  const renderedPosts = posts.map((post) => (
    <article key={post.id}>
      <h3>{posts.title}</h3>
      <p>{posts.content.substring(0, 100)}</p>
    </article>
  ));
  return (
    <section>
      <h1>Posts</h1>
      {renderedPosts}
    </section>
  );
};

export default postsList;
