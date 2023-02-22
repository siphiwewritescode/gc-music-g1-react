import react from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import Song from './pages/Song'
import NotFound from './pages/NotFound'

const Routing = () => {
    return ( 
        <BrowserRouter>
        <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="/song/:id" exact element={<Song/>} />  
 
            <Route path='*' exact element={<NotFound />}/>
            {/* Removes all the pages */}
            {/* <Route path='/song/:id*' exact element={<NotFound />}/> */}
        </Routes>
        </BrowserRouter> 
    )
}

export default Routing