import { memo } from 'react';
import Modal from 'react-native-modal';
import { useModal } from '@/stores';
import ListForm from '../ListForm';

import { styles } from './styles';

function CreateEditModal() {
  const {isOpen, onClose } = useModal()
  
  return (
    <Modal
      isVisible={isOpen}
      onBackdropPress={onClose}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      backdropOpacity={0.5}
      useNativeDriver
      style={styles.modal}
    >
      <ListForm />
    </Modal>
  )
}

export default memo(CreateEditModal)