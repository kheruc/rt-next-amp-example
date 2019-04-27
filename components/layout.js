import Head from 'next/head';
import Header from './header';
import Footer from './footer';

const Layout = props => {
  return (
    <div className="site-wrapper">
      <Head>
        <title>{props.title ? `${props.title} | Next.js AMP Example` : 'Next.js AMP Example'}</title>
      </Head>

      <Header />

      <div className="content-wrapper">{props.children}</div>

      <Footer />

      <style jsx global>{`
        html {
          box-sizing: border-box;
          font-size: 10px;
        }
        *,
        *::after,
        *::before {
          box-sizing: inherit;
        }
        body {
          margin: 0;
          padding: 0;
          font-size: 2rem;
          font-weight: 400;
          line-height: 1.8;
          background: #fff;
          color: #7a7a7a;
          font-family: -apple-system, BlinkMacSystemFont, Roboto, 'Segoe UI', 'Fira Sans', Avenir, 'Helvetica Neue',
            'Lucida Grande', sans-serif;
          text-rendering: optimizeLegibility;
        }
        h1,
        h2 {
          color: #333;
          margin: 50px 0 25px;
          line-height: 1.3;
        }
        h1 {
          font-weight: 700;
          margin: 0 0 30px;
          font-size: 3.2rem;
        }
        h2 {
          font-size: 2.8rem;
        }
        a {
          color: #ee2e30;
          text-decoration: none;
          background-color: transparent;
        }
        .sidebar-trigger {
          background: transparent;
          border: 0;
          outline: none;
          padding: 15px 20px;
          cursor: pointer;
          font-size: 22px;
        }
        .sidebar {
          background-color: #fff;
          color: #333;
          min-width: 250px;
          width: 250px;
        }
        .menu {
          list-style: none;
        }
        .menu a {
          text-transform: uppercase;
          display: inline-block;
          margin-bottom: 15px;
        }
        .menu a:hover {
          color: #333;
        }
        .content-wrapper {
          position: relative;
          min-height: 1px;
          padding: 20px;
          max-width: 600px;
          margin: 40px auto;
        }
      `}</style>
    </div>
  );
};

export default Layout;
