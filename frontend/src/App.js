import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import FarmersScreen from './screens/FarmersScreen';
import FarmersByProductScreen from './screens/FarmersByProductScreen';
import ProductsByFarmerScreen from './screens/ProductsByFarmerScreen';
import FarmerProductScreen from './screens/FarmerProductScreen';

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/' element={<HomeScreen />} excat />
            <Route path='/products' element={<HomeScreen />} excat />
            <Route path='/farmers' element={<FarmersScreen />} excat />

            <Route
              path='/product/:id/farmers'
              element={<FarmersByProductScreen />}
            />
            <Route
              path='/farmer/:id/products'
              element={<ProductsByFarmerScreen />}
            />
            <Route
              path='/farmer-product/:id'
              element={<FarmerProductScreen />}
            />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
