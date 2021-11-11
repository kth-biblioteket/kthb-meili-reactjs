import './App.css';
import 'instantsearch.css/themes/satellite.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navBar"

import Login from './components/Login';
import Kthemployees from './components/Kthemployees';
import Ugusers from './components/Ugusers';
import useToken from './useToken';

//import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { token, setToken } = useToken();
  if (!token) {
    return <Login setToken={setToken} />
  }

  /*
    const {
      isLoading,
      isAuthenticated,
      error,
      user,
      loginWithRedirect,
      logout,
    } = useAuth0();
  
    if (isLoading) {
      return <div>Loading...</div>;
    }
    if (error) {
      return <div>Oops... {error.message}</div>;
    }
    */

  //if (isAuthenticated) {
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="kthemployees" element={<Kthemployees />} />
          <Route path="ugusers" element={<Ugusers />} />
          <Route path="about" element={<About />} />
        </Routes>
      </div>
    );
  /*  
  } else {
    return <button onClick={loginWithRedirect}>Log in</button>;
  }
  */
}

function Home() {
  return (
    <>
      <Container>
        <main>
          <NavBar />
          <h4>Hitta personer i olika index</h4>
          <p>
            Välj ett index och börja söka
          </p>
        </main>
      </Container>
    </>
  );
}

function About() {
  return (
    <>
      <Container>
        <main>
          <NavBar />
          <h2>KTHB</h2>
          <p>
            Biblioteket
          </p>
        </main>
      </Container>
    </>
  );
}

export default App;
