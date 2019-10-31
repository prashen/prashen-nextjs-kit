import React from 'react';
import Layout from '../components/MyLayout';
import Head from 'next/head'
class About extends React.Component {
  state = {
    title:'this is my title'
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
        <p>{this.state.title}</p>
      </Layout>
    );
  }
}

export default About;