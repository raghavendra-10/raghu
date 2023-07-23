import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Adjust the speed (in milliseconds) for the automatic slideshow
  };
  const images = [
    `${image1}`,
    `${image2}`,
    `${image3}`,
    `${image4}`,
    // Add more image paths here
  ];
  return (
    <div>
      <Header />
      <section className="bg-gray-100 py-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            Welcome to the Sustainable Inland Fisheries Initiative!
          </h2>
          <p className="ml-24 text-lg font-poppins text-gray-600">
            We the Students of VISHNU INSTITUTE OF TECHNOLOGY of ARTIFICIAL INTELLIGENCE AND DATA SCIENCE<br />
            We came up with an initiative for Inland Fisheries <br />
            This is a revolution of Fishing history by integrating Technology<br />
            Accesses to Technology and Knowledge
          </p>
          {/* Add Call-to-Action buttons here */}
        </div>
      </section>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div className="bg-cover w-full h-80" key={index}>
            <img
              src={process.env.PUBLIC_URL + image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </Slider>
      <Footer />
    </div>
  );
};

export default Home;
