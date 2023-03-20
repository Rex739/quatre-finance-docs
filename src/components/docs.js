import React from "react"

const Docs = ({ heading, paragraph1, paragraph2, paragraph3, paragraph4 }) => {
  return (
    <section>
      <h1 className="font-bold text-xl lg:text-[2rem]">
        {heading}
      </h1>
      <>{paragraph1}</>
      <>{paragraph2}</>
      <>{paragraph3}</>
      <>{paragraph4}</>
    </section>
  )
}

export default Docs
