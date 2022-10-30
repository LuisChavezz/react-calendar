import { addHours, differenceInSeconds } from "date-fns";
import { useState } from "react";
import Modal from "react-modal"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from 'date-fns/locale/es';
import { useForm } from "../../hooks";
import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.min.css'
import { useMemo } from "react";


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
  const [formSubmitted, setFormSubmited] = useState(false)

  // useForm
  const [ values, handleInputChange, handleDateChange ] = useForm({ // Initial State
    title: 'Fernando',
    notes: 'Herrera',
    start: new Date(),
    end: addHours( new Date(), 4 ),
  });

  const titleClass = useMemo(() => {
    if ( !formSubmitted ) return '';
    return ( values.title.length > 0 )
      ? 'is-valid'
      : 'is-invalid'
  }, [ values, formSubmitted ])

  // onSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmited( true )

    const difference = differenceInSeconds( values.end, values.start )
    if ( isNaN(difference) || difference <= 0 ) {
      Swal.fire('Fechas incorectas', 'Favor de revisar las fechas ingresadas', 'error')
      return
    }

    if ( values.title.length <= 0 ) {
      console.log('Falta un título')
      return
    }
    console.log( values )
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
      <h1> Nuevo evento </h1>
      <hr />
      <form className="container" onSubmit={ handleSubmit }>
        <div className="form-group mb-2">
            <label>Fecha y hora inicio</label>
            <DatePicker 
              selected={ values.start }
              onChange={ (e) => handleDateChange( e, 'start' ) }
              className="form-control"
              dateFormat="Pp"
              showTimeSelect
              locale={es}
              timeCaption={"Hora"}
            />
        </div>

        <div className="form-group mb-2">
            <label>Fecha y hora fin</label>
            <DatePicker 
              minDate={ values.start }
              selected={ values.end }
              onChange={ (e) => handleDateChange( e, 'end' ) }
              className="form-control"
              dateFormat="Pp"
              showTimeSelect
              locale={es}
              timeCaption={"Hora"}
            />
        </div>

        <hr />
        <div className="form-group mb-2">
            <label>Titulo y notas</label>
            <input 
                type="text" 
                className={ `form-control ${titleClass}` }
                placeholder="Título del evento"
                name="title"
                autoComplete="off"
                value={ values.title }
                onChange={ handleInputChange }
            />
            <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
        </div>

        <div className="form-group mb-2">
            <textarea 
                type="text" 
                className="form-control "
                placeholder="Notas"
                rows="5"
                name="notes"
                value={ values.notes }
                onChange={ handleInputChange }
            ></textarea>
            <small id="emailHelp" className="form-text text-muted">Información adicional</small>
        </div>

        <button
            type="submit"
            className="btn btn-outline-primary btn-block"
        >
            <i className="far fa-save"></i>
            <span> Guardar</span>
        </button>
      </form>
    </Modal>
  )
}
