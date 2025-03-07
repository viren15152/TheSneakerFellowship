import { Routes, Route } from "react-router-dom"; 
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Nike from "./pages/Nike";
import Yeezy from "./pages/Yeezy"; 
import NavigationBar from "./components/Navbar";
import Footer from "./components/Footer";  
import Analytics from "./Analytics"; // Import Analytics
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Analytics /> {/* Tracks page views */}
      <NavigationBar />
      <main>
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/search/:query" element={<SearchResults />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/nike" element={<Nike />} />
          <Route path="/yeezy" element={<Yeezy />} />
          <Route path="*" element={<h2 className="text-center text-white">404 - Page Not Found</h2>} />
        </Routes>
      </main>
      <Footer />  
    </>
  );
}

export default App;








