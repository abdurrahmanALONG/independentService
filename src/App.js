import { Route, Routes } from 'react-router-dom';
import React from 'react'
import './App.css';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import About from './Pages/About/About';
import Blogs from './Pages/Blogs/Blogs';
import Extra from './Pages/Extra/Extra';
import Home from './Pages/Home/Home';
import Login from './Pages/LogIn/Login';
import NotFound from './Pages/NotFound/NotFound';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';
import Services from './Pages/Services/Services';
import Registration from './Pages/LogIn/Registration/Registration';
import Checkout from './Pages/Checkout/Checkout';
import RequireAuth from './Pages/LogIn/RequireAuth/RequireAuth';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/Home" element={<Home></Home>}></Route>
        <Route path="/Services" element={<Services></Services>}></Route>
        <Route path="/Extra" element={<Extra></Extra>}> </Route>
        <Route path="/Checkout" element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }> </Route>
        <Route path="/Services/:ServicesId" element={<ServiceDetails></ServiceDetails>}></Route>
        <Route path="/Login" element={<Login></Login>}></Route>
        <Route path="/Registration" element={<Registration></Registration>}></Route>
        <Route path="/Blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/About" element={<About></About>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>


  );
}

export default App;
