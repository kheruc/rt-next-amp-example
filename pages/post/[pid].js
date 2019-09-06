import Head from 'next/head';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import Layout from '../../components/layout';
import authors from '../../data/authors';

const Post = ({ post }) => {
  let author = authors.find(author => author.id == post.id);
  return (
    <Layout>
      <Head>
        <script async custom-element="amp-social-share" src="https://cdn.ampproject.org/v0/amp-social-share-0.1.js" />
      </Head>
      <h1>{post.title}</h1>

      <div className="author">
        <amp-img width={50} height={50} className="avatar" src={`/static/avatars/${author.gender}/${author.photo}`} />{' '}
        <strong>{author.name}</strong>
      </div>

      <div className="social-share">
        <amp-social-share type="twitter" width="45" height="33" />
        <amp-social-share type="linkedin" width="45" height="33" />
        <amp-social-share type="pinterest" width="45" height="33" />
        <amp-social-share type="tumblr" width="45" height="33" />
        <amp-social-share type="email" width="45" height="33" />
      </div>

      <p>{post.body}</p>

      <amp-img width={600} height={400} layout="responsive" alt={post.title} src={`/static/images/${post.id}.jpg`} />

      <div className="go-back">
        <Link href="/">
          <a>Back to homepage</a>
        </Link>
      </div>

      <style jsx>{`
        h1 {
          text-transform: capitalize;
        }
        .author {
          color: #333;
          overflow: hidden;
          margin-bottom: 20px;
          line-height: 2.5;
        }
        .avatar {
          float: left;
          width: 50px;
          height: 50px;
          margin: 0 10px 10px 0;
          border-radius: 50%;
        }

        .category {
          clear: left;
        }
        .category span {
          font-size: 1.3rem;
          color: #555;
          background: #eee;
          padding: 2px 6px;
          border-radius: 3px;
        }
        .go-back {
          margin-top: 20px;
        }
      `}</style>
    </Layout>
  );
};

Post.getInitialProps = async ({ query }) => {
  // fetch single post detail
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${query.pid}`);
  const post = await res.json();

  return { post };
};

export const config = { amp: true };

export default Post;
