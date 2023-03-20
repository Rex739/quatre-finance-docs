import React from "react"

const Docs = ({ heading, paragraph1, paragraph2, paragraph3, paragraph4 }) => {
  return (
    <section>
      <h1 className="font-bold text-xl lg:text-[2rem]">
        {heading}
      </h1>
      <div className="">{paragraph1}</div>
      <div>{paragraph2}</div>
      <div>{paragraph3}</div>
      <div>{paragraph4}</div>
    </section>
  )
}

export default Docs
