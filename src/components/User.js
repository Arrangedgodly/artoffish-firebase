import { auth } from "../Firebase";
import { signOut } from "firebase/auth";

function User({user, navigate}) {
  if (!user) {
    navigate('/');
  }

  const signOutUser = () => {
    signOut(auth).then(() => {
      localStorage.removeItem("auth");
      localStorage.removeItem("user");
      navigate('/');
    }).catch((error) => {
      console.log(error);
    });
  }

  return (
    <div>
      <h1>User</h1>
      <p>User page</p>
      <button onClick={signOutUser}>Sign Out</button>
    </div>
  )
}

export default User;