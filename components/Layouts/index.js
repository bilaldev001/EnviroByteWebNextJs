import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useRouter } from "next/router";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "../../utils/theme";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

import { store, persistor } from "../Redux/store/Store";

const withMainLayout = (WrappedComponent) => {
  return function MainLayoutHOC(props) {
    const router = useRouter();
    const isFooterVisible =
      router.pathname !== "/signin" && router.pathname !== "/signup";

    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <ToastContainer />
            <Navbar />
            <WrappedComponent {...props} />
            {isFooterVisible && <Footer />}
          </ThemeProvider>
        </PersistGate>
      </Provider>
    );
  };
};

export default withMainLayout;
