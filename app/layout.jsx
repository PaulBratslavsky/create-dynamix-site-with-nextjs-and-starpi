import "../app/styles/globals.css";
import Footer from "../components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head />
      <body className="f-f-p">
        <main className="mx-auto container relative px-6 xl:px-0">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
