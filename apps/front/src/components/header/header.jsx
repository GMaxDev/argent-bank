import { useDispatch, useSelector } from "react-redux";
import Logo from "../../img/argentBankLogo.png";
import { Link } from "react-router-dom";
import { logout } from "../../features/userReducer";

export default function Header() {
  const isLogged = useSelector((state) => state.user.isLogged)
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <div className="flex items-center justify-between px-5 py-1 h-14">
      <Link to="/">
        <img className="h-14" src={Logo} alt="Argent Bank Logo" />
      </Link>

      {isLogged ? (
        <Link  to="/login" onClick={handleLogout} className="text-xl text-dark-text">
          <i className="fa fa-sign-out"></i> Logout
        </Link>
      ) : (
        <Link to="/login" className="text-xl text-dark-text">
          <i className="fa fa-user-circle"></i> Sign In
        </Link>
      )}
    </div>
  );
}
