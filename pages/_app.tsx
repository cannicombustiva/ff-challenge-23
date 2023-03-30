import './_app.css';

export function reportWebVitals(metric: any) {
  // These metrics can be sent to any analytics service
  console.log(metric);
}

const App = ({ pageProps, Component }: any) => (
  <Component {...pageProps} />
);

export default App;
