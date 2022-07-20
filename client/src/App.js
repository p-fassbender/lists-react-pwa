import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
    return (
        <Router>
            <>
                <Header />
                <Routes>
                    <Route exact path='/' element={<Home />}></Route>
                </Routes>
                <Footer/>
            </>
        </Router>
    );
}

export default App;
