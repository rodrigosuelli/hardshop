import React, { Children } from 'react';
import { useRouter } from 'next/router';
import cx from 'classnames';
import Link, { LinkProps } from 'next/link';

type ActiveLinkProps = React.PropsWithChildren<LinkProps> & {
  activeClassName?: string;
};

const ActiveLink = ({
  children,
  activeClassName = 'active',
  ...props
}: ActiveLinkProps) => {
  const { asPath } = useRouter();
  const child = Children.only(children) as React.ReactElement;
  const childClassName = child.props.className || '';

  const isActive = asPath === props.href || asPath === props.as;

  const className = cx(childClassName, { [activeClassName]: isActive });

  return (
    <Link {...props}>
      {React.cloneElement(child, {
        className: className || null,
      })}
    </Link>
  );
};

export default ActiveLink;
