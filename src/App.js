
import './App.css';
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import LoginPage from './Components/LoginPage';
import Register from './Components/Register';
import Dashboard from './Components/Dashboard';


function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route>
        <Route path="/"element={<HomePage />}/>
        <Route path="/LoginPage" element={<LoginPage/>}/>
        <Route path="/Register" element={<Register/>}/>
        <Route path="/Dashboard" element={<Dashboard/>}/>
      </Route>   
    </Routes>
    </BrowserRouter>
  );
}

export default App;
