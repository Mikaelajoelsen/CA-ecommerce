import { FaInstagramSquare } from "react-icons/fa";

function BlogSection() {
  return (
    <section className="py-6 text-pink-700 sm:py-12 dark:bg-gray-100">
      <div className="container p-6 mx-auto space-y-8">
        <div className="space-y-2 text-center">
          <h2 className="flex justify-center gap-3 text-3xl font-bold">
            InstaShop <FaInstagramSquare />
          </h2>

          <p className="font-serif text-sm text-black">Get inspired!</p>
        </div>
        <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
          <article className="flex flex-col dark:bg-gray-50">
            <div className="relative overflow-hidden">
              <img
                alt=""
                className="object-cover w-full transition-transform duration-300 transform h-52 dark:bg-gray-500 hover:scale-110"
                src="https://images.unsplash.com/photo-1608539733292-190446b22b83?q=80&w=3012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  aria-label="Te nulla oportere reprimique his dolorum"
                  className="text-xs tracking-wider text-yellow-200 uppercase hover:underline"
                >
                  Convenire
                </a>
                <h3 className="py-2 text-lg font-semibold leading-snug text-yellow-200">
                  SUNGLASSES
                </h3>
                <div className="flex justify-between space-x-2 text-xs text-yellow-200">
                  <span>June 1, 2020</span>
                  <span>2.1K views</span>
                </div>
              </div>
            </div>
          </article>
          <article className="flex flex-col dark:bg-gray-50">
            <div className="relative overflow-hidden">
              <img
                alt=""
                className="object-cover w-full transition-transform duration-300 transform h-52 dark:bg-gray-500 hover:scale-110"
                src="https://images.unsplash.com/photo-1682628890923-e0d08e2e51f9?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  aria-label="Te nulla oportere reprimique his dolorum"
                  className="text-xs tracking-wider text-yellow-200 uppercase hover:underline"
                >
                  Convenire
                </a>
                <h3 className="py-2 text-lg font-semibold leading-snug text-yellow-200">
                  SHOULDER BAG
                </h3>
                <div className="flex justify-between space-x-2 text-xs text-yellow-200">
                  <span>June 2, 2020</span>
                  <span>2.2K views</span>
                </div>
              </div>
            </div>
          </article>
          <article className="flex flex-col dark:bg-gray-50">
            <div className="relative overflow-hidden">
              <img
                alt=""
                className="object-cover w-full transition-transform duration-300 transform h-52 dark:bg-gray-500 hover:scale-110"
                src="https://images.unsplash.com/photo-1565849904461-04a58ad377e0?q=80&w=3136&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  aria-label="Te nulla oportere reprimique his dolorum"
                  className="text-xs tracking-wider text-yellow-200 uppercase hover:underline"
                >
                  Convenire
                </a>
                <h3 className="py-2 text-lg font-semibold leading-snug text-yellow-200">
                  IPHONE
                </h3>
                <div className="flex justify-between space-x-2 text-xs text-yellow-200">
                  <span>June 3, 2020</span>
                  <span>2.3K views</span>
                </div>
              </div>
            </div>
          </article>
          <article className="flex flex-col dark:bg-gray-50">
            <div className="relative overflow-hidden">
              <img
                alt=""
                className="object-cover w-full transition-transform duration-300 transform h-52 dark:bg-gray-500 hover:scale-110"
                src="https://images.unsplash.com/photo-1558537348-c0f8e733989d?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  aria-label="Te nulla oportere reprimique his dolorum"
                  className="text-xs tracking-wider text-yellow-200 uppercase hover:underline"
                >
                  Convenire
                </a>
                <h3 className="py-2 text-lg font-semibold leading-snug text-yellow-200">
                  PORTABLE SPEAKER
                </h3>
                <div className="flex justify-between space-x-2 text-xs text-yellow-200">
                  <span>June 4, 2020</span>
                  <span>2.4K views</span>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function App() {
  return (
    <div className="App">
      <BlogSection />
    </div>
  );
}

export default App;
