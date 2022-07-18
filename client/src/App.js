import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Header from './components/Header';

function App() {
    return (
        <Router>
            <>
                <Header />
                <Routes>
                    <Route exact path='/' element={<Home />}></Route>
                </Routes>
            </>
        </Router>
    );
}

export default App;
