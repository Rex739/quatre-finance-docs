import Link from "next/link"
import React from "react"

const BottomNav = ({ previous, next, prevLink, nextLink }) => {
  return (
    <section className="flex justify-between py-10 lg:py-20">
      <div
        className={[
          "w-2/4  border border-border-gray rounded-md flex justify-start text-left px-2 mr-2 lg:mr-5 py-3 ",
          !previous && "invisible",
        ].join(" ")}
      >
        <Link href={"/" + prevLink}>
          <a>
            <span className="font-meduim text-xs">Previous</span>
            <div className="flex justify-center">
              <img src="images/prev.svg" alt="previous" />
              <span className="ml-[8px] text-xs lg:text-base font-meduim text-orange">
                {previous}
              </span>
            </div>
          </a>
        </Link>
      </div>

      {next && (
        <div
          className={[
            "w-2/4 border border-border-gray rounded-md flex justify-end text-right px-2 ml-2 lg:ml-5 py-3",
            !next && "invisible",
          ].join(" ")}
        >
          <Link href={"/" + nextLink}>
            <a>
              <span className="font-meduim text-xs">Next</span>
              <div className="flex">
                <span className="mr-[8px] font-meduim text-orange text-xs lg:text-base">
                  {next}
                </span>
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
