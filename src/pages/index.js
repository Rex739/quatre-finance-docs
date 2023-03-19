import React from "react"
// import SEOHead from "../components/SEOHead/SEOHead"
import TransparenLayer from "../components/transparentLayer"

const Home = ({ isClicked }) => {
  return (
    <main className="bg-green1 relative lg:flex">
      {/* white transparent layer when navbar toggle button is clicked  */}
      <TransparenLayer isClicked={isClicked} />
      <main className="wrapper text-white1 ">
        <aside className="hidden lg:block">sgidsgfi</aside>
        <main>kliHDCoihaskchsdkifhsdoi;</main>
      </main>
    </main>
  )
}

export default Home
