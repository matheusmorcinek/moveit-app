import '../styles/global.css';

import { ChallangesProvider } from '../contexts/ChallangeContext';

function MyApp({ Component, pageProps }) {

  return (
  <ChallangesProvider>
    <Component {...pageProps} />
  </ChallangesProvider>
  );
}

export default MyApp
