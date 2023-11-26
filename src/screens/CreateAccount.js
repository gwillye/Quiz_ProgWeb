import React from 'react';
import { Link } from 'react-router-dom';
import './CreateAccount.css'; 

const CreateAccount = () => {
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

      <div className="container">
        <h1>Cadastro</h1>
        <form>
          <label htmlFor="nomeCompleto">Nome completo:</label>
          <input type="text" id="nomeCompleto" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" required />

          <label htmlFor="confirmarEmail">Confirmar email:</label>
          <input type="email" id="confirmarEmail" required />

          <label htmlFor="senha">Senha:</label>
          <input type="password" id="senha" required />

          <label htmlFor="confirmarSenha">Confirmar senha:</label>
          <input type="password" id="confirmarSenha" required />

          <label htmlFor="nomeUsuario">Nome de usuário:</label>
          <input type="text" id="nomeUsuario" required />

          <label htmlFor="telefone">Número de telefone:</label>
          <input type="tel" id="telefone" />

          <nav id="texto">
            <input type="checkbox" id="termos" required />
            <Link to="/termos-de-uso">
              <label htmlFor="termos">Eu aceito os termos de uso</label>
            </Link>
          </nav>

          <Link to="/" className="cancel-button">
            Cancelar
          </Link>
          <Link to="/login" className="register-button">
            Cadastrar
          </Link>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;
