import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import MyLove from "./components/MyLove";
import Scrolling from "./components/Scrolling";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Scrolling />} />
          <Route path="/PEMA" element={<MyLove />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
