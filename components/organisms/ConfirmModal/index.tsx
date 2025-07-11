import { memo } from 'react';
import Modal from 'react-native-modal';
import { useModal } from '@/stores';
import ListForm from '../ListForm';

import { styles } from './styles';

function ConfirmModal() {
  const {isOpenConfirm, onCloseConfirm } = useModal()
  
  return (
    <Modal
      isVisible={isOpenConfirm}
      onBackdropPress={onCloseConfirm}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      backdropOpacity={1}
      useNativeDriver
      style={styles.modal}
    >
      <ListForm />
    </Modal>
  )
}

export default memo(ConfirmModal)