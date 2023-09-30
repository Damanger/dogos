import './assets/css/base/base.css';
import './assets/css/componentes/card.css'
import Header from './components/Header';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Post from './pages/Post';
import Categoria from './pages/Categoria';
import NotFound from './pages/NotFound';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/sobre' element={<Sobre/>}/>
        <Route path='/posts/:id' element={<Post/>}/>
        <Route path='/categoria/:id' element={<Categoria/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </Router>
  );
}

export default App;
