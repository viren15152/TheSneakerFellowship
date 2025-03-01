import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Yeezy from "./pages/Yeezy"; // ✅ Import Yeezy Page
import NavigationBar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/:query" element={<SearchResults />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/yeezy" element={<Yeezy />} /> {/* ✅ Added Yeezy Page */}
        <Route path="*" element={<h2 className="text-center text-white">404 - Page Not Found</h2>} />
      </Routes>
    </>
  );
}

export default App;




