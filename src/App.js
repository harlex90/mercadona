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
import { AuthProvider, RequireAuth } from 'react-auth-kit'



function Router() { 
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/catalogue" element={<Catalogue />} />
      <Route path="/loginadmin" element={<LoginAdmin />} />
      <Route path="/protected" element={<RequireAuth loginPath="/loginadmin"><p>coucou</p></RequireAuth>} />
    </Routes>
  </BrowserRouter>
  )
}


const App = () => (
  <AuthProvider authType = {'cookie'}
                authName={'_auth'}
                cookieDomain={window.location.hostname}
                cookieSecure={window.location.protocol === "https:"}>
      <Router />
  </AuthProvider>
);

export default App;
