import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import { FormattedMessage } from 'react-intl';

import { SimpleHeader } from '@modules/SimpleHeader/Simpleheader';

import { AuthDescription, LocaleLink, LocaleSection } from './styles';

interface AuthLayoutProps {
  descriptionMsgId?: string;
}

export const AuthLayout = ({
  descriptionMsgId,
  children,
}: React.PropsWithChildren<AuthLayoutProps>) => {
  const router = useRouter();

  return (
    <>
      <SimpleHeader />

      {descriptionMsgId && (
        <AuthDescription>
          <FormattedMessage id={descriptionMsgId} />
        </AuthDescription>
      )}

      {children}

      <LocaleSection>
        <LocaleLink>
          <Link href={router.pathname} locale="hr">
            <a>
              <Image
                src="/croatia.png"
                width="20px"
                height="20px"
                alt="hrIcon"
              />
              <span className="text">
                <FormattedMessage id="lang.hr" />
              </span>
            </a>
          </Link>
        </LocaleLink>
        <LocaleLink>
          <Link href={router.pathname} locale="en">
            <a>
              <Image
                src="/united-kingdom.png"
                width="20px"
                height="20px"
                alt="enIcon"
              />
              <span className="text">
                <FormattedMessage id="lang.en" />
              </span>
            </a>
          </Link>
        </LocaleLink>
      </LocaleSection>
    </>
  );
};
