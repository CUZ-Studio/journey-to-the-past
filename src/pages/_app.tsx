import { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { FuroProvider } from "furo-react";
import { Provider } from "react-redux";

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
    <Provider store={store}>
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <FuroProvider
          domain={"https://auth.furo.one"}
          clientId={"4893df2b323bfeb799c18caee7c67b39"}
          redirectUri={"http://localhost:3000/4893df2b323bfeb799c18caee7c67b39"}
          apiUrl={"https://api.furo.one"}
        >
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
        </FuroProvider>
      </CacheProvider>
    </Provider>
  );
}

export default MyApp;
