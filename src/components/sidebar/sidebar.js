import React from "react"
import _ActiveLink from "./_activeLink"
import { sidebarList } from "./data"

const SideBar = ({ handleClick }) => {
  return (
    <aside className="hidden lg:block  border-r-[1px] border-borderGray py-10 lg:py-20 lg:pr-8 ">
      <nav className="h-screen overflow-y-scroll">
        <ul>
          <li>
            <h1 className="text-2xl mb-5 lg:mb-10 font-bold">LEARN</h1>
          </li>
          {sidebarList.map((navList) => (
            <div key={navList.id}>
              <_ActiveLink
                className="mb-4 text-sm hover:text-orange"
                href={navList.href}
                handleClick={handleClick}
                children={navList.navList}
              ></_ActiveLink>
            </div>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

export default SideBar
