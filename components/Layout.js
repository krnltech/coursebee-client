import Navbar from "./navbar/Navbar";
import Cart from "./cart/Cart";
import Footer from "./footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Cart/>
      {children}
      <Footer />
    </>
  );
};

export default Layout;
