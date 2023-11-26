// AppRoutes.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../screens/Home';
import AboutUs from '../screens/AboutUs';
import CreateAccount from '../screens/CreateAccount';
import CreateQuiz from '../screens/CreateQuiz';
import Login from '../screens/Login';
import MainMenu from '../screens/MainMenu';
import PlayingQuiz from '../screens/PlayingQuiz';
import QuizDetails from '../screens/QuizDetails';
import QuizResult from '../screens/QuizResult';
import Ranking from '../screens/Ranking';
import SearchQuiz from '../screens/SearchQuiz';
import Settings from '../screens/Settings';
import Admin from '../screens/Admin';

const AppRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/about" component={AboutUs} />
        <Route path="/create-account" component={CreateAccount} />
        <Route path="/create-quiz" component={CreateQuiz} />
        <Route path="/login" component={Login} />
        <Route path="/main-menu" component={MainMenu} />
        <Route path="/playing-quiz" component={PlayingQuiz} />
        <Route path="/quiz-details" component={QuizDetails} />
        <Route path="/quiz-result" component={QuizResult} />
        <Route path="/ranking" component={Ranking} />
        <Route path="/search-quiz" component={SearchQuiz} />
        <Route path="/settings" component={Settings} />
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
};

export default AppRoutes;

