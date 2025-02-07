import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Contact from "./pages/Contact";
import Layout from "./components/layout/Layout";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
