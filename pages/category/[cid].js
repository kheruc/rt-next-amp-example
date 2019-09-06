import fetch from 'isomorphic-unfetch';
import Layout from '../../components/layout';
import Post from '../../components/post';
import categories from '../../data/categories.json';

const Category = ({ category, posts }) => {
  return (
    <Layout>
      <h1>{category.title}</h1>

      {posts.length ? (
        <div className="post-list">
          {posts.map(post => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <p>There are no posts in this category</p>
      )}
    </Layout>
  );
};

Category.getInitialProps = async ({ query }) => {
  // fetch list of posts
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=1`);
  let posts = await res.json();
  // assign a random category
  posts.map(post => {
    return (post.category = categories[Math.floor(Math.random() * categories.length)]);
  });

  // get current category
  let category = categories.find(cat => cat.id == query.cid);

  // get posts from the current category
  posts = posts.filter(post => post.category.id == category.id);

  return { category, posts };
};

export const config = { amp: true };

export default Category;
