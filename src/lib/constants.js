export const API_URL =
  import.meta.env.VITE_API_URL || "https://api.noroff.dev/api/v1/online-shop";

export const NAVIGATION = [
  { userMustBeLoggedIn: false, label: "Home", href: "/" },
  { userMustBeLoggedIn: true, label: "Cartpage", href: "/Cartpage" },
  { userMustBeLoggedIn: true, label: "Checkoutpage", href: "/Checkoutpage" },
  { userMustBeLoggedIn: true, label: "Home", href: "/Home" },
  { userMustBeLoggedIn: true, label: "Productpage", href: "/Productpage" },
];
