import Head from 'next/head';
import Header from './Header';

const Layout = ({ children, title }) => {
  return (
    <div>
      <Head>{title ? <title>{title}</title> : <title>Hulu</title>}</Head>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
