import React from 'react';
import Nav  from '../components/Nav';
import Footer from '../components/Footer';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <>
    {/* <UserProvider> */}
      <Nav />
        <Component {...pageProps} />
      <Footer />
    {/* </UserProvider> */}
    </>
  );
}







