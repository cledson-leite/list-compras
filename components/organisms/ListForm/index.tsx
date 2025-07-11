import { View } from '@/styles/Themed';

import { memo } from 'react';
import { useListPending, useModal} from '@/stores';
import { ProductFormContainer } from '@/components/molecules/ProductFormContainer';
import { Loader } from '@/components/atomic/Loader';
import { ConfirmFormContainer } from '@/components/molecules/ConfirmFormContainer';

function ListForm() {
  const { product, loading } = useListPending()
  const { isOpenConfirm } = useModal()

  if (loading) {
    return <Loader isLoading={loading} />;
  }
  
  return (
    <View>
      {
        isOpenConfirm
        ? <ConfirmFormContainer product={product} />
        : <ProductFormContainer product={product} />
      }
    </View>
  );
}

export default memo(ListForm);