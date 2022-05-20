import Nav from "../../components/Nav/nav";

const Layout = ({ children }) => {
  return (
    <>
      <Nav/>
      {children}
    </>
  );
};

export default Layout;
