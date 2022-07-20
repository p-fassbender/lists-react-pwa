import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import MyLists from './pages/MyLists';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
    return (
        <Router>
            <div className='container'>
                <Header />
                <Routes>
                    <Route exact path='/' element={<Home />}></Route>
                    <Route path='/my-lists' element={<MyLists />}></Route>
                </Routes>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
