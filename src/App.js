import {
  Route,
  BrowserRouter,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from './views/Home';
import Catalogue from "./views/Catalogue";
import LoginAdmin from "./views/LoginAdmin";
import About from "./views/About";
import { AuthProvider, RequireAuth } from 'react-auth-kit'
import AdminListCategories from './views/AdminListCategories'
import AdminCreateCategories from './views/AdminCreateCategories'
import AdminListProducts from "./views/AdminListProducts";
import AdminCreateProduct from "./views/AdminCreateProduct";
import AdminListPromotions from "./views/AdminListPromotions";
import AdminCreatePromos from "./views/AdminCreatePromotions";
import AdminDeleteProduct from "./views/AdminDeleteProduct";


function Router() { 
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/catalogue" element={<Catalogue />} />
      <Route path="/loginadmin" element={<LoginAdmin />} />
      <Route path="/admin/categories" element={<RequireAuth loginPath="/loginadmin"><AdminListCategories /></RequireAuth>} />
      <Route path="/admin/categories/create" element={<RequireAuth loginPath="/loginadmin"><AdminCreateCategories /></RequireAuth>} />
      <Route path="/admin/products" element={<RequireAuth loginPath="/loginadmin"><AdminListProducts /></RequireAuth>} />
      <Route path="/admin/products/create" element={<RequireAuth loginPath="/loginadmin"><AdminCreateProduct /></RequireAuth>} />
      <Route path="/admin/promos" element={<RequireAuth loginPath="/loginadmin"><AdminListPromotions /></RequireAuth>} />
      <Route path="/admin/promos/create" element={<RequireAuth loginPath="/loginadmin"><AdminCreatePromos /></RequireAuth>} />
      <Route path="/admin/products/delete" element={<RequireAuth loginPath="/loginadmin"><AdminDeleteProduct /></RequireAuth>} />
    </Routes>
  </BrowserRouter>
  )
}


const App = () => (
  
  <AuthProvider authType = {'localstorage'}
                authName={'_auth'}
                cookieDomain={window.location.hostname}
                cookieSecure={window.location.protocol === "https:"}
                >
      <Router />
  </AuthProvider>
);

export default App;
