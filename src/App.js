
import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Nav from "./exam1/Nav";
import Main from "./exam1/Main";
import Spring from "./exam1/Spring";
import Summer from "./exam1/Summer";
import Autumn from "./exam1/Autumn";
import Winter from "./exam1/Winter";
import Random from './exam1/Random';
import FruitTip from './exam1/FruitTip';
import Footer from './exam1/Footer';


function App() {
    return (
        <BrowserRouter>
            <div>
                <Nav />
                
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/spring" element={<Spring />} />
                    <Route path="/summer" element={<Summer />} />
                    <Route path="/autumn" element={<Autumn />} />
                    <Route path="/winter" element={<Winter />} />
                    <Route path="/random" element={<Random />} />
                    <Route path="/FruitTip" element={<FruitTip />} />
                </Routes>

                <Footer/>
            </div>
        </BrowserRouter>
    );
}


export default App;
