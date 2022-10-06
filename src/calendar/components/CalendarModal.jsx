import { useState } from "react";
import Modal from "react-modal"

const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement('#root');

export const CalendarModal = () => {

  const [isOpen, setIsOpen] = useState( true )

  const onCloseModal = () => {
    console.log('closing modal...')
    setIsOpen( false )
  }

  return (
    <Modal
      isOpen={ isOpen }
      onRequestClose={ onCloseModal }
      style={ modalStyles }
      className={"modal"}
      overlayClassName="modal-fondo"
      closeTimeoutMS={ 200 }
    >
      <h1>{ 'Hola Modal!' }</h1>
    </Modal>
  )
}
