import { useEffect, useState } from "react";
import { MdStar } from "react-icons/md";
import { HiOutlineArrowCircleRight } from "react-icons/hi";
import { useCartStore } from "../hooks/useCartStore";
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
  const addItemToCart = useCartStore((state) => state.addItem);

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

  const handleAddToCart = () => {
    // Here you can add the product to the cart
    // You can implement this functionality according to your application logic
    console.log("Product added to cart:", product);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto mt-24">
      <div className="p-3 m-auto max-w-7xl">
        <div className="mt-6 sm:mt-10">
          <div>
            <div className="grid gap-6 gird-cols-1 md:grid-cols-3 sm:grid-cols-2 h-max">
              <div className="overflow-hidden rounded-xl">
                <img
                  src={product.imageUrl}
                  alt={product.title}
                  className="w-full h-auto"
                />
              </div>
              <div className="flex flex-col justify-between">
                <div>
                  <h1 className="text-3xl font-semibold text-gray-900 sm:text-4xl">
                    {product.title}
                  </h1>
                  <p className="mt-3 leading-6 text-justify text-gray-600 text-md sm:text-left sm:mt-4">
                    {product.description}
                  </p>
                  <span className="flex items-center gap-1 my-3 text-xl text-yellow-600 sm:my-4">
                    {Array.from({ length: product.rating }).map((_, index) => (
                      <MdStar key={index} />
                    ))}
                  </span>
                  <span className="text-xl font-semibold text-gray-900 sm:text-2xl">
                    ${product.price}
                  </span>
                </div>
                <div className="">
                  <div className="flex flex-col w-full gap-2 text-left">
                    <label className="font-semibold">Quantity</label>
                    <input
                      className="w-full max-w-full px-4 py-3 m-0 mb-1 text-sm font-semibold border border-gray-300 rounded-md outline-none md:py-3 md:px-4 md:mb-0 focus:border-red-500"
                      type="number"
                      defaultValue="1"
                      required
                    />
                  </div>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productpage;
