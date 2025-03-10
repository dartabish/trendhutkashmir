import './Hero.css';
import { FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className="hero relative bg-cover bg-no-repeat bg-bottom">
      <div className="absolute inset-0 bg-indigo-950 opacity-70"></div>

      <img
        className="hero-img"
        src="https://images.unsplash.com/photo-1648539334751-562e5ad1764a?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8fA%3D%3D"
        alt=""
      />

      <div className="px-3 absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 text-white">
        <h1 className="text-6xl lg:text-7xl font-medium sm:text-center tracking-tighter">
          Explore new horizons with us!
        </h1>
        <p className="text-white text-lg text-center">
          Grab the best deals on our exclusive tour packages.
        </p>
        <div className="flex gap-5">
          <a
            className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-gray-100 hover:text-blue-700 cursor-pointer"
            href="#packages"
          >
            Explore Packages
          </a>
          <a
            className="px-6 py-3 bg-transparent border border-white text-white font-semibold rounded-lg shadow hover:bg-white hover:text-blue-900 cursor-pointer"
            href="#contact"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};
export default Hero;
