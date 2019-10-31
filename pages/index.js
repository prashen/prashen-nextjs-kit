import Layout from '../components/MyLayout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import Head from 'next/head'

const Index = props => (
  <Layout>
    <Head>
      <title>@PrashenJeetRoy: Blogs</title>
      <meta name="google-site-verification" content="TBYuP3t751ITlRkkV8X5Jf37Sg6J1DZ_rZrUG10lvjs" />
      <meta name="description" content="Prashen tutorials" />
      <meta name="keywords" content="BATMAN, PRASHEN" />
      <meta name="author" content="PRASHEN" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>

    <h1>Blogs</h1>
    <div className="codeContainer">
      <ul>
        {props.shows.map(show => (
          <li key={show.id}>
            <Link href="/p/[id]" as={`/p/${show.id}`}>
              <a>{show.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>

    <style jsx>{`
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
        }

        
      `}</style>
  </Layout>
);

Index.getInitialProps = async function () {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    shows: data.map(entry => entry.show)
  };
};

export default Index;