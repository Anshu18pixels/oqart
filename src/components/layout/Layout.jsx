import Header from "../master/Header";
import Footer from "../master/Footer";

const Layout = ({ children }) => {
  return (
    <div
      className="d-flex flex-column min-vh-100"
      style={{
        backgroundImage: `url('/assets/background.jpg')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <Header />
      <main className="container py-4">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
