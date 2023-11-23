import Head from "next/head"
import Link from "next/link"

function Layout({title , children}){
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
                <Link href={"/cart"} className="p-2">cart</Link>
                <Link href={"/login"} className="p-2">login</Link>
                </div>
            </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer className="flex justify-center items-center h-10">footer</footer>
     </div>
    </>
   )
}

export default Layout