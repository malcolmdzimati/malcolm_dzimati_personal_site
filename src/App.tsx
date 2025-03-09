import { Routes, Route } from "react-router-dom";
import Navbar from './components/ui/navbar';
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="malcolm_dzimati_personal_site/" element={<Home />} />
        <Route path="malcolm_dzimati_personal_site/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;