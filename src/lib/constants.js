export const API_URL =
  import.meta.env.VITE_API_URL || "https://api.noroff.dev/api/v1/online-shop";

export const NAVIGATION = [
  { userMustBeLoggedIn: true, label: "Home", href: "/" },
  { userMustBeLoggedIn: false, label: "cartpage", href: "/Cartpage" },
  { userMustBeLoggedIn: false, label: "checkoutpage", href: "/Checkoutpage" },
  { userMustBeLoggedIn: false, label: "productpage", href: "/Productpage" },
];
