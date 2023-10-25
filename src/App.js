import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/template/Navbar';
import ProgrammingNews from './components/ProgrammingNews';
import CovidNews from './components/CovidNews';
import News from './components/News';
import Saved from './components/Saved'; // Perhatikan penggunaan import yang sudah diperbaiki
import { Provider } from 'react-redux';
import store from './redux/store'; // Ganti path menjadi ./redux/store

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
    </>
  );
}

export default App;
