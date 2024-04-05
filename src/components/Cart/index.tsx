import { useState, useEffect } from "react";
import { useCartStore } from "../../hooks/useCartStore";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon, PlusIcon, MinusIcon } from "@heroicons/react/24/outline";
import React from "react";

function Cart() {
  const [cart, setCart] = useState([]);
  const {
    total,
    open,
    toggleIsOpen,
    products,
    removeItemMaxQuantity,
    clearCart,
    addItem,
    removeItem,
  } = useCartStore((state) => ({
    total: state.total,
    products: state.items,
    toggleIsOpen: state.toggleIsOpen,
    open: state.isOpen,
    removeItemMaxQuantity: state.removeItemMaxQuantity,
    clearCart: state.clearCart,
    addItem: state.addItem,
    removeItem: state.removeItem,
  }));



  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-40" onClose={toggleIsOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="fixed inset-y-0 right-0 flex max-w-full pl-10 pointer-events-none">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="w-screen max-w-md pointer-events-auto">
                  <div className="flex flex-col h-full overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 px-4 py-6 overflow-y-auto sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">
                          Shopping cart
                        </Dialog.Title>
                        <div className="flex items-center ml-3 h-7">
                          <button
                            type="button"
                            className="relative p-2 -m-2 text-gray-400 hover:text-gray-500"
                            onClick={toggleIsOpen}
                          >
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="w-6 h-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          <ul
                            role="list"
                            className="-my-6 divide-y divide-gray-200"
                          >
                            {products.map((product) => (
                              <li key={product.id} className="flex py-6">
                                <div className="flex-shrink-0 w-24 h-24 overflow-hidden border border-gray-200 rounded-md">
                                  <img
                                    src={product.imageUrl}
                                     alt={product.title}
                                    className="object-cover object-center w-full h-full"
                                  />
                                </div>

                                <div className="flex flex-col flex-1 ml-4">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3>
                                        <a href={`/product/${product.id}`}>
                                          {product.title}
                                        </a>
                                      </h3>
                                      <p className="ml-4">{product.price}</p>
                                    </div>
                                    <p className="mt-1 text-sm text-gray-500">
                                      {product.category}
                                    </p>
                                  </div>
                                  <div className="flex items-end justify-between flex-1 text-sm">
                                    <p className="text-gray-500">
                                      Qty {product.quantity}
                                    </p>

                                    <div className="flex gap-1">
                                      <button
                                        type="button"
                                        className="font-medium text-black hover:text-black"
                                        onClick={() => removeItem(product)}
                                      >
                                        <MinusIcon className="w-6 h-6" />
                                      </button>

                                      <button
                                        type="button"
                                        className="font-medium text-black hover:text-black"
                                        onClick={() => addItem(product)}
                                      >
                                        <PlusIcon className="w-6 h-6" />
                                      </button>
                                    </div>

                                    <div className="flex">
                                      <button
                                        type="button"
                                        className="font-medium text-black hover:text-black"
                                        onClick={() =>
                                          removeItemMaxQuantity(product)
                                        }
                                      >
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="px-4 py-6 border-t border-gray-200 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>{total}</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">
                        Shipping and taxes calculated at checkout.
                      </p>
                      <div className="mt-6">
                        <button
                          onClick={clearCart}
                          className="flex items-center justify-center w-full px-6 py-3 text-base font-medium text-white bg-black border border-transparent rounded-md shadow-sm hover:bg-pink-400"
                        >
                          Clear Cart
                        </button>
                      </div>
                      <div className="mt-6">
                        <a
                          href="/checkoutpage"
                          className="flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-black border border-transparent rounded-md shadow-sm hover:bg-pink-400"
                        >
                          Checkout
                        </a>
                      </div>
                      <div className="flex justify-center mt-6 text-sm text-center text-gray-500">
                        <p>
                          or{" "}
                          <button
                            type="button"
                            className="font-medium text-black hover:text-black"
                            onClick={toggleIsOpen}
                          >
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default Cart;
