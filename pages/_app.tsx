import type { AppProps } from 'next/app';

import '../styles/reset.css';

import { useRouter } from 'next/router';
import { IntlProvider } from 'react-intl';

import { locales } from '../localization/messages';

import { QueryClient, QueryClientProvider } from 'react-query';
import { UserContextProvider } from '@context';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  // Determine active locale and set messages
  const { locale, defaultLocale } = useRouter();
  const messages = locale ? locales[locale] : locales['en'];

  return (
    <IntlProvider
      locale={locale ? locale : 'en'}
      defaultLocale={defaultLocale}
      messages={messages}
    >
      <QueryClientProvider client={queryClient}>
        <UserContextProvider>
          <Component {...pageProps} />
        </UserContextProvider>
      </QueryClientProvider>
    </IntlProvider>
  );
}

export default MyApp;
