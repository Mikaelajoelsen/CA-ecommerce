import { useState, useEffect } from "react";

const products = [
  {
    id: "1",
    name: "Product A",
    description:
      "This is Product A, which is a versatile tool for various tasks.",
    price: 2000,
    quantity: 100,
    manufacturer: "ABC Company",
    category: "Tools",
  },
  {
    id: "2",
    name: "Product B",
    description:
      "Product B is a high-performance gadget designed for professionals.",
    price: 200,
    quantity: 50,
    manufacturer: "XYZ Corporation",
    category: "Electronics",
  },
  {
    id: "3",
    name: "Product C",
    description:
      "Product C is a premium accessory made from high-quality materials.",
    price: 210,
    quantity: 75,
    manufacturer: "DEF Ltd.",
    category: "Accessories",
  },
  {
    id: "4",
    name: "Product D",
    description:
      "Product D is a must-have item for outdoor enthusiasts, built for durability.",
    price: 200,
    quantity: 30,
    manufacturer: "Outdoor Gear Co.",
    category: "Outdoor",
  },
  {
    id: "5",
    name: "Product E",
    description:
      "Product E is a stylish fashion piece that complements any outfit.",
    price: 100,
    quantity: 60,
    manufacturer: "Fashion Trends Inc.",
    category: "Fashion",
  },
];

function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    updateCartIcon();
    showProductsAddedToCart();
  }, []);

  function addToCart(event) {
    const productIdClicked = event.target.getAttribute("data-id");
    const productFoundInCatalog = findProductInList(productIdClicked);

    if (productFoundInCatalog) {
      updateCartWithProduct(productFoundInCatalog);
      saveCartInBrowserStorage();
      updateCartIcon();
      showProductsAddedToCart();
    } else {
      console.error("Product not found in the catalog.");
    }
  }

  function showProductsAddedToCart() {
    const savedCart = getCart();
    const productsElement = document.getElementById("products");
    productsElement.innerHTML = "";

    savedCart.forEach((item) => {
      const product = findProductInList(item.id);
      createListElementWithProduct(product, item.quantity, productsElement);
    });
  }

  function createListElementWithProduct(product, quantity, productList) {
    const text = `Product: ${product.name} Quantity: ${quantity}`;
    const entry = document.createElement("li");
    entry.id = product.id;
    entry.appendChild(document.createTextNode(text));

    const button = document.createElement("button");
    button.innerText = "Remove Product";
    button.id = product.id;
    button.onclick = removeProductFromCart;
    entry.appendChild(button);

    productList.appendChild(entry);
  }

  function removeProductFromCart(event) {
    const productId = event.target.id;
    const updatedCart = cart.filter((product) => product.id !== productId);
    setCart(updatedCart);
    saveCartInBrowserStorage();
    updateCartIcon();
    showProductsAddedToCart();
  }

  function saveCartInBrowserStorage() {
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  function updateCartWithProduct(product) {
    const index = cart.findIndex((item) => item.id === product.id);
    if (index !== -1) {
      const updatedCart = [...cart];
      updatedCart[index].quantity++;
      setCart(updatedCart);
    } else {
      const updatedCart = [...cart, createCartProduct(product)];
      setCart(updatedCart);
    }
  }

  function createCartProduct(product) {
    return {
      id: product.id,
      quantity: 1,
    };
  }

  function findProductInList(productId) {
    return products.find((product) => product.id === productId);
  }

  function getCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];
  }

  function updateCartIcon() {
    const savedCart = getCart();
    const quantity = savedCart.reduce(
      (total, item) => total + item.quantity,
      0
    );
    document.getElementById("lblCartCount").textContent = quantity;
  }

  return (
    <div className="container p-4 mx-auto">
      <div className="relative float-right carticon">
        <i className="fa fa-shopping-cart" style={{ fontSize: 24 }}></i>
        <span className="badge badge-warning" id="lblCartCount">
          {" "}
          0{" "}
        </span>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <div className="p-4 text-center bg-gray-200 product" key={product.id}>
            <h3>{product.name}</h3>
            <p>Price: {product.price}kr</p>
            <button
              data-id={product.id}
              data-price={product.price}
              onClick={addToCart}
              className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <ol id="products" className="float-right"></ol>
    </div>
  );
}

export default App;
