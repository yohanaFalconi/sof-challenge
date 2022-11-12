import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './Screens/Home';
import AScreen from "./Screens/AScreen";
import BScreen from "./Screens/BScreen";
import CScreen from "./Screens/CScreen";
import DScreen from "./Screens/DScreen";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} ></Route>
          <Route path="/a-screen" element={<AScreen />} />
          <Route path="/b-screen" element={<BScreen />} />
          <Route path="/c-screen" element={<CScreen />} />
          <Route path="/d-screen" element={<DScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


