import type { Metadata } from "next";
import { nunito_sans } from "./fonts/index";
import "./css/globals.css";
import { ThemeProvider } from "./components/ThemeProvider";
import Header from "./components/Header";

export const metadata: Metadata = {
  title: "REST Countries API with color theme switcher",
  description: "REST Countries API with color theme switcher solution by daHatta - Challenge by Frontend Mentor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <link
        rel="icon"
        href="./favicon-32x32.png"
        type="image/png"
        sizes="32x32"
      />
      <body className={`${nunito_sans.className} bg-clrBkgd/100`}>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <div className="md:max-w-[686px] m-auto 2xl:max-w-[1280px]">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
};
