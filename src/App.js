import { Routes, Route, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login';
import Landing from './components/Landing';
import User from './components/User';
import { useState, useEffect } from 'react';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(localStorage.getItem('user'));
  const [auth, setAuth] = useState(localStorage.getItem('auth'));
  const navigate = useNavigate();

  useEffect(() => {
    if (auth) {
      setLoggedIn(true);
    }
  }, [auth]);

  return (
    <div>
      <Header loggedIn={loggedIn} navigate={navigate}/>
      <div className='mt-[6vh]'>
      <Routes>
        {!loggedIn && <Route path="/" element={<Login setUser={setUser} setAuth={setAuth}/>} />}
        {loggedIn && <Route path="/" element={<Landing navigate={navigate}/>} />}
        <Route path="/my-account" element={<User user={user} navigate={navigate}/>} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
