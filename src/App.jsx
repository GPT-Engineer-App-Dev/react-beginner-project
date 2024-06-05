import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Navbar from "./components/Navbar.jsx";
import Header from "./components/Header.jsx";

function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
      </Routes>
    </Router>
  );
}

export default App;