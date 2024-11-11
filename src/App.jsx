import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./compo/pages/Login";
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from "./compo/pages/Dashboard";
import Navigation from "./compo/comman/Navigation";
function App() {
  return (
    <div>
      <div>
        <Navigation/>
      </div>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </div>
  );
}

export default App;
