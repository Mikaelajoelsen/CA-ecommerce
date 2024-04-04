import {
  createRouter,
  createRoute,
  createRootRoute,
} from "@tanstack/react-router";
import HomePage from "./pages/Home";
import CheckoutPage from "./pages/Checkoutpage";
import Productpage from "./pages/Productpage";
import Productspage from "./pages/Productspage";
import Profilepage from "./pages/Profile";
import Root from "./App";

const rootRoute = createRootRoute({
  component: Root,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const checkoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/checkoutpage",
  component: CheckoutPage,
});

const productRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/product/$productId",
  component: Productpage,
});

const productsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/productspage",
  component: Productspage,
});

const profileRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/profile",
  component: Profilepage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  checkoutRoute,
  productRoute,
  productsRoute,
  profileRoute,
]);

export const router = createRouter({ routeTree });

export default router;
