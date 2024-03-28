import { useEffect, useState } from "react";

const initialProductState = {
  title: "No product found",
  description: "No description available",
  price: 0,
  discountedPrice: 0,
  rating: 0,
  tags: [],
};

const Productpage = () => {
  const [product, setProduct] = useState(initialProductState);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const pathSegments = window.location.pathname.split("/");
        const productId = pathSegments[pathSegments.length - 1];
        const response = await fetch(
          `https://api.noroff.dev/api/v1/online-shop/${productId}`
        );

        if (response.ok) {
          const data = await response.json();
          setProduct(data);
        } else {
          console.error(`Failed to fetch product. Status: ${response.status}`);
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto mt-24">
      <h1 className="mb-4 text-2xl font-bold">{product.title}</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div>
          <img
            src={product.imageUrl}
            alt={product.title}
            className="w-full h-auto"
          />
        </div>
        <div>
          <p className="mb-2 text-gray-700">{product.description}</p>
          <p className="mb-2 text-gray-700">Price: ${product.price}</p>
          <p className="mb-2 text-gray-700">
            Discounted Price: ${product.discountedPrice}
          </p>
          <p className="mb-2 text-gray-700">Rating: {product.rating}</p>
          <p className="mb-2 text-gray-700">Tags: {product.tags.join(", ")}</p>
          <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Productpage;
