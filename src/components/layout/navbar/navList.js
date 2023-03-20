import React from "react"
import SideBar from "../../sidebar/sidebar"
import Socials from "../../socials"
import ActiveLink from "./activeLink"

const NavList = ({ isClicked, handleClick }) => {
  return (
    <section className=" bg-[#0E4236]  font-inter text-[32px]">
      <nav
        className={
          isClicked
            ? "w-9/12 h-screen overflow-y-scroll bg-green1/50 backdrop-blur-[16px] backdrop-saturate-[180%] z-50 text-white absolute top-0 left-0 pl-5"
            : "invisible"
        }
      >
        <ul
          className={isClicked ? "flex flex-col items-start h-full" : "hidden"}
        >
          <li className="flex relative mb-10 pt-10">
            <div className={isClicked ? "" : "hidden"} onClick={handleClick}>
              <img src="images/navbar/close.svg" alt="close menu" width={30} />
            </div>
          </li>
          {/* nav list */}
          <SideBar handleClick={undefined} />
        </ul>
      </nav>
    </section>
  )
}
export default NavList
