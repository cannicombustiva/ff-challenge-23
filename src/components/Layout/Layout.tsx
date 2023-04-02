import clsx from 'clsx';
import { FC } from 'react';

import { Header } from '../Header';
import { Meta } from '../Meta';
import s from './Layout.module.css';

type Props = {
  children: React.ReactNode;
  className?: string;
}

export const Layout: FC<Props> = ({ children, className }) => (
  <>
    <Meta title="Some awesome title" />
    <div className={clsx(s.layout, className)}>
      <Header />
      <main>{children}</main>
    </div>
  </>
);
