import { useCalendarStore, useUiStore } from "../../hooks"


export const FabDelete = () => {

  const { startDeleteEvent, activeEvent,  } = useCalendarStore();
  const { isDateModalOpen } = useUiStore();

  const handleDelete = async () => {
    await startDeleteEvent()
  }

  return (
    <button 
      className="btn btn-danger fab-danger"
      onClick={ handleDelete }
      disabled={ activeEvent === null || isDateModalOpen }
    >
      <i className="fas fa-trash-alt disabled"></i>
    </button>
  )
}
