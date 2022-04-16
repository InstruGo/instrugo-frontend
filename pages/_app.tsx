import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import { IntlProvider } from 'react-intl';
import { QueryClient, QueryClientProvider } from 'react-query';

import { AxiosProvider, UserContextProvider } from '@context';

import { locales } from '../localization/messages';
import '../styles/reset.css';

const queryClient = new QueryClient();

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { locale, defaultLocale } = useRouter();
  const messages = locale ? locales[locale] : locales['en'];

  return (
    <IntlProvider
      locale={locale ? locale : 'en'}
      defaultLocale={defaultLocale}
      messages={messages}
    >
      <QueryClientProvider client={queryClient}>
        <AxiosProvider>
          <UserContextProvider>
            <Component {...pageProps} />
          </UserContextProvider>
        </AxiosProvider>
      </QueryClientProvider>
    </IntlProvider>
  );
};

export default MyApp;
