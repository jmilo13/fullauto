import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/header"
import Footer from "./components/footer"


export const metadata = {
  title: "Full Auto",
  description: "Compañia de autos colombiana",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Header/>
        <main className="py-12 px-8 max-w-5xl m-auto">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
