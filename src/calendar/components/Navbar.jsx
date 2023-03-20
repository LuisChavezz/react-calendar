import { useAuthStore } from "../../hooks/useAuthStore"


export const Navbar = () => {

  const { user, startLogout } = useAuthStore();

  return (
    <div className="navbar navbar-dark bg-dark mb-4 px-4">
      <span className="navbar-brand">
        <i className="fas fa-calendar-alt mr-2"></i>
        <span>{ user.name }</span>
      </span>

      <button 
        onClick={ startLogout }
        className="btn btn-outline-danger"
      >
        <i className="fas fa-sign-out-alt mr-2"></i>
        <span>Salir</span>
      </button>
    </div>
  )
}
