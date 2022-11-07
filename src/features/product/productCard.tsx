import { Card, CardMedia } from "@mui/material";
import { observer } from "mobx-react-lite";
import { useStore } from "../../app/stores/store";
import "./productCardStyle.css";
import ProductSelection from "./productSelection";

interface Props {
  productCategorySelected: string;
}

export default observer(function ProductCard({
  productCategorySelected,
}: Props) {
  const { productStore } = useStore();
  const { groupedProducts } = productStore;

  return (
    <>
      {groupedProducts.map(([bank, products]) => {
        if (bank === "CBA") {
          return (
            <Card key={bank} className="noTabMargin">
              {/* <CardHeader title={bank} className="cardHeaderPosition" /> */}
              <CardMedia
                component="img"
                src={`./brands/${bank}.png`}
                height="200px"
                sx={{ objectFit: "contain" }}
              />
              <ProductSelection
                productCategorySelected={productCategorySelected}
                products={products}
              />
            </Card>
          );
        }
      })}
    </>
  );
});
