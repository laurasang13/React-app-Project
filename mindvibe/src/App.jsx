import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import FeelingPage from "./pages/FeelingsPage/FeelingPage";
import Navbar from "./components/Navbar/Navbar";
import MoodDetailPage from "./pages/MoodDetailPage/MoodDetailPage";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/feelings" element={<FeelingPage />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/mood/:slug" element={<MoodDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;