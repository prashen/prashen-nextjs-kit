import Layout from '../components/MyLayout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import Head from 'next/head'

const Index = props => (
  <Layout>
    <Head>
      <title>Home page</title>
      <meta name="google-site-verification" content="TBYuP3t751ITlRkkV8X5Jf37Sg6J1DZ_rZrUG10lvjs" />
      <meta name="description" content="Prashen tutorials" />
      <meta name="keywords" content="BATMAN, PRASHEN" />
      <meta name="author" content="PRASHEN" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>

    <h1>Batman TV Shows</h1>
    <ul>
      {props.shows.map(show => (
        <li key={show.id}>
          <Link href="/p/[id]" as={`/p/${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
    <style jsx>{`
        h1,
        a {
          font-family: 'Arial';
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
          color: blue;
        }

        a:hover {
          opacity: 0.6;
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