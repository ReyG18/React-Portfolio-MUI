import React from "react"
import HeaderNav from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <HeaderNav />
      <main>{children}</main>
      <Footer />
    </>
  )
}