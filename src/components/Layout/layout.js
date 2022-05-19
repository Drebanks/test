import Nav from "../../components/Nav/nav";
// import Footer from "../Footer/footer";

const Layout = ({ children }) => {
  return (
    <>
      <Nav/>
      {children}
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
