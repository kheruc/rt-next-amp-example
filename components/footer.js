const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="info">
        <p>
          Note: This is a demo website.{' '}
          <a href="https://reacttricks.com/building-an-amp-website-with-react-and-next">Learn how to build it</a>.
        </p>
        <p>
          Data source: <a href="https://uinames.com">uinames.com</a>, <a href="https://unsplash.com">unsplash.com</a>{' '}
          &amp; <a href="https://jsonplaceholder.typicode.com">jsonplaceholder.typicode.com</a>
        </p>
      </div>
      <style jsx>{`
        .footer-wrapper {
          text-align: center;
          margin: 200px 0 100px;
          padding: 20px;
        }
        .info {
          color: #777;
          font-size: 16px;
        }
      `}</style>
    </div>
  );
};

export default Footer;
