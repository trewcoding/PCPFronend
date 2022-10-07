import { Box } from '@mui/system';
import { observer } from 'mobx-react-lite';
import ProductCategorySelection from './productCategorySelection';
import { useStore } from '../../app/stores/store';
import { useEffect } from 'react';

export default observer(function ProductPage() {

  const { productStore } = useStore();
  const { loadAllProducts, productRegistry } = productStore;

  useEffect(() => {
    if (productRegistry.size <= 1) loadAllProducts();
  }, [productRegistry.size, loadAllProducts])

  return (
    <Box>
      <ProductCategorySelection />
    </Box>
  );
})