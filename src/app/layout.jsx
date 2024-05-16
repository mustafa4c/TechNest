import Counter from "<@/component/Counter/Counter>";
import Footer from "<@/component/Footer/Footer>";
import NavBar from "<@/component/NavBar/NavBar>";
import "./globals.css"


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
