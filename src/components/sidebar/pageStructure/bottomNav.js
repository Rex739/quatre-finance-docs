import Link from "next/link"
import React from "react"

const BottomNav = ({ previous, next, prevLink, nextLink }) => {
  return (
    <section className="flex justify-between py-10 lg:py-20">
      <div
        className={[
          "w-2/4 lg:h-[59px] border border-border-gray rounded-md flex justify-start text-left pl-5",
          !previous && "invisible",
        ].join(" ")}
      >
        <Link href={"/" + prevLink}>
          <a>
            <span className="text-xs font-meduim">Previous</span>
            <div className="flex">
              <span className="mr-[8px] font-meduim text-orange">
                <img src="images/prev.svg" alt="previous" />
              </span>
              <span>{previous}</span>
            </div>
          </a>
        </Link>
      </div>

      {next && (
        <div
          className={[
            "w-2/4 lg:h-[59px] border border-border-gray rounded-md flex justify-end text-right pr-5",
            !next && "invisible",
          ].join(" ")}
        >
          <Link href={"/" + nextLink}>
            <a>
              <span className="text-xs font-meduim">Next</span>
              <div className="flex">
                <span className="mr-[8px] font-meduim text-orange">{next}</span>
                <img src="images/next.svg" alt="next" />
              </div>
            </a>
          </Link>
        </div>
      )}
    </section>
  )
}

export default BottomNav
