import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Create, Home, Library, Search, LikePage, Login, Single } from '../pages/Index';

function GloIndex() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/search' element={<Search />} />
      <Route path='/library' element={<Library />} />
      <Route path='/create' element={<Create />} />
      <Route path='/like' element={<LikePage />} />
      <Route path='/login' element={<Login />} />
      <Route path='/single' element={<Single />} />
      <Route path='/single/:artistId' element={<Single />} />
    </Routes>
  );
}

export default GloIndex;