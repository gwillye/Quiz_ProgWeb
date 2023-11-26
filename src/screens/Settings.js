import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Settings.css';
import { Quiz } from '../src/models/Quiz'; 
import { Usuario } from '../src/models/Usuario'; 

const Settings = () => {
  const [mostrarSenha, setMostrarSenha] = useState(false);

  // Dados fictícios do usuário (serão substituídos pelos dados do Firebase no futuro)
  const usuario = new Usuario(1, false, 'Nome do Usuário', 'usuario@email.com', 'senha123');

  // Lista fictícia de quizzes (será substituída pelo Firebase futuramente)
  const quizzes = [
    new Quiz(1, 123, ['Pergunta 1', 'Pergunta 2'], ['Alt 1', 'Alt 2'], [1, 2]),
    new Quiz(2, 123, ['Pergunta 3', 'Pergunta 4'], ['Alt 3', 'Alt 4'], [3, 4]),
  ];

  const editarInformacoes = () => {
    // Atualizar funções (adicionar configurações após implementar o Firebase)
    console.log('Informações editadas');
  };

  const excluirConta = () => {
    // Excluir sua conta (adicionar configurações após implementar o Firebase)
    console.log('Conta excluída');
  };

  return (
    <div className="settings-container">
      <Link to="/main-menu" className="voltar-button">
        Voltar
      </Link>
      <h1>Configurações</h1>

      {/* Container Perfil */}
      <div className="perfil-container">
        <h2>Perfil</h2>
        <form>
          <label htmlFor="nome">Nome:</label>
          <input type="text" id="nome" value={usuario.nome} readOnly />

          <label htmlFor="email">E-mail:</label>
          <input type="email" id="email" value={usuario.email} readOnly />

          <label htmlFor="senha">Senha:</label>
          <input
            type={mostrarSenha ? 'text' : 'password'}
            id="senha"
            value={mostrarSenha ? usuario.senha : '********'}
            readOnly
          />

          <div className="mostrar-senha-container">
            <input
              type="checkbox"
              id="mostrarSenha"
              checked={mostrarSenha}
              onChange={() => setMostrarSenha(!mostrarSenha)}
            />
            <label htmlFor="mostrarSenha">Mostrar senha</label>
          </div>

          <button type="button" onClick={editarInformacoes}>
            Editar Informações
          </button>
        </form>
      </div>

      {/* Container Meus Quizzes */}
      <div className="quizzes-container">
        <h2>Meus Quizzes</h2>
        <ul>
          {quizzes.map((quiz) => (
            <li key={quiz.id}>
              <strong>Quiz {quiz.id}</strong>
              <p>Criador: {quiz.id_criador}</p>
              <p>Perguntas: {quiz.perguntas.join(', ')}</p>
            </li>
          ))}
        </ul>
        {/* Quizzes do usuário com o Firebase */}
      </div>

      {/* Botão Excluir Conta */}
      <button className="excluir-conta-button" onClick={excluirConta}>
        Excluir Conta
      </button>
    </div>
  );
};

export default Settings;
