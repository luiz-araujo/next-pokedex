import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { darkTheme } from '@/theme/stitches.config';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      value={{
        light: 'light',
        dark: darkTheme.className,
      }}
    >
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
