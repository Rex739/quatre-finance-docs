import { useRouter } from "next/router"
import React from "react"

const _ActiveLink = ({ handleClick, children, href, className }) => {
  const router = useRouter()
  const listStyle = {
    // marginRight: 36.5,
    // marginLeft: 36.5,
  }

  const linkStyle = {
    color: router.asPath === href ? "#F6F6F6" : "#FFFFFF",
    textDecoration: router.asPath === href ? "underline" : "none"
  }

  const handleActiveClick = (e) => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <li onClick={handleClick} style={listStyle} className={className}>
      <a
        href={href}
        onClick={handleActiveClick}
        style={linkStyle}
        target="_newtab"
      >
        {children}
      </a>
    </li>
  )
}

export default _ActiveLink
