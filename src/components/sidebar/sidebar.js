import React from "react"
import _ActiveLink from "./_activeLink"
import { sidebarList } from "./data"

const SideBar = ({ handleClick }) => {
  return (
    <aside className="hidden lg:block border-r-2">
      <nav>
        <ul>
          <li>
            <h1>Learn</h1>
          </li>
          {sidebarList.map((navList) => (
            <div key={navList.id}>
              <_ActiveLink
                className="mx-[36.5px]"
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
