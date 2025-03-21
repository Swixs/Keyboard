import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Race from "./pages/Race/Race";
import Training from "./pages/Training/Training";
import Levels from "./pages/Levels/Levels";
import Level from "./pages/Levels/Level";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/race" element={<Race />} />
            <Route path="/training" element={<Training />} />
            <Route path="/levels" element={<Levels />} />
            <Route path="/level/:levelId" element={<Level />} />
            <Route path="/testing" element={<Testing />} />
            <Route path="/authorization" element={<SignIn />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

function Testing() {
  return <h2>Testing Page</h2>;
}
function SignIn() {
  return <h2>signIn Page</h2>;
}

export default App;
