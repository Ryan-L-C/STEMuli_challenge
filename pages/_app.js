import 'tailwindcss/tailwind.css';
import { IconlyProvider } from 'react-iconly';
import { WindowSizeProvider } from '../providers/windowSize';
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";

function MyApp({ Component, pageProps }) {
  return (
    <WindowSizeProvider>
      <IconlyProvider set='light' primaryColor='#808191' secondaryColor='#808191'>
        <Component {...pageProps} />
      </IconlyProvider>
    </WindowSizeProvider>
  );
}

export default MyApp
