import { AdditionalInformation } from "./additionalInformation"
import { Constraint } from "./constraint"
import { Eligibility } from "./eligibility"
import { Feature } from "./feature"
import { Fee } from "./fee"
import { LendingRate } from "./lendingRate"


export interface Data {
    features: Feature[]
    constraints: Constraint[]
    eligibility: Eligibility[]
    fees: Fee[]
    lendingRates: LendingRate[]
    productId: string
    effectiveFrom: string
    effectiveTo: string
    lastUpdated: string
    productCategory: string
    name: string
    description: string
    brand: string
    brandName: string
    applicationUri: string
    isTailored: boolean
    additionalInformation: AdditionalInformation
  }