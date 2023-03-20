import React from "react"
import SideBar from "../components/sidebar/sidebar"
// import SEOHead from "../components/SEOHead/SEOHead"
// import TransparenLayer from "../components/transparentLayer"

const Home = ({ handleClick, isClicked }) => {
  return (
    <main className="bg-green1 relative lg:flex font-inter">
      <main className="wrapper text-white1 lg:flex lg:border-t-[1px] border-borderGray">
        <SideBar handleClick={handleClick} />
        <main></main>
      </main>
    </main>
  )
}

export default Home
