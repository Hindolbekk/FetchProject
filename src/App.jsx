
import { useState } from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Users from './pages/Users/Users';
import Posts from './pages/Posts/Posts';
import Comments from './pages/Comments/Comments';


function App() {
  return (
    <div className="App">
      <Routes>
       <Route path='/' element={<Users/>}></Route>
       <Route path='/posts/:slug' element={<Posts/>}></Route>
       <Route path='/comments/:slug' element={<Comments/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
