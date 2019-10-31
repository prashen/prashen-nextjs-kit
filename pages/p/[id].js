import Layout from '../../components/MyLayout';
import fetch from 'isomorphic-unfetch';
import Head from 'next/head'

const Post = props => (
  <Layout>
    <Head>
      <title>{'Post description'}</title>
      <meta name="google-site-verification" content="TBYuP3t751ITlRkkV8X5Jf37Sg6J1DZ_rZrUG10lvjs" />
      <meta name="description" content="Prashen:| Description tutorials" />
      <meta name="keywords" content="BATMAN, PRASHEN, POST, DESCRIPTION" />
      <meta name="author" content="PRASHEN" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <h1>{props.show.name}</h1>
    <p>{props.show.summary.replace(/<[/]?[pb]>/g, '')}</p>
    <img src={props.show.image.medium} alt="image1" />
  </Layout>
);

Post.getInitialProps = async function (context) {
  const { id } = context.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  console.log(`Fetched show: ${show.name}`);

  return { show };
};

export default Post;