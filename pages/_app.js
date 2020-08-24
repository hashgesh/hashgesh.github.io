import React from 'react';
import '../styles/index.scss';
import Sidebar from '../components/Sidebar';
import Layout from '../components/Layout';

const App = ({ Component, pageProps }) => {
  return (
    <React.Fragment>
      <Sidebar></Sidebar>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </React.Fragment>
  );
};

export default App;
