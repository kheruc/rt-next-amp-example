import fetch from 'isomorphic-unfetch';
import Layout from '../components/layout';
import Post from '../components/post';
import categories from '../data/categories.json';

const Index = ({ posts }) => {
  return (
    <Layout>
      <div className="post-list">
        {posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </Layout>
  );
};

Index.getInitialProps = async () => {
  // fetch list of posts
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=1`);
  const posts = await res.json();
  // assign a random category
  posts.map(post => {
    return (post.category = categories[Math.floor(Math.random() * categories.length)]);
  });
  return { posts };
};

export const config = { amp: true };

export default Index;
