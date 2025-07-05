import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Habits from "./pages/Habits";
import Progress from "./pages/Progress";
import Mindset from "./pages/Mindset";
import AI from "./pages/AI";

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/habits" element={<Habits />} />
      <Route path="/progress" element={<Progress />} />
      <Route path="/mindset" element={<Mindset />} />
      <Route path="/ai" element={<AI />} />
    </Routes>
  </BrowserRouter>
);

export default App;
