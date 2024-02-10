import React from "react";
import Project1 from "./PracticeProject/Project_1";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from './PracticeProject/Home'
import Contact from './PracticeProject/Contact'
import About from './PracticeProject/About'
import InfoProvider from "./Context/InfoContext";
import ContactInfo from "./PracticeProject/ContactInfo";

function App() {
  return (
    <>
    <InfoProvider>
      <BrowserRouter>
        <Project1 />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactinfo" element={<ContactInfo/>} />
        </Routes>
      </BrowserRouter>
      </InfoProvider>
    </>
  );
}

export default App;
