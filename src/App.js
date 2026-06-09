
import React from 'react';
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import Nav from "./exam1/Nav";
import Main from "./exam1/Main";
import Fruit from "./exam1/Fruit";
import Variety from "./exam1/Variety";
import Event from './exam1/Event';
import Recipe from './exam1/Recipe';
import Curation from './exam1/Curation';
import Scrap from './exam1/Scrap';
import Footer from './exam1/Footer';



function App() {
    return (
        <BrowserRouter>
            <div>
                <Nav />
                <Routes>
                    <Route path="/" element={<Main />} />

                    <Route path='/Fruit' element={<Fruit />}/>
                    <Route path="/Variety" element={<Variety />} />
                    <Route path="/Event" element={<Event />} />
                    <Route path="/Curation" element={<Curation />} />
                    <Route path="/Scrap" element={<Scrap />} />
                    <Route path="/Recipe" element={<Recipe />} />

                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>

                <Footer/>
            </div>
        </BrowserRouter>
    );
}


export default App;
