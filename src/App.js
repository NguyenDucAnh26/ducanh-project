import { Routes, Route } from "react-router-dom";
import "antd/dist/antd.css";
import "./reset.css";
import "./fonts.css";
import HomePage from "./pages/HomePage";
import CollectionPage from "./pages/CollectionPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import UserLayout from "./layouts/UserLayout";
import { ROUTES } from "./constants/routes";
function App() {
  return (
    <Routes>
      <Route element={<UserLayout />}>
        <Route element={<HomePage />} path={ROUTES.USER.HOME} />
        <Route element={<CollectionPage />} path={ROUTES.USER.COLLECTION} />
        <Route
          element={<ProductDetailPage />}
          path={ROUTES.USER.PRODUCT_DETAIL}
        />
      </Route>
    </Routes>
  );
}

export default App;
