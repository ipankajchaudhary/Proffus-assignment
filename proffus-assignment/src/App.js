import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Faq from './Components/Faq/Faq';

function App() {
  return (
    <>
      <Faq/>
      </>
  );
}

export default App;
