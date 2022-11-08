import React, {useState} from 'react'
import {useSelector } from 'react-redux'
import './App.css';
import Navbar from './components/navbar/Navbar';
import MainPage from "./pages/MainPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ListPage from "./pages/ListPage";
import Searchbar from "./components/searchbar/Searchbar";
import FavouritesPage from './pages/FavouritesPage';
function App() {
  const [search, setSearch] = useState("")
  const [searchKeyWord, setSearchKeyWord] = useState('Search for movies or TV series')
  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value)
  }
  const allData = useSelector((state) => state.favourites.allData)
  const newData = allData.filter((item) => item.title.toLowerCase().includes(search.toLowerCase()))
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="content--container">
          <Searchbar search={search} handleSearch={handleSearch} searchkeyword={searchKeyWord}/>
          <Routes>
            <Route path="/" element={<MainPage data={newData} setSearchKeyWord={setSearchKeyWord}/>}/>
            <Route path="/movies" element={<ListPage data={newData.filter((item) => item.category === "Movie")} header="Movies"  setSearchKeyWord={setSearchKeyWord}/>}/>
            <Route path="/tv-series" element={<ListPage data={newData.filter((item) => item.category === "TV Series")} header="Tv Series"  setSearchKeyWord={setSearchKeyWord}/>}/>
            <Route path='/favourites' element={<FavouritesPage setSearchKeyWord={setSearchKeyWord}/>} />
          </Routes>
        </div>

      </Router>
    </div>
  );
}

export default App;
