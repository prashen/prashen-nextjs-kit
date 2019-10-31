import React from 'react';
import Layout from '../components/MyLayout';
import Head from 'next/head'
class About extends React.Component {
  state = {
    title: 'this is my title'
  }

  render() {
    return (
      <Layout>
        <Head>
          <title>About page</title>
          <meta name="google-site-verification" content="TBYuP3t751ITlRkkV8X5Jf37Sg6J1DZ_rZrUG10lvjs" />
          <meta name="description" content="Prashen:|About tutorials" />
          <meta name="keywords" content="BATMAN, PRASHEN ABOUT" />
          <meta name="author" content="PRASHEN" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <h1>About Page</h1>
        <div className="aboutContainer">
          {/* <p> */}
          <pre className="codeContainer">
            const <code className="functionName">AboutMe</code> = () =>
          <code className="functionReturn">
              {" "}
              JavaScript Developer Job Description Template. A JavaScript
              developer is responsible for implementing the front-end logic that
              defines the behavior of the visual elements of a web application. A
              JavaScript developer is also responsible for connecting this with
              the services that reside on the back-end.
          </code>
          </pre>

          {/* </p> */}
        </div>

        <style jsx>
          {`
          .codeContainer {
            border: 1px #000 solid;
            background: #000;
            padding: 10px;
            border-radius: 10px;
            color: darkorchid;
            line-height: 1.8;
            white-space: pre-line;
            box-shadow: 5px 10px 10px #111;
            outline: none;
            cursor: pointer;
          }
          .functionName {
            color: yellowgreen;
            font-weight: bold;
            /* font-size: ; */
          }
          .functionReturn {
            color: orchid;
          `}
        </style>
      </Layout>
    );
  }
}

export default About;