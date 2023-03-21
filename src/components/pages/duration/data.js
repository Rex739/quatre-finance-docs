import React from "react"

import { amount, multiplier } from "../../pageStructure/pageLinks"

export const _duration = [
  {
    id: 0,
    heading: "DURATION",
    paragraph1: (
      <p>
        Duration specifies the period of the fund. If band &apos;Y&apos; with
        quorum: &apos;3&apos; was set up with 7 days duration, each taker will
        have 7 days to use the given/borrowed fund and return it to the pool. A
        cycle for this pool will be 21 days.
      </p>
    ),

    previous: amount,
    next: multiplier,
  },
]
