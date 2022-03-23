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
import HousesContext from '../contexts/housesContext';

function App() {
  
  const allHouses = useHouses();
  const featuredHouse = useFeaturedHouse(allHouses);


  return (
    <BrowserRouter>
      <HousesContext.Provider value={allHouses}>
        <div className="container">
          <Header subtitle="Providing houses all over the world !" />
          <HouseFilter/>
          <Routes>
            <Route
              path="/searchresults/:country"
              element={<SearchResults/>}
            />
            <Route
              path="/house/:id"
              element={<HouseFromQuery/>}
            />
            <Route path="/" element={<FeatureHouse house={featuredHouse} />} />
          </Routes>
        </div>
      </HousesContext.Provider>
    </BrowserRouter>
  );
}

export default App;
