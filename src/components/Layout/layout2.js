import Nav2 from "../../components/Nav/nav2";
// import Footer from "../Footer/footer";

const Layout = ({ children }) => {
  return (
    <>
      <Nav2/>
      {children}
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
