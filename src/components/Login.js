import { auth, provider } from "../Firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

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
    <div>
      <h1>Login</h1>
      <p>Login to your account!</p>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
  );
}

export default Login;
