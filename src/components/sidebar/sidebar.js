import React from "react"
import _ActiveLink from "./_activeLink"
import { sidebarList } from "./data"

const SideBar = ({ handleClick }) => {
  return (
    <aside className=" lg:border-r-[1px] lg:border-borderGray lg:py-20 lg:pr-8 2xl:pr-20 ">
      <nav className="h-full overflow-y-scroll">
        <ul>
          <li>
            <h1 className="text-xl mb-5 lg:mb-10 font-bold">LEARN</h1>
          </li>
          {sidebarList.map((navList) => (
            <div key={navList.id}>
              <_ActiveLink
                className="mb-4 text-sm hover:text-orange"
                href={navList.href}
                children={navList.navList}
                handleClick={handleClick}
              ></_ActiveLink>
            </div>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

export default SideBar
