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

/*
function Kthemployees() {
  const searchClient = instantMeiliSearch(
    "https://ref.lib.kth.se/meili",
    JSON.parse(sessionStorage.getItem('meili')).apikeys.meili,
    {
      paginationTotalHits: 100,
      primaryKey: 'id',
    }
  );
  return (
    <>
      <Container>
        <main>
          <NavBar />
          <div className="header"><h4>KTH Anställda(historik)</h4></div>
          <div className="ais-InstantSearch">
            <InstantSearch indexName="kthanst" searchClient={searchClient}>
              <div className="left-panel">
                <ClearRefinements />
                <h2>Organisationsnamn</h2>
                <RefinementList
                  attribute="Orgnamn"
                  limit={10}
                  showMore />

                <h2>Skola/avd</h2>
                <RefinementList
                  attribute="Bef_ben"
                  limit={10}
                  showMore />

                <h2>Efternamn</h2>
                <RefinementList
                  attribute="Enamn"
                  limit={10}
                  showMore />
                <Configure hitsPerPage={10} />
              </div>
              <div className="right-panel">
                <SearchBox />
                <Hits hitComponent={Hit} />
                <Pagination />
              </div>
            </InstantSearch>
          </div>
        </main>
      </Container>
    </>
  );
  function Hit(props) {
    return (
      <div>
        <div className="hit-Fnamn field">
          <div>Förnamn:</div>
          <div>{props.hit.Fnamn}</div>
        </div>
        <div className="hit-Enamn field">
          <div>Efternamn:</div>
          <div><Highlight attribute="Enamn" hit={props.hit} /></div>
        </div>
        <div className="hit-KTH_id field">
          <div>KTH-id:</div>
          <div>{props.hit.KTH_id}</div>
        </div>
        <div className="hit-Orgnamn field">
          <div>Organisation:</div>
          <div>{props.hit.Orgnamn}</div>
        </div>
        <div className="hit-Bef_ben field">
          <div>Skola/avd:</div>
          <div>{props.hit.Bef_ben}</div>
        </div>
        <div className="hit-ORCIDid field">
          <div>ORCID:</div>
          <div>{props.hit.ORCIDid}</div>
        </div>
        <div className="hit-Anst_nuv_bef field">
          <div>Befattning nuvarande:</div>
          <div>{props.hit.Anst_nuv_bef}</div>
        </div>
        <div className="hit-Bef_t_o_m field">
          <div>Befattning t.o.m:</div>
          <div>{props.hit.Bef_t_o_m}</div>
        </div>
        <div className="hit-Fil_datum field">
          <div>Uppdaterad:</div>
          <div>{props.hit.Fil_datum}</div>
        </div>

      </div>
    );
  }
}

function Ugusers() {
  const searchClient = instantMeiliSearch(
    "https://ref.lib.kth.se/meili",
    JSON.parse(sessionStorage.getItem('meili')).apikeys.meili,
    {
      paginationTotalHits: 100,
      primaryKey: 'sAMAccountName',
    }
  );
  return (
    <>
      <Container>
        <main>
          <NavBar />
          <div className="header"><h4>KTH Användare(UG)</h4></div>
          <div className="ais-InstantSearch">
            <InstantSearch indexName="ugusers" searchClient={searchClient}>
              <div className="left-panel">
                <ClearRefinements />
                <h2>Title</h2>
                <RefinementList
                  attribute="title"
                  limit={10}
                  showMore />

                <h2>Efternamn</h2>
                <RefinementList
                  attribute="sn"
                  limit={10}
                  showMore />

                <h2>Grupp</h2>
                <RefinementList
                  attribute="kthPAGroupMembership"
                  limit={10}
                  showMore />

                <h2>Primary affiliation</h2>
                <RefinementList
                  attribute="ugPrimaryAffiliation"
                  limit={10}
                  showMore />

              </div>
              <div className="right-panel">
                <SearchBox />
                <InfiniteHits hitComponent={Hit} />

              </div>
              <Configure hitsPerPage={10} />
            </InstantSearch>
          </div>
        </main>
      </Container>
    </>
  );
  function Hit(props) {
    let ugaff = ""
    if (typeof props.hit.ugAffiliation != "undefined") {
      if (props.hit.ugAffiliation.length > 0) {
        for (let index = 0; index < props.hit.ugAffiliation.length; index++) {
          if (index === 0) {
            ugaff += props.hit.ugAffiliation[index];
          } else {
            ugaff += ', ' + props.hit.ugAffiliation[index];
          }
        }
      }

    }
    return (
      <div>
        <div className="hit-givenName field">
          <div>Förnamn:</div>
          <div>{props.hit.givenName}</div>
        </div>
        <div className="hit-sn field">
          <div>Efternamn:</div>
          <div><Highlight attribute="sn" hit={props.hit} /></div>
        </div>
        <div className="hit-displayName field">
          <div>Display namn:</div>
          <div>{props.hit.displayName}</div>
        </div>
        <div className="hit-ugKthid field">
          <div>KTH-id:</div>
          <div>{props.hit.ugKthid}</div>
        </div>
        <div className="hit-title field">
          <div>Titel:</div>
          <div>{props.hit.title}</div>
        </div>
        <div className="hit-ugPrimaryAffiliation field">
          <div>Primär affiliering:</div>
          <div>{props.hit.ugPrimaryAffiliation}</div>
        </div>
        <div className="hit-ugAffiliation field">
          <div>Affilieringar:</div>
          <div className="ugAffiliation">{ugaff}</div>
        </div>
        <div className="hit-mail field">
          <div>Mail:</div>
          <div>{props.hit.mail}</div>
        </div>
        <div className="hit-kthPAGroupMembership field">
          <div>Grupp:</div>
          <div>{props.hit.kthPAGroupMembership}</div>
        </div>
      </div>
    );
  }
}
*/

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
