import { useState, useEffect } from "react";

const ImageSlider = () => {
  const images = [
    "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-pro-finish-unselect-gallery-1-202212_GEO_EMEA_FMT_WHH?wid=1280&hei=720&fmt=jpeg&qlt=90&.v=1668550429908",
    "https://www.bhphotovideo.com/explora/sites/default/files/7-Color.png",
    "https://images.macrumors.com/t/fNjBlCPnEC83yzgUo09HObjQnLI=/1600x0/article-new/2022/05/AirPods-Max-2022-Colors.jpg",
    "https://9to5mac.com/wp-content/uploads/sites/6/2023/09/Apple-Watch-link-bracelet.jpg?quality=82&strip=all&w=1600",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className="relative flex items-center justify-center w-full h-screen">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index}`}
          className={`absolute top-0 left-0 w-full h-full object-fit ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          } transition-opacity duration-1000`}
        />
      ))}
    </div>
  );
};

export default ImageSlider;
