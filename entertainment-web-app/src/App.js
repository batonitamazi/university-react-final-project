import React, {useState} from 'react'
import data from "./data.json"
import './App.css';
import Navbar from './components/navbar/Navbar';
import MainPage from "./pages/MainPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ListPage from "./pages/ListPage";
import Searchbar from "./components/searchbar/Searchbar";
import FavouritesPage from './pages/FavouritesPage';
function App() {
  const [search, setSearch] = useState("")
  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value)
  }
  const newData = data.filter((item) => item.title.toLowerCase().includes(search.toLowerCase()))
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="content--container">
          <Searchbar search={search} handleSearch={handleSearch}/>
          <Routes>
            <Route path="/" element={<MainPage data={newData} />} />
            <Route path="/movies" element={<ListPage data={newData.filter((item) => item.category === "Movie")} header="Movies" />} />
            <Route path="/tv-series" element={<ListPage data={newData.filter((item) => item.category === "TV Series")} header="Tv Series" />} />
            <Route path='/favourites' element={<FavouritesPage />} />
          </Routes>
        </div>

      </Router>
    </div>
  );
}

export default App;
