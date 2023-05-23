import {
  Route,
  BrowserRouter,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from './views/Home';
import './App.css';
import Catalogue from "./views/Catalogue";
import LoginAdmin from "./views/LoginAdmin";
import { AuthProvider, RequireAuth } from 'react-auth-kit'
import AdminListCategories from './views/AdminListCategories'
import AdminCreateCategories from './views/AdminCreateCategories'
import AdminListProducts from "./views/AdminListProducts";
import AdminCreateProduct from "./views/AdminCreateProduct";


function Router() { 
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/catalogue" element={<Catalogue />} />
      <Route path="/loginadmin" element={<LoginAdmin />} />
      <Route path="/protected" element={<RequireAuth loginPath="/loginadmin"><p>coucou</p></RequireAuth>} />
      <Route path="/admin/categories" element={<RequireAuth loginPath="/loginadmin"><AdminListCategories /></RequireAuth>} />
      <Route path="/admin/categories/create" element={<RequireAuth loginPath="/loginadmin"><AdminCreateCategories /></RequireAuth>} />
      <Route path="/admin/products" element={<RequireAuth loginPath="/loginadmin"><AdminListProducts /></RequireAuth>} />
      <Route path="/admin/products/create" element={<RequireAuth loginPath="/loginadmin"><AdminCreateProduct /></RequireAuth>} />
    </Routes>
  </BrowserRouter>
  )
}


const App = () => (
  <AuthProvider authType = {'localstorage'}
                authName={'_auth'}
                cookieDomain={window.location.hostname}
                cookieSecure={window.location.protocol === "https:"}>
      <Router />
  </AuthProvider>
);

export default App;
