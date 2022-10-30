import logo from './logo.svg';
import data from "./data.json"
import './App.css';
import Navbar from './components/navbar/Navbar';
import Searchbar from './components/searchbar/Searchbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='content--container'>
        <Searchbar />
      </div>
    </div>
  );
}

export default App;
