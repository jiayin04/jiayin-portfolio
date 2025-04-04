import type { Metadata } from "next";
import { Inter, Playfair_Display, } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./services/theme_provider";

const interFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfairDisplayFont = Playfair_Display({
  variable: "--font-playfairdisplay",
  style: "italic",
});

export const metadata: Metadata = {
  title: "Personal Portfolio",
  description: "This is all you need to know about me!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`${interFont.variable} ${playfairDisplayFont.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
