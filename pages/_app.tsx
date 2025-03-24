import type { AppProps } from "next/app";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useRouter } from "next/router";

import { fontSans, fontMono } from "@/config/fonts";
import "@/styles/globals.css";
import { HeroUIProvider } from "@heroui/system";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <NextThemesProvider attribute="class" defaultTheme="system">
      <HeroUIProvider navigate={router.push}>
        <Component {...pageProps} />
      </HeroUIProvider>
    </NextThemesProvider>
  );
}

export const fonts = {
  sans: fontSans.style.fontFamily,
  mono: fontMono.style.fontFamily,
};
