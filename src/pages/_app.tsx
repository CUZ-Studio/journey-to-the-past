import { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { Provider as ReduxProvider } from "react-redux";

import BasicLayout from "@/components/templates/BasicLayout";
import RequireAuth from "@/components/templates/RequireAuth";
import createEmotionCache from "@/createEmotionCache";
import rootReducer from "@/slices";
import { Page } from "@/types";
import { configureStore } from "@reduxjs/toolkit";

import theme from "@/styles/theme";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const store = configureStore({ reducer: rootReducer });

function MyApp(props: MyAppProps) {
  const router = useRouter();
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <ReduxProvider store={store}>
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <BasicLayout>
            {router.asPath === Page.HOME ? (
              <Component {...pageProps} />
            ) : (
              <RequireAuth>
                <Component {...pageProps} />
              </RequireAuth>
            )}
          </BasicLayout>
        </ThemeProvider>
      </CacheProvider>
    </ReduxProvider>
  );
}

export default MyApp;
