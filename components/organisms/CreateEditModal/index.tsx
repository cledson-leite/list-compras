import Modal from 'react-native-modal';
import { useModal } from '@/stores/useModal';
import ListForm from '../ListForm';
import { styles } from './createEditModal.styles';

export default function CreateEditModal() {
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