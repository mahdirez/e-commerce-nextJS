import Head from "next/head";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/Cart";
import { useSession } from "next-auth/react";

function Layout({ title, children }) {
  const { status, data: session } = useSession();
  const { state, dispatch } = useContext(CartContext);

  const { cart } = state;

  const [itemCount, setItemCount] = useState(0);

  useEffect(() => {
    setItemCount(cart.cartItem.reduce((acc, cur) => acc + cur.qty, 0));
  }, [cart.cartItem]);
  return (
    <>
      <Head>
        <title>{`${title} - shopping`}</title>
      </Head>
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
                session.user.name
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
