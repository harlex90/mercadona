import {
  Route,
  BrowserRouter,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from './views/Home';
import Catalogue from "./views/Catalogue";
import About from "./views/About";
import LoginAdmin from "./views/LoginAdmin";
import { AuthProvider, RequireAuth } from 'react-auth-kit'
import AdminListCategories from './views/AdminListCategories'
import AdminCreateCategories from './views/AdminCreateCategories'
import AdminCreateProduct from "./views/AdminCreateProduct";
import AdminCreatePromos from "./views/AdminCreatePromotions";
import AdminDeleteProduct from "./views/AdminDeleteProduct";
import AdminUpdateProduct from "./views/AdminUpdateProduct";
import AdminUpdateCategory from "./views/AdminUpdateCategory";
import AdminDeleteCategory from "./views/AdminDeleteCategory";

function Router() { 
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/catalogue" element={<Catalogue />} />
      <Route path="/about" element={<About />} />
      <Route path="/loginadmin" element={<LoginAdmin />} />
      <Route path="/admin/categories" element={<RequireAuth loginPath="/loginadmin"><AdminListCategories /></RequireAuth>} />
      <Route path="/admin/categories/create" element={<RequireAuth loginPath="/loginadmin"><AdminCreateCategories /></RequireAuth>} />
      <Route path="/admin/categories/:id" element={<RequireAuth loginPath="/loginadmin"><AdminUpdateCategory /></RequireAuth>} />
      <Route path="/admin/categories/delete" element={<RequireAuth loginPath="/loginadmin"><AdminDeleteCategory /></RequireAuth>} />
      <Route path="/admin/products/:id" element={<RequireAuth loginPath="/loginadmin"><AdminUpdateProduct /></RequireAuth>} />
      <Route path="/admin/products/create" element={<RequireAuth loginPath="/loginadmin"><AdminCreateProduct /></RequireAuth>} />
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
