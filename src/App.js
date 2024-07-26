import logo from './logo.svg';
import './App.css';
import Signup from './components/Signup';
import { Login } from './components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Add from './components/Add';
import Viewall from './components/Viewall';
import Viewmypost from './components/Viewmypost';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/create' element={<Add/>}/>
      <Route path='/viewall' element={<Viewall/>}/>
      <Route path='/mypost' element={<Viewmypost/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
