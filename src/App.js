import { Routes, Route, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login';
import { useState, useEffect } from 'react';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(localStorage.getItem('user'));
  const [auth, setAuth] = useState(localStorage.getItem('auth'));

  useEffect(() => {
    if (auth) {
      setLoggedIn(true);
    }
  }, [auth]);

  return (
    <div>
      <Header />
      <Routes>
        {!loggedIn && <Route path="/" element={<Login setUser={setUser} setAuth={setAuth}/>} />}
        
      </Routes>
    </div>
  );
}

export default App;
