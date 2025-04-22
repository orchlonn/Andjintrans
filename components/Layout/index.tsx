import * as React from "react";
import Header from "../Header";
import Footer from "../Footer";
import HeaderContact from "../HeaderContact/index,";

interface IProps {
  children?: any;
  inverse?: boolean;
}

const Layout = (props: IProps) => {
  const [scroll, setScroll] = React.useState(false);
  React.useEffect(() => {

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setScroll(window.pageYOffset > 200)
      );
    }
  }, []);

  return (
    <>
      <HeaderContact />
      <div className="relative">
      <Header scroll={scroll} />
      {props.children}
      <Footer  />
      </div>
    </>
  );
};

export default Layout;
