import logo from './logo.svg';
import './main-page.css';
import Header from './header';
import FeatureHouse from './featured-house';
import useHouses from '../hooks/useHouses';
import {BrowserRouter, Routes, Route, } from 'react-router-dom'
import SearchResults from '../search-results'
import HouseFilter from './house-filter';
import HouseFromQuery from '../house/HouseFromQuery';
import useFeaturedHouse from '../hooks/useFeaturedHouse';

function App() {
  
  const allHouses = useHouses();
  const featuredHouse = useFeaturedHouse(allHouses);


  return (
    <BrowserRouter>
      <div className="container">
        <Header subtitle="Providing houses all over the world !" />
        <HouseFilter allHouses={allHouses}/>
      <Routes>
          <Route path="/searchresults/:country" 
                element={<SearchResults allHouses={allHouses}/>}
          />
          <Route path="/house/:id" element={<HouseFromQuery allHouses={allHouses}/>}/>
          <Route path="/" element={<FeatureHouse house={featuredHouse}/>}/> 
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
