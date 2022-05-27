import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Repositories from './Repositories/Index';
import Home from './Pages/Home/Index';

const myRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Home/>} />
                <Route exact path='/repositories' element={<Repositories/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default myRoutes;