import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import { useState, useEffect } from "react";
import {useRouter} from 'next/router';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return <Component {...pageProps} />
}

// https://jasonwatmore.com/post/2021/08/29/next-js-basic-http-authentication-tutorial-with-example-app
export default MyApp
