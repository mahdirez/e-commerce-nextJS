import Head from "next/head";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/Cart";
import { signOut, useSession } from "next-auth/react";
import { Menu } from "@headlessui/react";
import DropDown from "./DropDown";
import Cookies from "js-cookie";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Layout({ title, children }) {
  const { status, data: session } = useSession();
  const { state, dispatch } = useContext(CartContext);

  const { cart } = state;

  const [itemCount, setItemCount] = useState(0);

  useEffect(() => {
    setItemCount(cart.cartItem.reduce((acc, cur) => acc + cur.qty, 0));
  }, [cart.cartItem]);

  const logoutHandler = () => {
    Cookies.remove();

    signOut({ callbackUrl: "/login" });
  };
  return (
    <>
      <Head>
        <title>{`${title} - shopping`}</title>
      </Head>
      <ToastContainer position="top-center" />
      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="flex h-14 px-8 justify-between items-center border-b-4 bg-white">
            <Link href={"/"} className="text-lg font-bold">
              shopping
            </Link>
            <div>
              <Link href={"/cart"} className="p-2">
                cart
                {cart.cartItem.length > 0 && (
                  <span className="ml-1 rounded-xl bg-gray-200 px-2 py-1 text-xs font-bold">
                    {itemCount}
                  </span>
                )}
              </Link>
              {status === "loading" ? (
                "loading"
              ) : session?.user ? (
                <Menu as={"div"} className={"relative inline-block"}>
                  <Menu.Button className={"text-blue-500"}>
                    {session.user.name}
                  </Menu.Button>
                  <Menu.Items
                    className={
                      "absolute right-0 w-56 bg-white rounded-xl p-4 origin-top-right border-w border-slate-100"
                    }
                  >
                    <Menu.Item>
                      <DropDown className="flex p-2" href="/profile">
                        profile
                      </DropDown>
                    </Menu.Item>
                    <Menu.Item>
                      <a href="#" onClick={logoutHandler} className="flex p-2">
                        logout
                      </a>
                    </Menu.Item>
                  </Menu.Items>
                </Menu>
              ) : (
                <Link href={"/login"} className="p-2">
                  login
                </Link>
              )}
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer className="flex justify-center items-center h-10">
          footer
        </footer>
      </div>
    </>
  );
}

export default Layout;
