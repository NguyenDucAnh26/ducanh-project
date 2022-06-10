import { Routes, Route } from "react-router-dom";
import "antd/dist/antd.css";
import "./reset.css";
import "./fonts.css";
import HomePage from "./pages/HomePage";
import ProductListPage from "./pages/ProductListPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import UserLayout from "./layouts/UserLayout";
import { ROUTES } from "./constants/routes";
function App() {
  return (
    <Routes>
      <Route element={<UserLayout />}>
        <Route element={<HomePage />} path={ROUTES.USER.HOME} />
        <Route element={<ProductListPage />} path={ROUTES.USER.PRODUCT_LIST} />
        <Route
          element={<ProductDetailPage />}
          path={ROUTES.USER.PRODUCT_DETAIL}
        />
      </Route>
    </Routes>
  );
}

export default App;
