import React, { useState } from 'react';

const UserAuth = ({kullanıcıBilgileri}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Kullanıcı girişi işlemleri
    setLoggedIn(true);
  };

  const handleLogout = () => {
    // Kullanıcı çıkış işlemleri
    setLoggedIn(false);
  };

  return (
    <div>
      {loggedIn ? (
        <div>
          <p>Hoş geldiniz, {username}!</p>
          <button onClick={handleLogout}>Çıkış Yap</button>
        </div>
      ) : (
        <div>
          <input
            type="text"
            placeholder="Kullanıcı Adı"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Şifre"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Giriş Yap</button>
        </div>
      )}
    </div>
  );
};

export default UserAuth;
