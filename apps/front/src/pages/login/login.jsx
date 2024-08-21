import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signin } from "../../features/userReducer";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  /**
   * @param {React.FormEvent<HTMLFormElement>} e - description
   */
  const handler = async (e) => {
    e.preventDefault(); // On coupe le comportement par défaut afin de ne pas recharger la page

    const formData = new FormData(e.target);
    const email = formData.get(`email`);
    const password = formData.get(`password`);

    // Appel de la thunk pour gérer le login
    dispatch(signin(email, password, navigate));
  };

  return (
    <div className="flex justify-center bg-dark-bg grow">
      <div className="flex flex-col items-center p-8 mt-12 bg-white w-80 h-96">
        <i className="fa fa-user-circle text-dark-text"></i>
        <h1 className="my-5 text-2xl font-semibold text-dark-text">Sign In</h1>
        <form onSubmit={handler}>
          <div className="mb-4">
            <label className="font-semibold text-dark-text" htmlFor="username">
              Username
            </label>
            <input
              className="w-full p-1 text-xl border border-black"
              type="text"
              id="username"
              name="email"
            />
          </div>
          <div className="mb-4">
            <label className="font-semibold text-dark-text" htmlFor="password">
              Password
            </label>
            <input
              className="w-full p-1 text-xl border border-black"
              type="password"
              id="password"
              name="password"
            />
          </div>
          <div className="flex gap-2">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button
            type="submit"
            className="block w-full p-2 mt-4 font-semibold text-center text-white bg-border-icon"
          >
            Sign in
          </button>
          {/* <Link
            to="/profile"
            className="block w-full p-2 mt-4 font-semibold text-center text-white bg-border-icon"
          >
            Sign In
          </Link> */}
        </form>
      </div>
    </div>
  );
}
