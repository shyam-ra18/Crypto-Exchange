import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import CoinDetails from './components/CoinDetails';
import Coins from './components/Coins';
import Exchanges from './components/Exchanges';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';


function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route exat path='/' element={<Home/>}/>
        <Route exat path='/exchanges' element={<Exchanges/>}/>
        <Route exat path='/coins' element={<Coins/>}/>
        <Route exat path='/coin/:id' element={<CoinDetails/ >}/>
      </Routes>
      <Footer/>
    </Router>

  );
}

export default App;
