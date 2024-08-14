import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setEmail, setPassword, setToken, toggleLogin } from "../../features/userReducer";
import { postLogin } from "../../utils/services/callApi";

export default function Login() {
  
  const [emailInput, setEmailInput] = useState("")
  const [passwordInput, setPasswordInput] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {isLogged} = useSelector((state) => state.user)

  const handler = async (e) => {
    e.preventDefault(); // On coupe le comportement par défaut afin de ne pas recharger la page

    const data = { // On crée un objet dans lequel on stock le mail et le mot de passe entrées par l'utilisateur
      email: emailInput,
      password: passwordInput,
    };

    try {
      const response = await postLogin(data);
      console.log(response);

      if (response.status === 400) {
        console.log(response.message)
        return;
      } else {
        const tokenGenerate = await response.body.token;
        const tokenResult = 'Bearer ' + tokenGenerate;
        
        // Dispatch des actions pour mettre à jour les champs dans Redux
        dispatch(setEmail(emailInput))
        dispatch(setPassword(passwordInput))
        dispatch(setToken(tokenResult))
        dispatch(toggleLogin())

        navigate('/profile')
      }
    } catch (error) {
      console.error("An error occurred during login:", error);
      console.error("An unexpected error occurred. Please try again later.");
    }
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
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
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
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button type="submit" className="block w-full p-2 mt-4 font-semibold text-center text-white bg-border-icon">
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
