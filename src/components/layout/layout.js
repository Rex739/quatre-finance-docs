// Page Layout
import NavBar from "./navbar/navbar"
import Footer from "./footer"
import { useEffect, useState } from "react"
import ScrollButton from "./scrollButton"
import Spinner from "../spinner"
import React from "react"
import TransparenLayer from "../transparentLayer"
import SideBar from "../sidebar/sidebar"
// Navbar and Footer Component

const Layout = ({ handleClick, isClicked, children }) => {
  const [loading, setLoading] = useState(true)

  const windowIsDefined = typeof window !== "undefined"
  useEffect(() => {
    if (windowIsDefined) {
      // @ts-ignore
      window.WOW = require("wowjs")
    }
    // @ts-ignore
    new WOW.WOW().init()
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  return (
    <div className="relative">
      <section
        className={[
          "fixed h-screen w-full flex justify-center items-center bg-green1 z-50",
          !loading && "hidden",
        ].join(" ")}
      >
        <Spinner size={40} color={"white"} />
      </section>
      <>
        {/* white transparent layer when navbar toggle button is clicked  */}
        <TransparenLayer isClicked={isClicked} />
        <main className="relative bg-green1 font-inter">
          {/* <ScrollButton windowIsDefined={windowIsDefined} /> */}
          <NavBar handleClick={handleClick} isClicked={isClicked} />
          <main className="wrapper text-white1 lg:flex lg:border-t-[1px] border-borderGray">
            <div className="hidden lg:block">
              <SideBar handleClick={undefined} />
            </div>

            {children}
          </main>

          <Footer />
        </main>
      </>
    </div>
  )
}

export default Layout
