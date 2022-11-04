import '../styles/globals.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import type { AppProps } from 'next/app';
import { CssBaseline, ThemeProvider } from '@mui/material';

import { UIProvider } from '../context/ui';
import { lightTheme, darkTheme } from '../themes';
import { RecipeProvider } from '../context/recipe';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <UIProvider>
      <RecipeProvider>
        <ThemeProvider theme={lightTheme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </RecipeProvider>
    </UIProvider>
  );
};

export default MyApp;
