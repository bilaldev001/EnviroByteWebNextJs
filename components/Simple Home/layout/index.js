import React from "react";
import { useRouter } from "next/router";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "../../../utils/theme";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import Footer from "./footer";
import Header from "./header";
import { persistor, store } from "../../Redux/store/Store";

const withSimpleLayout = (WrappedComponent) => {
  return function MainLayoutHOC(props) {
    const router = useRouter();
    const isFooterVisible =
      router.pathname !== "/signin" && router.pathname !== "/signup";

    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <ToastContainer />
            <Header />
            <WrappedComponent {...props} />
            {isFooterVisible && <Footer />}
          </ThemeProvider>
        </PersistGate>
      </Provider>
    );
  };
};

export default withSimpleLayout;
