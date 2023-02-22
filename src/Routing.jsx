import react from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import Song from './pages/Song'

const Routing = () => {
    return ( 
        <BrowserRouter>
        <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="/song/:id" exact element={<Song/>} />            
        </Routes>
        </BrowserRouter> 
    )
}

export default Routing