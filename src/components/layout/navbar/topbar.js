import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import ActiveLink from "./activeLink"
import Link from "next/link"
import React from "react"

const TopBar = ({ isClicked, handleClick }) => {
  return (
    <header className="bg-green1 py-5 lg:py-10 font-inter ">
      <nav className="wrapper">
        <ul className="flex items-center justify-between">
          <li>
            <Link href="/">
              <a>
                <img
                  src="/images/navbar/logo.svg"
                  alt="Logo"
                  className="w-[80px] lg:w-[142px]"
                />
              </a>
            </Link>
          </li>
          <li className="lg:hidden relative relative z-10">
            {/* hamburger button */}
            <div
              className={isClicked ? "hidden" : "my-auto"}
              onClick={handleClick}
            >
              <img src="images/navbar/bar.svg" alt="menu" width={50} />
            </div>
          </li>
          <div className="hidden lg:flex font-medium">
            <ActiveLink
              className="mx-[36.5px]"
              href="/"
              handleClick={handleClick}
              children={"Home"}
            ></ActiveLink>
            <ActiveLink
              className="mx-[36.5px]"
              href="/#learn"
              handleClick={handleClick}
              children={"Learn"}
            ></ActiveLink>
            <ActiveLink
              className="mx-[36.5px]"
              href="/#community"
              handleClick={handleClick}
              children={"Commuinity"}
            ></ActiveLink>
          </div>
          <li className="hidden lg:flex">
            <a href="">
              <button className="font-bold bg-orange w-[174px] h-[60px] rounded-lg text-white1">
                Go To App
              </button>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
export default TopBar
