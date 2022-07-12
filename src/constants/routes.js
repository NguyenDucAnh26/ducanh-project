export const ROUTES = {
  LOGIN: "/login",
  REGISTER: "/register",
  USER: {
    HOME: "/",
    ABOUT: "/about",
    SIZES: "/sizes",
    ACCOUNT_INFO: "/account/info",
    ACCOUNT_ORDERS: "/account/orders",
    COLLECTION: "/collection",
    COLLECTION_CATEGORY: "/collection/:category",
    PRODUCT_DETAIL: "/products/:id",
    CART: "/cart",
    MY_PROFILE: "/my-profile",
  },
  ADMIN: {
    DASHBOARD: "/admin",
    PRODUCTS: "/admin/products",
    USER_LIST: "/admin/users",
    ORDER_LIST: "/admin/orders",
    ORDER_DETAIL: "/admin/orders/:id",
    PRODUCT_ADD: "/admin/addproduct",
    PRODUCT_DETAIL: "/admin/products/:id",
    PRODUCT_UPDATE: "/admin/products/:id/update",
  },
  NOT_FOUND: "/404",
};
