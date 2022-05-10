import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Faq from './Components/Faq/Faq';
import Havearead from './Components/Havearead/Havearead';
import Topicsucantmiss from './Components/Topicsucantmiss/Topicsucantmiss';
import Footer from './Components/Footer/Footer';
import Howitworks from './Components/Howitworks/Howitworks';
import Categories from './Components/Category/Categories';

function App() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          `https://raw.githubusercontent.com/ipankajchaudhary/Proffus-assignment/main/proffus-assignment/Data.json`
        );
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        let actualData = await response.json();
        setData(actualData);
        setError(null);
      } catch(err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }  
    }
    console.log(data);
    getData();
    
  }, [loading]);
  // console.log(data);
  return (
    <>
      <Header />
      
      <Howitworks />
      <Categories/>
      <Faq data={data.faq}/>
      <Havearead />
      <Topicsucantmiss />
      <Footer/>
      </>
  );
}

export default App;
