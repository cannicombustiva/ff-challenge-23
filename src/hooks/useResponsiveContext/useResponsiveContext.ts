/* eslint-disable @typescript-eslint/prefer-reduce-type-parameter */
import constate from 'constate';
import { useCallback, useEffect, useState } from 'react';

type Breakpoints = {
  big: string;
};

type BreakpointsKeys = keyof Breakpoints;

const DEFAULT_BREAKPOINTS: Breakpoints = {
  big: '760px',
};

const breakpointKeys = Object.keys(DEFAULT_BREAKPOINTS) as BreakpointsKeys[];

const DEFAULT_BREAKPOINTS_MATCHES: Record<BreakpointsKeys, boolean> = {
  big: false,
};

const matchMediaFactory = (breakpointKey: BreakpointsKeys) => window.matchMedia(`(min-width: ${DEFAULT_BREAKPOINTS[breakpointKey]})`);

const useResponsive = () => {
  const [matches, setMatches] = useState<Record<BreakpointsKeys, boolean>>(DEFAULT_BREAKPOINTS_MATCHES);

  const onChange = useCallback((
    key: BreakpointsKeys,
  ) => (event: MediaQueryListEvent) => setMatches(old => ({ ...old, [key]: event.matches })), []);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const results = breakpointKeys.reduce((acc, src) => {
      acc[src] = matchMediaFactory(src).matches;
      return acc;
    }, {} as Record<BreakpointsKeys, boolean>);

    setMatches(results);
  }, []);

  useEffect(() => {
    const mediaQueryList = breakpointKeys.reduce((acc, src) => {
      acc[src] = matchMediaFactory(src);
      acc[src].addEventListener('change', onChange(src));
      return acc;
    }, {} as Record<BreakpointsKeys, MediaQueryList>);

    return () => {
      (Object.keys(mediaQueryList) as BreakpointsKeys[]).forEach(
        src => mediaQueryList[src].removeEventListener('change', onChange(src)),
      );
    };
  }, [onChange]);

  return { matches };
};

export const [
  ResponsiveProvider,
  useResponsiveContext,
] = constate(useResponsive);
