import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClientProvider} from 'react-query';
import { SidebarDrawerProvider } from '../contexts/SidebarDrawerContext';
import { ReactQueryDevtools } from 'react-query/devtools';

import { makeServer } from '../services/mirage';
import { queryClient } from '../services/queryClient';

import { theme } from '../styles/theme';


if(process.env.NODE_ENV  == 'development') {
  makeServer();
}


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
    <ChakraProvider resetCSS theme={theme}>
      <SidebarDrawerProvider>
        <Component {...pageProps} />
      </SidebarDrawerProvider>
    </ChakraProvider>

      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default MyApp;