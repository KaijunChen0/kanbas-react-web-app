import React from 'react';
import logo from './logo.svg';
// import './App.css';
import Labs from './Labs'; // import the Labs `index.tsx` file, do not need to specify the file extension; but if you need to import Labs labs.tsx , you need to specify the file extension.
import Kanbas from './Kanbas';
import HelloWorld from './Labs/a3/HelloWorld';
import { HashRouter, Link } from 'react-router-dom'; //allows for routing with map mechanism
import {Routes, Route, Navigate} from "react-router";

function App() {
    return ( // JSX, JavaScript XML,line 9 logo is a variable imported from the logo.svg file; return only one element, so wrap the h1 and Labs component in a div.
        <HashRouter>
          <div>
            <Routes>
              <Route path="/" element={<Navigate to="/Labs/a3"/>}/>
              <Route path="/Labs/*"   element={<Labs/>}/>
              <Route path="/Kanbas/*" element={<Kanbas/>}/>
              <Route path="/HelloWorld"    element={<HelloWorld/>}/>
            </Routes>
          </div>
        </HashRouter>
    );
}

export default App;
