import React from 'react';
import { Outlet, Route, Routes} from "react-router-dom"
import Header from './common/header/Header';
import Footer from './common/footer/Footer';
import HomePage from './pages/home/HomePage';
import SignUp from './pages/signup/SignUp';

function App() {
  return (
    
    <div>
      <Header />
      <Routes>
        <Route path="/*" element={<HomePage />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
