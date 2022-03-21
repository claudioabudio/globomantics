import logo from './logo.svg';
import './main-page.css';
import Header from './header';
import FeatureHouse from './featured-house';
import { useEffect, useState, useMemo } from 'react';
import {BrowserRouter, Routes, Route, } from 'react-router-dom'

function App() {
  const [allHouses, setAllHouses] = useState([])

  useEffect(() => {
      const fetchHouses = async () => {
        const response = await fetch("/houses.json")
        const houses = await response.json()
        setAllHouses(houses)
      }
      fetchHouses()
  }, [])

  const featuredHouse = useMemo(() => {
    if (allHouses.length) {
      let randomIndex = Math.floor(Math.random() * allHouses.length)
      return allHouses[randomIndex]
    }
  },
  [allHouses])

  return (
    <BrowserRouter>
      <div className="container">
        <Header subtitle="Providing houses all over the world !" />
      </div>
      <Routes>
          <Route path="/" element={<FeatureHouse house={featuredHouse}/>}/> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
