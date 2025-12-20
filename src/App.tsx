import Layout from "@components/Layout/Layout";
import About from "@pages/About/About";
import Home from "@pages/Home/Home";
import MusicLibrary from "@pages/MusicLibrary/MusicLibrary";
import NotFound from "@pages/NotFound/NotFound";
import React from "react";
import { Route, Routes } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/library" element={<MusicLibrary />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
};

export default App;
