import {Routes,Route} from 'react-router-dom';
import LoginPage from './component/loginPage';
import CreateAccount from './component/CreateAccount';
import About from './component/About';
import './App.css';
import React from 'react'


const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<LoginPage />}/>
        <Route path='/CreateAccount' element={<CreateAccount/>}/>
        <Route path='/About' element={<About/>}/>

      </Routes>
    </>
  );
}

export default App;
