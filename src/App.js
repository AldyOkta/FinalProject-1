import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/template/Navbar";
import Footer from "./components/template/footer";
import ProgrammingNews from "./components/ProgrammingNews";
import CovidNews from "./components/CovidNews";
import News from "./components/News";
import Saved from "./components/Saved";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <Routes>
          <Route path="/" element={<News />} />
          <Route path="saved" element={<Saved />} />
          <Route path="programming" element={<ProgrammingNews />} />
          <Route path="covid" element={<CovidNews />} />
        </Routes>
      </Provider>
      <Footer />
    </>
  );
}

export default App;
