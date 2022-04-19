import Link from 'next/link';
import React from 'react';

interface CustomLinkProps {
  href: string;
}

export const CustomLink = ({
  href,
  children,
}: React.PropsWithChildren<CustomLinkProps>) => {
  return (
    <Link href={href}>
      <a>{children}</a>
    </Link>
  );
};
