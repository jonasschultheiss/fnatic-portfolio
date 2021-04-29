import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { Children } from 'react';

export default function CustomLink({ children, activeClassName, ...properties }) {
  const { asPath } = useRouter();
  console.log('🚀 ~ file: customLink.js ~ line 7 ~ CustomLink ~ asPath', asPath);
  const child = Children.only(children);
  const childClassName = child.props.className || '';

  const className =
    asPath === properties.href || asPath === properties.as || asPath === undefined
      ? `${childClassName} ${activeClassName}`.trim()
      : childClassName;

  return (
    <Link {...properties}>
      {React.cloneElement(child, {
        className: className || undefined
      })}
    </Link>
  );
}
