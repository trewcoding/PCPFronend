import { logRoles, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Constraint } from "../../../app/models/constraint";
import Constraints from "./constraints";

const testData: Constraint[] = [
  {
    constraintId: "ConstraintId",
    productDataEfProductId: "ProductDataEfProductId",
    constraintType: "ConstraintTypes",
    additionalValue: "AdditionalValue",
    additionalInfo: "AdditionalString",
  },
  {
    constraintId: "ConstraintId2",
    productDataEfProductId: "ProductDataEfProductId",
    constraintType: "ConstraintType",
    additionalValue: "AdditionalValue",
    additionalInfo: "AdditionalString",
  },
];

test("Test to make sure data is displayed", async () => {
  const user = userEvent.setup();

  const { container } = render(<Constraints constraints={testData} />);
  logRoles(container);
  const header = screen.getByText("Product Constraints");
  expect(header).toHaveTextContent("Product Constraints");
  const accordianDropDown = screen.getByRole("button");
  const constraintType = screen.getByText("ConstraintTypes");
  const constraintInfo = screen.getAllByText("AdditionalString");
  //const divider = screen.findAllByRole("seperator");
  expect(constraintType).not.toBeVisible();
  await user.click(accordianDropDown);
  expect(constraintType).toBeVisible();
  expect(constraintInfo).toHaveLength(2);
});
