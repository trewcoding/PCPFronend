import { Discount } from "./discount"

export interface Fee {
  productDataEfProductId: string
  feeId: string
    name: string
    feeType: string
    amount: string
    currency: string
    additionalInfo: string
    additionalValue: string
    discounts: Discount[]
    transactionRate: string
  }