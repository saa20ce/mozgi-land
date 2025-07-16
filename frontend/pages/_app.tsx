import { appWithTranslation } from 'next-i18next'
import '../styles/global.css';
import 'antd/dist/reset.css';
import { AppProps } from 'next/app';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const setVh = () => {
      document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
    };
    setVh();
    window.addEventListener('resize', setVh);
    return () => window.removeEventListener('resize', setVh);
  }, []);
  
  return <Component {...pageProps} />
}

export default appWithTranslation(MyApp)
