import React from "react";
import GridIndex from "./Projects/GridIndex";

import { Route, BrowserRouter, Routes } from "react-router-dom";
// import InfoProvider from "./Context/InfoContext";
// import Project1 from './PracticeProject/Project_1'
// import FormValidation from './Topics/FormValidations/FormValidation'
// import ContactInfo from "./PracticeProject/ContactInfo";
// import About from './PracticeProject/About'
// import Contact from './PracticeProject/Contact'
// import Home from './PracticeProject/Home'


// Grid Project
import ItemDetail from "./Projects/ItemDetail";

function App() {
  return (
    <>
    {/* <InfoProvider>
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
      </InfoProvider> */}




      {/* ----------------------------------------- Data grid project */}
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<GridIndex/>} />
        <Route path="/:id" element={<ItemDetail/>} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
