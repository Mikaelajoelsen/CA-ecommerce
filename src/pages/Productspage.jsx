import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { IoMdSearch } from "react-icons/io";
import { HiOutlineArrowCircleRight } from "react-icons/hi";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import Carousel from "../components/Carousel";
import { useCartStore } from "../hooks/useCartStore";

const getRandomImage = async () => {
  try {
    const response = await fetch("https://source.unsplash.com/random/800x600");
    return response.url;
  } catch (error) {
    console.warn("getRandomImage, error", error);
    return "";
  }
};

const ProductsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const addItemToCart = useCartStore((state) => state.addItem);
  const productsPerPage = 12;

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(
          "https://api.noroff.dev/api/v1/online-shop"
        );
        const data = await response.json();

        const updatedProducts = await Promise.all(
          data.map(async (product) => ({
            ...product,
            imageUrl: product?.imageUrl
              ? product.imageUrl
              : await getRandomImage(),
          }))
        );

        setProducts(updatedProducts);
        setFilteredProducts(updatedProducts);

        setIsLoading(false);
      } catch (error) {
        console.warn("fetchProducts, error", error);
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleSearchChange = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);

    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm)
    );

    setFilteredProducts(filtered);
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="bg-white">
      <Carousel />
      <h1 className="flex justify-start mb-4 ml-5 text-4xl font-thin text-black">
        SEARCH YOUR FAVOURITE PRODUCTS
      </h1>
      <div className="flex justify-start mb-4 ml-2">
        <input
          type="text"
          placeholder="Search product..."
          className="flex w-2/3 p-2 border border-gray-600 rounded-full bg-inherit"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button
          className="flex text-xl font-bold text-black pointer-events-none bg-inherit"
          onClick={() => console.log("Performing search for:", searchTerm)}
        >
          <IoMdSearch />
        </button>
      </div>
      <div className="grid grid-cols-1 gap-4 p-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4">
        {currentProducts.map((product) => (
          <div
            key={product.id}
            className="w-full max-w-xs overflow-hidden bg-white shadow-lg rounded-t-xl hover:bg-gray-100"
          >
            <div className="relative" style={{ paddingBottom: "100%" }}>
              {product.imageUrl && (
                <img
                  src={product.imageUrl}
                  alt={product.title}
                  className="absolute object-cover w-full h-full"
                  loading="lazy"
                  onError={async (e) => {
                    e.target.src = await getRandomImage();
                  }}
                />
              )}
            </div>
            <div className="px-6 py-4 text-black">
              <Link className="item-link" text-xl to={`/product/${product.id}`}>
                {product.title}
              </Link>
              <p className="text-base text-gray-700">{product.description}</p>
              <p className="text-base text-gray-700">Price: ${product.price}</p>
              <p className="text-base text-gray-700">
                Discounted Price: ${product.discountedPrice}
              </p>
              <div className="w-full my-4 text-left">
                <button
                  className="flex items-center justify-center w-full gap-2 px-4 py-3 font-bold text-white duration-150 ease-in-out bg-gray-900 border border-gray-500 rounded-md text-md shadow-slate-600 hover:bg-white hover:text-gray-900 lg:m-0 md:px-6"
                  title="Confirm Order"
                  onClick={() => addItemToCart(product)}
                >
                  <span>Add to cart</span>
                  <HiOutlineArrowCircleRight />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4 mb-12">
        {filteredProducts.length > productsPerPage && (
          <div className="flex space-x-2">
            <button
              className="px-3 py-2 text-4xl font-thin text-black bg-inherit"
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
            >
              {<FaArrowAltCircleLeft />}
            </button>
            <button
              className="px-3 py-2 text-4xl font-thin text-black bg-inherit"
              onClick={() => paginate(currentPage + 1)}
              disabled={indexOfLastProduct >= filteredProducts.length}
            >
              {<FaArrowAltCircleRight />}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductsPage;
