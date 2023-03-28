import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './layouts/Layout';
import Weather from './pages/Weather';
import Restaurant from './pages/Restaurant';
import RestaurantDetails from './pages/RestaurantDetails';
import RestaurantSearchResult from './pages/RestaurantSearchResult';
import Search from './pages/Search';
import Login from './pages/Login';
import React, {useState} from 'react';




/* 각자 페이지에 맞춰서 export 및 이름 변경 + import */
function App() {
  const [isDark, setIsDark] = useState(false)   //eslint-disable-line no-unused-vars

  return (
    <div style={{background: isDark? 'black': 'white', color: isDark? 'white': 'black'}}>
    <button onClick ={() => setIsDark(!isDark)}>{isDark? 'Light Mode 🌞': 'Dark Mode 🌛'}</button>


   <BrowserRouter>
    <Routes>
          <Route path="/" element={<Layout/>}>
          <Route index element={<Login/>}/>
          <Route path="search" element={<Search/>}/>
          <Route path="weather" element={<Weather/>}/>
          <Route path="restaurant">
            <Route index element={<Restaurant/>}/>
            <Route path=":id" element={<RestaurantDetails/>}/>
            <Route path="search" element={<RestaurantSearchResult/>}/>
          </Route>
        </Route>
    </Routes>
   </BrowserRouter>
   </div>
  );
}

export default App;
