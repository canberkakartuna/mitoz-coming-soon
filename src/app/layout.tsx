import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "./theme-provider";
import Head from "next/head";

const inter = Inter({
  weight: ["100", "200", "300", "600", "400", "700", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Mitoz - Coming soon",
  description:
    "Mitoz is a platform that allows you to share information about various topics such as technology, science, and more. We are currently in development and will be launching soon.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={`${inter.className} bg-gray-200 dark:bg-[#0d1117]`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main className="h-screen">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
