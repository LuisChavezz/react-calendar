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

  const onCloseModal = () => {
    console.log('closing modal...')
  }

  return (
    <Modal
      isOpen={ true }
      onRequestClose={ onCloseModal }
      style={ modalStyles }
    >
      <h1>{ 'Hola Modal!' }</h1>
    </Modal>
  )
}
