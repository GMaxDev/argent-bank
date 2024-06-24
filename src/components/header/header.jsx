import Logo from "../../img/argentBankLogo.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="flex items-center justify-between px-5 py-1 h-14">
      <Link to="/">
        <img className="h-14" src={Logo} alt="Argent Bank Logo" />
      </Link>

      <Link to="/" className="text-xl text-dark-text">
        <i className="fa fa-user-circle"></i> Sign In
      </Link>
    </div>
  );
}
