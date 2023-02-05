import "./globals.css";

import { Fira_Code } from "@next/font/google";

const firacode = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className={firacode.className}>
        <nav>
          <h1>logo</h1>
          <h2>Abount</h2>
          <li>
            <a href="#">about </a>
          </li>
        </nav>
        {children}
      </body>
    </html>
  );
}
