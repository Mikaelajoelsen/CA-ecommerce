import { useState, useEffect } from "react";

const ImageSlider = () => {
  const images = [
    "https://images.unsplash.com/photo-1591348278863-a8fb3887e2aa?q=80&w=2735&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://helios-i.mashable.com/imagery/articles/074VLAod0Vrh62ei0oj0QgR/hero-image.fill.size_1200x900.v1623375190.png",
    "https://images.macrumors.com/t/fNjBlCPnEC83yzgUo09HObjQnLI=/1600x0/article-new/2022/05/AirPods-Max-2022-Colors.jpg",
    "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=2987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className="relative w-full h-screen justify-center-center">
      <h1 className="absolute left-0 z-10 w-full text-6xl font-bold text-center text-white top-92">
        Weekend Offer 40% Off!
      </h1>
      <h2 className="absolute left-0 z-10 w-full text-3xl font-bold text-center text-white underline top-3/4 -underline-offset-4">
        BUY NOW
      </h2>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index}`}
          className={`absolute top-0 left-0 w-full h-full object-cover object-center ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          } transition-opacity duration-1000`}
        />
      ))}
    </div>
  );
};

export default ImageSlider;
