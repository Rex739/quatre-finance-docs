import Link from "next/link"
import React from "react"

const Docs = ({
  heading,
  paragraph1,
  paragraph2,
  paragraph3,
  paragraph4,
  previous,
  next,
  nextLink,
  prevLink
}) => {
  return (
    <section className="py-10 lg:py-20 wrapper">
      <div className="lg:bg-gray1 lg:px-5 lg:py-6">
        <h1 className="font-bold text-xl lg:text-[2rem] mb-8 lg:mb-10">
          {heading}
        </h1>
        <div className="mb-5">{paragraph1}</div>
        <div className="mb-5">{paragraph2}</div>
        <div className="mb-5">{paragraph3}</div>
        <div className="mb-5">{paragraph4}</div>
      </div>

      <section className="flex justify-between py-10 lg:py-20">
        <div
          className={[
            "w-2/4 border border-border-gray rounded-md flex justify-start text-left pl-5",
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
              "w-2/4 border border-border-gray rounded-md flex justify-end text-right pr-5",
              !next && "invisible",
            ].join(" ")}
          >
            <Link href={"/" + nextLink}>
              <a>
                <span className="text-xs font-meduim">Next</span>
                <div className="flex">
                  <span className="mr-[8px] font-meduim text-orange">
                    {next}
                  </span>
                  <img src="images/next.svg" alt="next" />
                </div>
              </a>
            </Link>
          </div>
        )}
      </section>
    </section>
  )
}

export default Docs
