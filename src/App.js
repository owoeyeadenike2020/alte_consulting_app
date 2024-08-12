import './App.css';
import AboutUs from './Component/AboutUs';
import CaseStudy from './Component/CaseStudy';
import ContactUs from './Component/ContactUs';
import Footer from './Component/Footer';
import Header from './Component/header';
import Home from './Component/Home';
import Service from './Component/Service';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
    <Header/>
   <Routes>
    <Route path="/" exact Component={Home}></Route>
    <Route path="/about-us" Component={AboutUs}></Route>
    <Route path="/Our-Services" Component={Service}></Route>
    <Route path="/Contact-us" Component={ContactUs}></Route>
    <Route path="/case-study" Component={CaseStudy}></Route>

   </Routes>
    <Footer/>
    </Router>
    
    </>
    
  );
}

export default App;
