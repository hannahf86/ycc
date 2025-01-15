import { Fraunces, Open_Sans } from "next/font/google";
import "./globals.css";

// COMPONENTS
import Nav from "./components/Nav/Nav";
import SideNav from "./components/SideNav/SideNav";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "York Community Choir | Group Singing in York",
  description:
    "Join York Community Choir in singing music from Byrd to Rutter! A friendly choir in York for all abilities, led by award-winning Paul Feehan. Enjoy choir, chamber music, and the joy of singing together!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${fraunces.variable} ${openSans.variable}`}>
        <Nav />
        <SideNav />
        {children}
      </body>
    </html>
  );
}
