import { CartContextProvider } from "../context/Cart";
import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-gray-100">
      <SessionProvider>
        <CartContextProvider>
          <Component {...pageProps} />
        </CartContextProvider>
      </SessionProvider>
    </div>
  );
}

export default MyApp;
