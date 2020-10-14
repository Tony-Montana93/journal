import React from 'react';
import './App.css';
import Nav from './Nav';
import SignUp from './SignUp';
import User from './User';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import {MarkGithubIcon} from '@primer/octicons-react'
import {NoteIcon} from '@primer/octicons-react'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/signup' component={SignUp} />
        <Route path='/user' component={User} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <Container>
      <Jumbotron>
    <h1>My Journal</h1>
    <p>"Be ready when inspiraton comes"</p>
    <li>
      <Link to='/signup'>
      <Button variant='primary'><NoteIcon size={16} />Sign Up</Button>
      </Link>
        </li>
      </Jumbotron>
      <h1>Project by Antonio Silva</h1>
        <p>Find this code being hosted on GitHub, Follow this link to see <a href='https://github.com/Tony-Montana93/journal'>
      <MarkGithubIcon size='small'/>GitHub
    </a></p>
      </Container>
  </div>
);

export default App;
