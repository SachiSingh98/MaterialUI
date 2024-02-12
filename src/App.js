import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import InfoProvider from "./Context/InfoContext";
import Project1 from './PracticeProject/Project_1'
import FormValidation from './Topics/FormValidations/FormValidation'
import ContactInfo from "./PracticeProject/ContactInfo";
import About from './PracticeProject/About'
import Contact from './PracticeProject/Contact'
import Home from './PracticeProject/Home'

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
          <Route path="/FormValidation" element={<FormValidation/>} />
        </Routes>
      </BrowserRouter>
      </InfoProvider>
    </>
  );
}

export default App;
