import data from "./data.json"
import './App.css';
import Navbar from './components/navbar/Navbar';
import MainPage from "./pages/MainPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ListPage from "./pages/ListPage";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={ <MainPage data={data}/>} />
          <Route path="/movies" element={<ListPage />} />
          <Route path="/tv-series" element={<ListPage /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
