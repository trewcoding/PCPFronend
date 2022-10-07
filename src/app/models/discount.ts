import { Eligibility } from "./eligibility"

export interface Discount {
    discountId: string
    description: string
    discountType: string
    amount: string
    eligibility: Eligibility[]
  }