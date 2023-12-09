import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Sliding = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    // Automatically slide every 0.5 seconds
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 500);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  const images = [
    "https://www.kletech.ac.in/Uploads/banner/12hbanner_group-banner.jpg",
    "https://www.kletech.ac.in/Uploads/banner/14hbanner_kle_banner1.jpg",
  ]; // Add more images as needed

  const sliderStyle = {
    width: "60%", // Adjust the width as needed
    marginLeft: "auto",
    marginRight: "auto",
    // marginTop: "7rem",
  };

  const imageStyle = {
    height: "300px", // Adjust the height as needed
  };

  return (
    <Slider {...settings} style={sliderStyle}>
      {images.map((image, index) => (
        <div key={index} style={imageStyle}>
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className="object-cover w-full h-full"
          />
        </div>
      ))}
    </Slider>
  );
};

export default Sliding;
