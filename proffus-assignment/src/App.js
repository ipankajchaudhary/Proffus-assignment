import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Faq from './Components/Faq/Faq';
import Havearead from './Components/Havearead/Havearead';

function App() {
  return (
    <>
      <Havearead/>
      </>
  );
}

export default App;
