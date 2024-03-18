import { Router, Route, RootRoute } from "@tanstack/react-router";
import CartPage from "./pages/Cartpage";
import CheckoutPage from "./pages/Checkoutpage";
import Home from "./pages/Home";
import ProductPage from "./pages/Productpage";
import Productspage from "./pages/Productspage";
import Root from "./App";

const rootRoute = new RootRoute({
  component: Root,
});

const HomeRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/Home",
  component: Home,
});

const cartPageRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/cart",
  component: CartPage,
});

const checkoutPageRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/checkout",
  component: CheckoutPage,
});

const productPageRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/Productpage",
  component: ProductPage,
});

const productsPageRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/Productspage",
  component: Productspage,
});

const routeTree = rootRoute.addChildren([
  cartPageRoute,
  checkoutPageRoute,
  HomeRoute,
  productPageRoute,
  productsPageRoute,
]);

export const router = new Router({ routeTree });

export default router;
