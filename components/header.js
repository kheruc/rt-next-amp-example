import Link from 'next/link';

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="logo">
        <Link href="/">
          <a>Next.js AMP Example</a>
        </Link>
      </div>
      <button on="tap:sidebar.toggle" className="sidebar-trigger">
        ☰
      </button>
      <style jsx>{`
        .header-wrapper {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          background-image: url(/static/featured.jpg);
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center 60px;
          height: 400px;
          min-width: 330px;
        }
        .logo {
          padding: 10px 20px;
        }
        .logo a {
          font-weight: 900;
          color: #111;
        }
        .logo a:hover {
          font-weight: 900;
          border-bottom: 2px solid #111;
        }
      `}</style>
    </div>
  );
};

export default Header;
