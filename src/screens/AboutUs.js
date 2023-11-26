import React from 'react';
import { Link } from 'react-router-dom';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div>
      <nav id="texto2">
        <img src="logo.png" alt="Logo do Site" />
        <h1 id="titulo">Sobre Nós</h1>
        <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Admin">Login de Administrador</Link>
          </li>
      </nav>

      <section id="texto">
        <p>
          Nós da BrainGym somos um grupo de desenvolvimento que criou esta plataforma para um trabalho da disciplina de Programação Web na Universidade Federal de Mato Grosso do Sul, ministrada pelo professor Ricardo Kondo. Este site foi desenvolvido pela dupla de alunos Lucas Lacerda Arruda, aluno de Ciência da Computação, e Gabriel Willye Borges Valençoela, aluno de Sistemas de Informação, ambos do quarto semestre.
        </p>

        <img src="Desenvolvedores.png" alt="Foto da dupla de desenvolvedores: Gabriel Willye e Lucas" id="desenvolvedores" />
      </section>

      <footer id="contato">
        <table>
          <tbody>
            <tr>
              <td>e-mail:</td>
              <td>NomeDaEquipe@gmail.com</td>
            </tr>
            <tr>
              <td>telefone:</td>
              <td>(67) 3000-1234</td>
            </tr>
            <tr>
              <td>endereço:</td>
              <td>Rua UFMS, Pioneiros - Campo Grande MS número 0</td>
            </tr>
            <tr>
              <td>site:</td>
              <td>https://NomeDaEquipe.com/</td>
            </tr>
          </tbody>
        </table>
      </footer>
    </div>
  );
};

export default AboutUs;
