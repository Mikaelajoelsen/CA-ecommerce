import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "@tanstack/react-router";

function ProductCard({ product }) {
  return (
    <div className="w-64 mx-auto mb-8">
      <div className="overflow-hidden bg-white rounded-lg shadow-md">
        <img
          src={product.imageUrl}
          alt={product.title}
          className="object-cover w-full h-40"
        />
        <div className="p-4">
          <h2 className="mb-2 text-xl font-semibold">{product.title}</h2>
          <p className="mb-2 text-gray-700">{product.description}</p>
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-700">Price: ${product.price}</span>
            <span className="text-gray-700 line-through">
              Discounted Price: ${product.discountedPrice}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-700">Rating: {product.rating}</span>
            <span className="text-gray-700">
              Tags: {product.tags.join(", ")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    discountedPrice: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};

function Productspage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://api.noroff.dev/api/v1/online-shop")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="mb-8 text-3xl font-bold">Products</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="block"
          >
            <ProductCard product={{ ...product, id: product.id }} />{" "}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Productspage;
