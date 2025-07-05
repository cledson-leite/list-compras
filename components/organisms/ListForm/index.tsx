import { View } from '@/styles/Themed';

import { memo } from 'react';
import { useListPending} from '@/stores';
import { ProductFormContainer } from '@/components/molecules/ProductFormContainer';
import { Loader } from '@/components/atomic/Loader';

function ListForm() {
  const { product, loading } = useListPending();

  if (loading) {
    return <Loader isLoading={loading} />;
  }

  return (
    <View>
      <ProductFormContainer product={product} />
    </View>
  );
}

export default memo(ListForm);