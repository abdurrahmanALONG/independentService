import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import About from './Pages/About/About';
import Blogs from './Pages/Blogs/Blogs';
import Extra from './Pages/Extra/Extra';
import Home from './Pages/Home/Home';
import Login from './Pages/LogIn/Login';
import NotFound from './Pages/NotFound/NotFound';
import Registration from './Pages/Registration/Registration';
import ServiceDitails from './Pages/ServiceDitails/ServiceDitails';
import Services from './Pages/Services/Services';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/Home" element={<Home></Home>}></Route>
        <Route path="/Services" element={<Services></Services>}></Route>
        <Route path="/Services/:ServicesId" element={<ServiceDitails></ServiceDitails>}></Route>
        <Route path="/Login" element={<Login></Login>}></Route>
        <Route path="/Blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/About" element={<About></About>}></Route>
        <Route path="/Extra" element={<Extra></Extra>}> </Route>
        <Route path="/Registration" element={<Registration></Registration>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>


  );
}

export default App;
