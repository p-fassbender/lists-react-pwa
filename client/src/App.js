import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import NavBar from './components/NavBar';

function App() {
    return (
        <Router>
            <>
                <NavBar />
                <Routes>
                    <Route exact path='/' element={<Home />}></Route>
                </Routes>
            </>
        </Router>
    );
}

export default App;
