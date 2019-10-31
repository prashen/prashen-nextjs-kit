import Header from './Header';


const Layout = props => (
  <div className="container">
    <Header />
    {props.children}

    <style jsx global>{`
        body {
          background: slateblue;
          color: yellow;
          font-family: monospace;
        }

        .container {
          padding: 20px;
          width: 70%;
          max-width: 500px;
          margin: auto;
          text-align: justify;
        }

        h1,
        a {
          // font-family: 'Arial';
        }

        ul {
          padding: 0;
        }

        li {
          list-style: none;
          margin: 5px 0;
        }

        a {
          text-decoration: none;
          color: magenta;
        }

        a:hover {
          opacity: 0.6;
        }
        
      `}</style>
  </div>
);

export default Layout;