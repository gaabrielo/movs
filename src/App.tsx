import React from 'react';
import { loadQuery } from 'react-relay';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { RelayEnvironmentProvider } from 'react-relay';

import { Menu } from 'components/Menu';
import { Container } from 'components/Container';
import Home from './pages/Home';
import { NewMovie } from 'pages/NewMovie';
import EditMovie from 'pages/EditMovie';

import Environment from './services/Environment';

const HomeQuery = require('./pages/__generated__/HomeQuery.graphql');

function App() {
  // const homeQuery = loadQuery(
  //   Environment,
  //   HomeQuery,
  //   {},
  //   {
  //     fetchPolicy: 'network-only',
  //   }
  // );

  return (
    <RelayEnvironmentProvider environment={Environment}>
      <Router>
        <Container>
          <Menu />

          <Routes>
            <Route path="/edit/:id" element={<EditMovie />} />
            <Route path="/add" element={<NewMovie />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Container>
      </Router>
    </RelayEnvironmentProvider>
  );
}

export default App;
