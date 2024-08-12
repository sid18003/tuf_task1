import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Admin from './pages/Admin';
import Navigation from './components/Navigation';
import Flashcardlist from './components/Flashcardlist';
import Add from './components/Add';
import Delete from './components/Delete';
 


const App = () => {
  return (
   <div>
     <Router>
    <Navigation/>
      <Routes>
    <Route path='/' Component={Home} />
    <Route path='/Admin' Component={Admin} />
     <Route path="/flashcards" Component={Flashcardlist}   />
     <Route path="/add" Component={Add}></Route>
     <Route path="/delete" Component={Delete}></Route>

    </Routes>
    </Router>
    
   </div>
  );
};

export default App;
