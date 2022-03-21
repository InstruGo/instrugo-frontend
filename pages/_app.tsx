import type { AppProps } from 'next/app';

import '../styles/reset.css';

import { useRouter } from 'next/router';
import { IntlProvider } from 'react-intl';

import { locales } from '../localization/messages';

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
        <Component {...pageProps} />
      </QueryClientProvider>
    </IntlProvider>
  );
}

export default MyApp;
