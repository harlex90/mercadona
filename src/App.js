import {
  Route,
  BrowserRouter,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from './views/Home';
import './App.css';
import Entete from "./views/Entete";
import Catalogue from "./views/Catalogue";
import LoginAdmin from "./views/LoginAdmin";



function Router() { 
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/catalogue" element={<Catalogue />} />
      <Route path="/loginadmin" element={<LoginAdmin />} />
    </Routes>
  </BrowserRouter>
  )
}

function App() {
  return (
    <Router/>
  );
}

export default App;
