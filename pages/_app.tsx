import './_app.css';

import { Roboto } from 'next/font/google';

import { Layout } from '@/components/Layout';
import { ResponsiveProvider } from '@/hooks/useResponsiveContext';

const roboto = Roboto({
  weight: ['400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export function reportWebVitals(metric: any) {
  // These metrics can be sent to any analytics service
  console.log(metric);
}

const App = ({ pageProps, Component }: any) => (
  <ResponsiveProvider>
    <Layout className={roboto.className}>
      <Component {...pageProps} />
    </Layout>
  </ResponsiveProvider>
);

export default App;
