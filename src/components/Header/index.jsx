import { Fragment, useState } from "react";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useCartStore } from "../../hooks/useCartStore";

const navigation = {
  categories: [
    {
      id: "CLOTHING",
      name: "VIEW PRODUCTS",
      href: "/productspage",
      featured: [
        {
          name: "MAKEUP",
          href: "/productspage",
          imageSrc:
            "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          imageAlt:
            "Models sitting back to back, wearing Basic Tee in black and bone.",
        },
        {
          name: "PERFUME",
          href: "/productspage",
          imageSrc:
            "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=3104&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          imageAlt:
            "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
        },
      ],
      sections: [
        {
          id: "MAKEUP",
          name: "MAKEUP",
          items: [
            { name: "PERFUME", href: "/productspage" },
            { name: "EYEMAKEUP", href: "/productspage" },
            { name: "FOUNDATION", href: "/productspage" },
            { name: "BLUSH", href: "/productspage" },
            { name: "BRONZER", href: "/productspage" },
          ],
        },
        {
          id: "ACCESSORIES",
          name: "ACCESSORIES",
          items: [
            { name: "WATCHES", href: "/productspage" },
            { name: "WALLETS", href: "/productspage" },
            { name: "BAGS", href: "/productspage" },
          ],
        },
      ],
    },
    {
      id: "ELECTRONICS",
      name: "ELECTRONICS",
      featured: [
        {
          name: "NEW ARRIVALS",
          href: "/productspage",
          imageSrc:
            "https://images.unsplash.com/photo-1527443195645-1133f7f28990?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          imageAlt:
            "Drawstring top with elastic loop closure and textured interior padding.",
        },
        {
          name: "Headphones",
          href: "/productspage",
          imageSrc:
            "https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          imageAlt:
            "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
        },
      ],
      sections: [
        {
          id: "Electronics",
          name: "Electronics",
          items: [
            { name: "PHONES", href: "/productspage" },
            { name: "TABLETS", href: "/productspage" },
            { name: "ACCESSORIES", href: "/productspage" },
            { name: "COMPUTERS", href: "/productspage" },
            { name: "GAMES", href: "/productspage" },
            { name: "HEADPHONES", href: "/productspage" },
          ],
        },
        {
          id: "ACCESSORIES",
          name: "ACCESSORIES",
          items: [
            { name: "COMPUTER ACCESSORIES", href: "/productspage" },
            { name: "PHONE ACCESSORIES", href: "/productspage" },
            { name: "TABLET ACCESSORIES", href: "/productspage" },
          ],
        },
        {
          id: "BRANDS",
          name: "BRANDS",
          items: [
            { name: "APPLE", href: "/productspage" },
            { name: "SAMSUNG", href: "/productspage" },
          ],
        },
      ],
    },
  ],
  pages: [],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [open, setOpen] = useState(false);

  const { count, toggleIsOpen } = useCartStore((state) => ({
    count: state.count,
    toggleIsOpen: state.toggleIsOpen,
  }));
  return (
    <div className="relative top-0 z-30 w-full bg-white ">
      {/* Moble menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 text-black bg-white bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex flex-col w-full max-w-xs pb-12 overflow-y-auto text-black bg-white border-none">
                <div className="flex px-4 pt-5 pb-2">
                  <button
                    type="button"
                    className="relative inline-flex items-center justify-center p-2 -m-2 text-black "
                    onClick={() => setOpen(false)}
                  >
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="w-6 h-6" aria-hidden="true " />
                  </button>
                </div>

                {/* Links */}
                <Tab.Group as="div" className="mt-2 ">
                  <div className="border-b border-gray-200">
                    <Tab.List className="flex px-4 -mb-px space-x-8 text-black">
                      {navigation.categories.map((category) => (
                        <Tab
                          key={category.name}
                          className={({ selected }) =>
                            classNames(
                              selected
                                ? "border-black text-black"
                                : "border-transparent text-black bg-white",
                              "flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium"
                            )
                          }
                        >
                          {category.name}
                        </Tab>
                      ))}
                    </Tab.List>
                  </div>
                  <Tab.Panels as={Fragment}>
                    {navigation.categories.map((category) => (
                      <Tab.Panel
                        key={category.name}
                        className="px-4 pt-10 pb-8 space-y-10"
                      >
                        <div className="grid grid-cols-2 gap-x-4">
                          {category.featured.map((item) => (
                            <div
                              key={item.name}
                              className="relative text-sm group"
                            >
                              <div className="overflow-hidden bg-gray-100 rounded-lg aspect-h-1 aspect-w-1 group-hover:opacity-75">
                                <img
                                  src={item.imageSrc}
                                  alt={item.imageAlt}
                                  className="object-cover object-center"
                                />
                              </div>
                              <a
                                href={item.href}
                                className="block mt-6 font-medium text-black"
                              >
                                <span
                                  className="absolute inset-0 z-10"
                                  aria-hidden="true"
                                />
                                {item.name}
                              </a>
                              <p aria-hidden="true" className="mt-1">
                                Shop now
                              </p>
                            </div>
                          ))}
                        </div>
                        {category.sections.map((section) => (
                          <div key={section.name}>
                            <p
                              id={`${category.id}-${section.id}-heading-mobile`}
                              className="font-medium text-black"
                            >
                              {section.name}
                            </p>
                            <ul
                              role="list"
                              aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                              className="flex flex-col mt-6 space-y-6"
                            >
                              {section.items.map((item) => (
                                <li key={item.name} className="flow-root">
                                  <a
                                    href={item.href}
                                    className="block p-2 -m-2 text-black"
                                  >
                                    {item.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </Tab.Group>

                <div className="px-4 py-6 space-y-6 border-t border-gray-100">
                  {navigation.pages.map((page) => (
                    <div key={page.name} className="flow-root">
                      <a
                        href={page.href}
                        className="block p-2 -m-2 font-medium text-black"
                      >
                        {page.name}
                      </a>
                    </div>
                  ))}
                </div>

                <div className="px-4 py-6 space-y-6">
                  <div className="flow-root">
                    <a
                      href="/profile"
                      className="block p-2 -m-2 font-medium text-black"
                    >
                      Sign in
                    </a>
                  </div>
                </div>

                <div className="px-4 py-6 border-t border-gray-200">
                  <a href="#" className="flex items-center p-2 -m-2">
                    <img
                      src="https://tailwindui.com/img/flags/flag-canada.svg"
                      alt=""
                      className="flex-shrink-0 block w-5 h-auto"
                    />
                    <span className="block ml-3 text-base font-medium text-black">
                      CAD
                    </span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="relative">
        <p className="flex items-center justify-center h-10 px-4 text-sm font-medium text-white bg-black bg-black-600 sm:px-6 lg:px-8">
          Get free delivery on orders over $100
        </p>

        <nav
          aria-label="Top"
          className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8"
        >
          <div className="border-b border-gray-200 ">
            <div className="flex items-center h-16">
              <button
                type="button"
                className="relative p-2 text-black bg-white rounded-md lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="w-6 h-6" aria-hidden="true" />
              </button>

              <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex mt-2 space-x-4 h-3/4">
                  {navigation.categories.map((category) => (
                    <Popover key={category.name} className="flex">
                      {({ open }) => (
                        <>
                          <div className="relative flex">
                            <Popover.Button
                              className={classNames(
                                open
                                  ? "border-none text-black"
                                  : "border-transparent text-black",
                                " bg-white relative z-10 -mb-px flex items-center  pt-px text-sm font-medium transition-colors duration-200 ease-out"
                              )}
                            >
                              {category.name}
                            </Popover.Button>
                          </div>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Popover.Panel className="absolute inset-x-0 text-sm text-white top-full">
                              <div
                                className="absolute inset-0 bg-black shadow top-1/2"
                                aria-hidden="true"
                              />

                              <div className="relative bg-white">
                                <div className="px-8 mx-auto max-w-7xl">
                                  <div className="grid grid-cols-2 py-16 gap-x-8 gap-y-10">
                                    <div className="grid grid-cols-2 col-start-2 gap-x-8">
                                      {category.featured.map((item) => (
                                        <div
                                          key={item.name}
                                          className="relative text-base group sm:text-sm"
                                        >
                                          <div className="overflow-hidden bg-gray-100 rounded-lg aspect-h-1 aspect-w-1 group-hover:opacity-75">
                                            <img
                                              src={item.imageSrc}
                                              alt={item.imageAlt}
                                              className="object-cover object-center"
                                            />
                                          </div>
                                          <a
                                            href={item.href}
                                            className="block mt-6 font-medium text-black"
                                          >
                                            <span
                                              className="absolute inset-0 z-10"
                                              aria-hidden="true"
                                            />
                                            {item.name}
                                          </a>
                                          <p
                                            aria-hidden="true"
                                            className="mt-1"
                                          >
                                            Shop now
                                          </p>
                                        </div>
                                      ))}
                                    </div>
                                    <div className="grid grid-cols-3 row-start-1 text-sm gap-x-8 gap-y-10">
                                      {category.sections.map((section) => (
                                        <div key={section.name}>
                                          <p
                                            id={`${section.name}-heading`}
                                            className="font-medium text-black"
                                          >
                                            {section.name}
                                          </p>
                                          <ul
                                            role="list"
                                            aria-labelledby={`${section.name}-heading`}
                                            className="mt-6 space-y-6 text-black sm:mt-4 sm:space-y-4"
                                          >
                                            {section.items.map((item) => (
                                              <li
                                                key={item.name}
                                                className="flex"
                                              >
                                                <a
                                                  href={item.href}
                                                  className="hover:text-black"
                                                >
                                                  {item.name}
                                                </a>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  ))}

                  {navigation.pages.map((page) => (
                    <a
                      key={page.name}
                      href={page.href}
                      className="flex items-center text-sm font-medium text-black hover:text-gray-800"
                    >
                      {page.name}
                    </a>
                  ))}
                </div>
              </Popover.Group>

              <div className="flex items-center ml-auto">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <a
                    href="/profile"
                    className="text-sm font-medium text-black hover:text-gray-800"
                  >
                    Contact Page
                  </a>
                </div>

                <div className="hidden lg:ml-8 lg:flex">
                  <a
                    href="#"
                    className="flex items-center text-black hover:text-black"
                  >
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAP8AAACGCAMAAAAl+6zxAAAAb1BMVEWzGUL///8KMWHoucXip7a5KlDFTm7Wg5nz3OLQwc5cdpZ1i6YaP2xsg6AWO2k7WoEPNWRHZYmVpruFmLC+yNWls8Xf5OuNn7VZc5QyU3vJ0tzp7PGdrcArTHYgRG/Y3uazv85QbI719/m5xNLEztm5UMKjAAADbUlEQVR4nO2dbW+iQBSFndmX7vIOKlSRKtb//xsXGESguZvd5MBlMvdJMM35dB6h7XCn2J1ehd1mEX/xb0nnlaEBtyVNXzDJk2l1bMBtSdP1DIJ39R4EQ314wG1J01XNVMsxGrqjA25LGlPWa5p640sXHHBb0ph+qbqryU8vcMBtSWP6ZVmyz8bdwQG3JY3pd+oPrYNggUB/2ypf1j9huECg1Vb54v/5uUBgi793zZXKrx40sMhfx233GBxY5K9vSt3ggT3+URl6ZQQOrPDvf2VVWlcncGCF/3F2xWIDbk2Sp3+lTtPq2IBbk6Tzj4rLQz0uxfBNCw++bxVz/qtH81acq9GZAwfcq3ya55Wq1Kg6POC2pDH9/DzM/XF3cMBtSdNXDXQw7Y4NuC1p9Ix0PsRFBBb5Z9kCgS3+aRiWZRim0MAifzOzfc1wIYFF/s2KtakODyzyz8/nHB5o/WOrzOcfWZLsY3Cgt77+bzHzqmR4AQY2+EfziQU24NYk6fyDOPaVH8fDuAIecGuSmPPv39uv968zhw545P6BYf9PzffuoAGn4l/p/Wt1VfW4Ozjg1iTp/S++DieLdnDArUnS+3/0R/P6sUCwef8Xvr9AYJH/47FAoH9ulan/e9m+J3cPGrRw3+XQTM9TdZ7OcCGBRf76oNQBHtjjH+RpfP0AB1b4mwu2albrQQUOrPCfX7HYgNuSpi8Yq9nEAhtwW9K07aLL4aquh8tr7xIdcFvSmK5HNR3ZogNuSxrT9dRUnWzeg4O3rdL778/peT/uDg7WXNL/F8+//0500k8vkwWCzfu/qOsFAov8j/OtG0Rgi39dFGVZFDU0sMhf+222BwcW+S+1/8mtSTL3L2+3Eh7Y4x/7WocxOLDC/8vIEhr82ipP/+AeTKtjA+5VPk3X0/MKVXjea+8SHXBb0nRdu5nteGSLDrgtaUzXpe//uC1pTD9P3ebPrkIDbksa0y+rdTp9dhMbcFvSmH5RfwyAA25LGr0K3JY04u+2/+9V4F7mkux4bjs2g/i7jfi7jfi7jfi7zY57A5oZ7uW3IAiCIAjC6nA/gMKM8+t/7gLMiL/biL/biL/biL/b7Lg/gIgZ7tsPQRAEQRCE1eH+AHJmnF//cxdgRvzdRvzdRvzdxnl/7n9AyAz38lsQBEEQBEFYlz/cCfoAM4YaAQAAAABJRU5ErkJggg=="
                      alt=""
                      className="flex-shrink-0 block w-5 h-auto"
                    />
                    <span className="block ml-3 text-sm font-medium">USD</span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div>

                {/* Cart */}
                <div className="flow-root ml-4 lg:ml-6" onClick={toggleIsOpen}>
                  <a href="#" className="flex items-center p-2 -m-2 group">
                    <ShoppingBagIcon
                      className="flex-shrink-0 w-6 h-6 text-black group-hover:text-gray-900"
                      aria-hidden="true"
                    />
                    <span className="ml-2 text-sm font-medium text-black group-hover:text-black">
                      {count}
                    </span>
                    <span className="sr-only">items in cart, view bag</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
