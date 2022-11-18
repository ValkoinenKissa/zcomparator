import logo from './logo.svg';
import './App.css';
import Header from "./components/header";
import Footer from "./components/footer";

import Home from "./containers/home/home";


import Contact from "./containers/contact/contact";

import {
    Route,
    Routes,
    Switch
} from "react-router-dom"

function App() {
  return (
    <>
    <Header/>
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
    </Routes>
    <Footer/>
    </>

  );
}
export default App;
