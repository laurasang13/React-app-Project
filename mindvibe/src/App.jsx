import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import FeelingPage from "./pages/FeelingsPage/FeelingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/feelings" element={<FeelingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;