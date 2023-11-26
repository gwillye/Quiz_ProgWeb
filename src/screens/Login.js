import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/create-account">Create Account</Link>
          </li>
        </ul>
      </nav>

      <Link to="/" className="voltar-button">
        Voltar
      </Link>
      <div className="container">
        <h1>Login</h1>
        <form>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" required />
          <label htmlFor="senha">Senha:</label>
          <input type="password" id="senha" required />
          <Link to="/esqueceu-senha" className="forgot-password">
            Esqueceu sua senha? Clique aqui
          </Link>
          <br />
          <br />
          <p className="no-account">Não possui conta?</p>
          <Link to="/create-account" className="register-button">
            Cadastrar
          </Link>
          <Link to="/menu" className="login-button2">
            Login
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
