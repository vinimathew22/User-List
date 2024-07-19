import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Search from './components/Search';
import Display from './components/Display';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/search" element={<Search/>}/>
      <Route path="/display" element={<Display/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
