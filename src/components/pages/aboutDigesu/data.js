import React from "react"
import { differenceBetweenDigesuAndOtherDapps } from "../../sidebar/pageStructure/pageLinks"
import { whatIsADigesu } from "../whatIsDigesu/data"

export const _aboutDigesu = [
  {
    id: 0,
    heading: "ABOUT DIGESU",
    paragraph1: (
      <p>
        You cannot create a new band with an existing amount unless the Quorum
        for the selected amount is reached. That is, if a band already has an
        amount of 1BNB and it is still active, no band with same amount can
        exist simultaneously unless the existing band is filled up.
      </p>
    ),
    paragraph2: (
      <p>
        This is to achieve efficiency and moderation. T here is a limit to the
        number of bands you can join. You cannot create a band with duration (in
        days) above 255 days. Setting APR below 100 will cause unexpected
        behavior. 100 mean no interest should be charged in this band. 120 means
        to set interest rate to 20% per annum. Same rule for APR applies to
        multiplier (i.e. collateral factor)
      </p>
    ),
    previous: whatIsADigesu,
    next: differenceBetweenDigesuAndOtherDapps,
  },
]
