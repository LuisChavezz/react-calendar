import { Navbar } from "../"


export const CalendarPage = () => {
  return (
    <div className="navbar navbar-dark bg-dark mb-4 px-4">
      <span className="navbar-brand">
        <i className="fas fa-calendar-alt mr-2"></i>
        <span>Hansi Flick</span>
      </span>

      <button className="btn btn-outline-danger">
        <i className="fas fa-sign-out-alt mr-2"></i>
        <span>Salir</span>
      </button>
    </div>
  )
}
