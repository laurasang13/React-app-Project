import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import FeelingPage from "./pages/FeelingsPage/FeelingPage";
import Navbar from "./components/Navbar/Navbar";
//import logo from "../public//icons/logo.png";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/feelings" element={<FeelingPage />} />
        <Route path="/HomePage" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;