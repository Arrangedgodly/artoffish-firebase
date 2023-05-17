import { auth, provider } from "../Firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {FcGoogle} from "react-icons/fc";

function Login({ setUser, setAuth }) {
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        setAuth(token);
        localStorage.setItem("auth", token);
        const user = result.user;
        setUser(user);
        localStorage.setItem("user", user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-xl">Login</h1>
      <p className="text-md">Login to your account!</p>
      <button onClick={signInWithGoogle}><FcGoogle /></button>
    </div>
  );
}

export default Login;
