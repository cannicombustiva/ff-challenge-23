/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

import { useResponsiveContext } from '@/hooks/useResponsiveContext';

import s from './Header.module.css';

export const Header = () => {
  const { matches } = useResponsiveContext();
  return (
    <header className={s.header}>
      <nav className={s.nav}>
        <div>
          <Link
            href="/"
          >
            <img src={matches.big ? '/assets/logo.svg' : '/assets/mark.svg'} alt="logo" />
          </Link>
        </div>
        <div className={s.rightButtons}>
          <div className={s.rightButton}>
            <span>
              SHOP
            </span>
          </div>
          <div className={s.rightButton}>
            <img src="/assets/borsa.svg" alt="borsa" />
          </div>
        </div>
      </nav>
    </header>
  );
};

