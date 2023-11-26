import React, { useState } from 'react';
import { Usuario, Administrador } from './src/models/'; 
import './Admin.css';

const usuariosCadastrados = [
  new Usuario(1, 'Nome1', 'email1@example.com', 'senha1', 'nickname1', '123456789'),
  new Usuario(2, 'Nome2', 'email2@example.com', 'senha2', 'nickname2', '987654321'),
];

const Admin = () => {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [isAdminAutenticado, setAdminAutenticado] = useState(false);

  const handleLogin = () => {
    const administradorAutenticado = new Administrador(1, 'Admin', 'admin@example.com', 'admin', 'admin', '123456789');

    if (login === administradorAutenticado.nickname && senha === administradorAutenticado.senha) {
      setAdminAutenticado(true);
    } else {
      alert('Login ou senha incorretos. Tente novamente.');
    }
  };

  return (
    <div>
      {!isAdminAutenticado ? (
        <div className="login-container">
          <h1>Login de Administrador</h1>
          <label htmlFor="login">Login:</label>
          <input type="text" id="login" value={login} onChange={(e) => setLogin(e.target.value)} />
          <label htmlFor="senha">Senha:</label>
          <input type="password" id="senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
          <button onClick={handleLogin}>Login</button>
        </div>
      ) : (
        <div className="usuarios-container">
          <h1>Lista de Usuários</h1>
          <ul>
            {usuariosCadastrados.map((usuario) => (
              <li key={usuario.id}>
                <strong>{usuario.nome}</strong> - {usuario.email}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Admin;
