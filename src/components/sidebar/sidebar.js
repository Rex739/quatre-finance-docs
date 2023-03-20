import React from "react"
import Link from "next/link"
import _ActiveLink from "./_activeLink"

const SideBar = ({ handleClick }) => {
  return (
    <aside className="hidden lg:block">
      <nav>
        <ul>
          <li>
            <h1>Learn</h1>
          </li>
          <_ActiveLink
            className="mx-[36.5px]"
            href="/"
            handleClick={handleClick}
            children={"Home"}
          ></_ActiveLink>
        </ul>
      </nav>
    </aside>
  )
}

export default SideBar
