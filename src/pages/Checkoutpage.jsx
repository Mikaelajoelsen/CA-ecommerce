import { useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { useCartStore } from "../hooks/useCartStore";

const CheckoutSuccessPage = () => {
  const { clearCart } = useCartStore();

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h2 className="mb-4 text-3xl font-semibold text-green-500">
          Order Successful!
        </h2>
        <p className="mb-8 text-lg text-gray-800">
          Thank you for your purchase.
        </p>
        <Link
          to="/productspage"
          className="px-4 py-2 text-white bg-pink-400 rounded-md hover:bg-pink-200"
        >
          Back to Store
        </Link>
      </div>
    </div>
  );
};

export default CheckoutSuccessPage;
