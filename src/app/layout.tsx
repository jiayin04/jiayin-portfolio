import type { Metadata } from "next";
import { Inter, Playfair_Display, } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./services/theme_provider";
import { NotificationProvider } from "./context/notification_context";

const interFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfairDisplayFont = Playfair_Display({
  variable: "--font-playfairdisplay",
  style: "italic",
  subsets: ['latin'],
  preload: true,
});

export const metadata: Metadata = {
  title: "Personal Portfolio",
  description: "This is all you need to know about me!",
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    other: {
      rel: 'icon',
      url: '/favicon-32x32.png',
    },
  },
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
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NotificationProvider>
            {children}
          </NotificationProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
