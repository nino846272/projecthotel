import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './hotel_website/home_page';
import 'font-awesome/css/font-awesome.min.css';
import { Button, Card } from "react-bootstrap";
import Rooms from './hotel_website/rooms';
import Aboutus from './hotel_website/about_us';
import Contactus from './hotel_website/contuct_us';
import Explore from './hotel_website/explore';
import Profile from './hotel_website/profile';
import Login from './hotel_website/login';
import Reg from './hotel_website/reg';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/rooms' element={<Rooms/>}/>
          <Route path='/about' element={<Aboutus/>} />
          <Route path='/contactus' element={<Contactus/>}/>
          <Route path='/explore' element={<Explore/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/registra' element={<Reg/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
