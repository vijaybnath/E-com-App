
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Productlist from './components/Productlist';

function App() {
  return (
    <div className='App'>
  
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signUp' element={<SignUp/>} />
        <Route path='/product' element={<Productlist/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
