/* eslint-disable @next/next/no-before-interactive-script-outside-document */
import "./globals.css";
import Script from "next/script";
export const metadata = {
  title: "Shmuel Toporowitch Portfolio Website",
  description:
    "Explore the portfolio of Shmuel Toporowitch, showcasing past projects, a downloadable resume, contact information and more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        {children}
        <Script src="./hamburgerMenuScript.js" />
        <Script src="./themeScript.js" />
      </body>
    </html>
  );
}


