function FashionSection() {
  return (
    <section className="py-6 sm:py-12 dark:bg-gray-100 dark:text-gray-800">
      <div className="container p-6 mx-auto space-y-8">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold">OUR PRODUCTS</h2>
        </div>
        <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
          <article className="flex flex-col dark:bg-gray-50">
            <a rel="noopener noreferrer" href="#" aria-label="">
              <img
                alt=""
                className="object-cover w-full h-72 dark:bg-gray-500"
                src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </a>
            <div className="flex flex-col flex-1 p-6">
              <a
                rel="noopener noreferrer"
                href="#"
                aria-label="Te nulla oportere reprimique his dolorum"
              ></a>
              <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                SHOP MAKEUP
              </h3>
            </div>
          </article>
          <article className="flex flex-col dark:bg-gray-50">
            <a
              rel="noopener noreferrer"
              href="#"
              aria-label="Te nulla oportere reprimique his dolorum"
            >
              <img
                alt=""
                className="object-cover w-full h-72 dark:bg-gray-500"
                src="https://cdn.thewirecutter.com/wp-content/media/2022/09/totebags-2048px-3945.jpg?auto=webp&quality=75&crop=2:1&width=1024"
              />
            </a>
            <div className="flex flex-col flex-1 p-6">
              <a
                rel="noopener noreferrer"
                href="#"
                aria-label="Te nulla oportere reprimique his dolorum"
              ></a>
              <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                SHOP BAGS
              </h3>
            </div>
          </article>
          <article className="flex flex-col dark:bg-gray-50">
            <a
              rel="noopener noreferrer"
              href="#"
              aria-label="Te nulla oportere reprimique his dolorum"
            >
              <img
                alt=""
                className="object-cover w-full h-72 dark:bg-gray-500"
                src="https://i.pinimg.com/236x/14/d0/65/14d06568e789011a280aa585990e9be7.jpg"
              />
            </a>
            <div className="flex flex-col flex-1 p-6">
              <a
                rel="noopener noreferrer"
                href="#"
                aria-label="Te nulla oportere reprimique his dolorum"
              ></a>
              <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                SHOP CLOTHING
              </h3>
            </div>
          </article>
          <article className="flex flex-col dark:bg-gray-50">
            <a
              rel="noopener noreferrer"
              href="#"
              aria-label="Te nulla oportere reprimique his dolorum"
            >
              <img
                alt=""
                className="object-cover w-full h-72 dark:bg-gray-500"
                src="https://images.unsplash.com/photo-1589256469067-ea99122bbdc4?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </a>
            <div className="flex flex-col flex-1 p-6">
              <a
                rel="noopener noreferrer"
                href="#"
                aria-label="Te nulla oportere reprimique his dolorum"
              ></a>
              <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                SHOP ELECTRONICS
              </h3>
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
      <FashionSection />
    </div>
  );
}

export default App;
