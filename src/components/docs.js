import React from "react"

const Docs = ({ heading, paragraph1, paragraph2, paragraph3, paragraph4 }) => {
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

      <div>
        <button></button>
        <button></button>
      </div>
    </section>
  )
}

export default Docs
