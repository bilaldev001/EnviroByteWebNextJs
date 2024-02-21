import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useRouter } from "next/router";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "../../utils/theme";

const withMainLayout = (WrappedComponent) => {
  return function MainLayoutHOC(props) {
    const router = useRouter();
    const isFooterVisible =
      router.pathname !== "/signin" && router.pathname !== "/signup";

    return (
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Navbar />
        <WrappedComponent {...props} />
        {isFooterVisible && <Footer />}
      </ThemeProvider>
    );
  };
};

export default withMainLayout;
