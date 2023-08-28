import Modal from 'react-modal';
import { ModalImg, WrapperImg } from './Modal.styled';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    height: '80%',
    background: 'transparent',
    border: 'none',
  },
  overlay: {
    zIndex: 1101,
    background: 'rgba(0, 0, 0, 0.6)',
  },
};

Modal.setAppElement('#root');

export const ModalElement = ({
  closeModal,
  srcDataModal,
  altDataModal,
  isModalOpen,
}) => {
  return (
    <Modal
      style={customStyles}
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      contentLabel="Modal"
    >
      <WrapperImg>
        <ModalImg src={srcDataModal} alt={altDataModal} />
      </WrapperImg>
    </Modal>
  );
};
