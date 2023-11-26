// src/components/Ranking.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Ranking.css'; // Certifique-se de ter o arquivo CSS correspondente

const Ranking = () => {
  // Dados estáticos (serão substituídos pelos dados do Firebase no futuro)
  const dadosRanking = [
    { posicao: 1, apelido: 'Jogador1', pontosTotal: 1000, partidas: 50, pontuacao: 2000 },
    { posicao: 2, apelido: 'Jogador2', pontosTotal: 900, partidas: 45, pontuacao: 1900 },
    { posicao: 3, apelido: 'Jogador3', pontosTotal: 800, partidas: 40, pontuacao: 1800 },
    // Adicionar mais dados futuramente...
  ];

  return (
    <div>
      <h1>Ranking Geral</h1>
      <Link to="/main-menu" id="come_back">
        Voltar
      </Link>
      <div id="search">
        <input type="text" id="text" placeholder="Pesquise um jogador" />
      </div>
      <table>
        <thead>
          <tr>
            <th>Posição</th>
            <th>Apelido</th>
            <th>Total de Pontos</th>
            <th>Quantidade de Partidas</th>
            <th>Pontuação</th>
          </tr>
        </thead>
        <tbody>
          {dadosRanking.map((jogador) => (
            <tr key={jogador.posicao}>
              <td>{jogador.posicao}º</td>
              <td>{jogador.apelido}</td>
              <td>{jogador.pontosTotal}</td>
              <td>{jogador.partidas}</td>
              <td>{jogador.pontuacao}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Ranking;
