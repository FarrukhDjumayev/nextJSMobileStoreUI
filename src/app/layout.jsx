import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css"; 

export const metadata = {
  title: "DJI mobile store",
  description: "This is a Next.js project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main> 
        <Footer /> 
      </body>
    </html>
  );
}
