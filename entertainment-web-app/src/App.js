import data from "./data.json"
import './App.css';
import Navbar from './components/navbar/Navbar';
import Searchbar from './components/searchbar/Searchbar';
import TrendingContainer from './components/trendingvideos/TrendingContainer';
import RecomendedList from './components/recomended/RecomendedList';

function App() {
  console.log(data)
  return (
    <div className="App">
      <Navbar />
      <div className='content--container'>
        <Searchbar />
        <TrendingContainer movies={data.filter((item) => item.isTrending === true)}/>
        <RecomendedList movies={data.filter((item) => item.isTrending !== true)}/>
      </div>
    </div>
  );
}

export default App;
