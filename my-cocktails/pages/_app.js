import React from 'react';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';
import { Navbar, Footer} from '../src/components/index';
import axios from 'axios';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: '80%',
    margin: '0 auto',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column'
  },
  container: {
    marginBottom: theme.spacing(3)
  }
}));

export default function MyApp(props) {
  const classes = useStyles();
  const { Component, pageProps } = props;
  axios.defaults.baseURL = process.env.NEXT_PUBLIC_COCKTAIL_API_BASE_URL;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>My page</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={ theme }>
        <div className={ classes.root }>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */ }
          <CssBaseline />
          <Navbar />
          <div className={classes.container}>
            <Component { ...pageProps } />
          </div>
          <Footer />
        </div>
      </ThemeProvider>
    </React.Fragment>
  );
}