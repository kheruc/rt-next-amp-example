import Link from 'next/link';
import authors from '../data/authors';

const Post = ({ post }) => {
  let author = authors.find(author => author.id == post.id);
  return (
    <div className="post">
      <h2>{post.title}</h2>
      <div className="author">
        <amp-img width={35} height={35} className="avatar" src={`/static/avatars/${author.gender}/${author.photo}`} />{' '}
        <strong>{author.name}</strong>
      </div>
      <div className="category">
        <Link href="/category/[cid]" as={`/category/${post.category.id}`}>
          <a>{post.category.title}</a>
        </Link>
      </div>
      <div className="text">
        {post.body}
        {'... '}
        <Link href="/post/[pid]" as={`/post/${post.id}`}>
          <a className="readmore">read more</a>
        </Link>
      </div>
      <style jsx>{`
        .post {
          margin-bottom: 60px;
        }
        .post h2 {
          text-transform: capitalize;
        }
        .avatar {
          float: left;
          width: 35px;
          height: 35px;
          margin: 0 10px 10px 0;
          border-radius: 50%;
        }
        .author {
          color: #333;
        }
        .category {
          clear: left;
        }
        .category a {
          font-size: 1.3rem;
          color: #555;
          background: #eee;
          padding: 2px 6px;
          border-radius: 3px;
        }
        .category a:hover {
          background: #ddd;
        }
        .readmore {
          font-size: 1.6rem;
        }
      `}</style>
    </div>
  );
};

export default Post;
