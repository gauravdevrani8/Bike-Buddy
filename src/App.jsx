import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import BikeModels from './Pages/BikeModels/BikeModels';
import Headroom from 'react-headroom';
import Footer from './Components/Footer/Footer';
import CareerPage from './Pages/CareerPage/CareerPage';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Headroom>
        <Header />
        </Headroom>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/careerpage" element={<CareerPage />} />
        <Route path="/bikemodels" element={<BikeModels />} />
      </Routes>
      <Footer/>
      </div>

    </BrowserRouter>
  );
};

export default App;
