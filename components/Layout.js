import Head from 'next/head';
import Header from './Header';

const Layout = ({ children, title }) => {
  return (
    <>
      <Head>{title ? <title>{title}</title> : <title>Hulu</title>}</Head>
      <Header />
      {children}
    </>
  );
};

export default Layout;
