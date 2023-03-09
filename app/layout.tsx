import { Metadata } from "next";
import { lato } from "./font";
import Footer from "components/Footer";
import Header from "components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Peter Tumulty - Lead Web Developer | Senior Frontend Engineer | Software Educator",
  description:
    "Peter Tumulty, owner and lead developer at Tumulty Web Services. Web engineer with 10+ years of experience building software for small businesses, startups, e-commerce companies, and agencies.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${lato.className} m-0 p-0`}>
      <body>
        <div className="shadow-xl rounded-lg mx-auto my-12 w-full max-w-screen-lg bg-white bg-opacity-75 min-h-min">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
