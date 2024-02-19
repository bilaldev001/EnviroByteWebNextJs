import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "../../utils/theme";

const withMainLayout = (WrappedComponent) => {
  return function MainLayoutHOC(props) {
    return (
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <ToastContainer />
        <Navbar />
        <WrappedComponent {...props} />
        <Footer />
      </ThemeProvider>
    );
  };
};

export default withMainLayout;
