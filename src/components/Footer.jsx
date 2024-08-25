import Floral1 from "../assets/img/floral-1.png";
import {
  RiFacebookFill,
  RiInstagramLine,
  RiLeafFill,
  RiLinkedinFill,
  RiSendPlane2Fill,
  RiTwitterXLine,
} from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-yellow-100 text-green-950 pt-20 pb-10 md:pt-28 relative">
      {/* newsletter */}
      <div className="container text-white absolute top-0 right-0 left-0 -translate-y-1/2">
        <div className="bg-green-900 px-10 pt-5 pb-10 space-y-5 rounded-md">
          <div>
            <div className="text-2xl mb-2">
              <span className="text-yellow-500">Subscribe</span> to our
              newslatter
            </div>
            <div className="flex flex-col md:flex-row gap-1">
              <input
                type="email"
                placeholder="Your Email Address"
                className="w-full px-5 py-3 text-green-900 rounded-md outline-none"
              />
              <button className="flex items-center justify-center gap-1 bg-green-950 px-5 py-3 rounded-md hover:opacity-80 duration-300">
                <span>Subscribe</span>
                <RiSendPlane2Fill />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* social icon */}
      <div className="container mt-16 mb-10">
        <div className="border-b border-green-500 relative">
          <div className="absolute top-0 transform -translate-y-1/2 left-0 right-0 max-w-36 mx-auto">
            <div className=" flex justify-center bg-yellow-100 text-lg text-center space-x-2 px-4">
              <RiFacebookFill className="hover:text-yellow-500 duration-300 cursor-pointer" />
              <RiTwitterXLine className="hover:text-yellow-500 duration-300 cursor-pointer" />
              <RiInstagramLine className="hover:text-yellow-500 duration-300 cursor-pointer" />
              <RiLinkedinFill className="hover:text-yellow-500 duration-300 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      {/* content */}
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 text-center md:text-start">
        {/* item 1 */}
        <div>
          <div className="text-7xl text-green-700 text-center inline-block">
            <RiLeafFill />
            <p className="font-Lobster text-xl sm:text-2xl">IndorePlants.</p>
          </div>
        </div>

        {/* item 2 */}
        <div>
          <p className="mb-5 font-bold text-xl">Quick Link</p>
          <div className="flex flex-col gap-1">
            <a href="#">Plants</a>
            <a href="#">Flowers</a>
            <a href="#">Gerdening</a>
            <a href="#">Seeds</a>
            <a href="#">Shipping</a>
          </div>
        </div>

        {/* item 3 */}
        <div>
          <p className="mb-5 font-bold text-xl">Popular Services</p>
          <div className="flex flex-col gap-1">
            <a href="#">Tree Planting</a>
            <a href="#">Grass Cutting</a>
            <a href="#">Weeds Control</a>
            <a href="#">Project</a>
          </div>
        </div>

        {/* item 4 */}
        <div>
          <p className="mb-5 font-bold text-xl">Contact Us</p>
          <div className="flex flex-col gap-1">
            <a href="tel:+573001234567">+57 300 123 4567</a>
            <a href="mailto:indoreplants@mail.com">indoreplants@mail.com</a>
            <br />
            <p>1234 Tailwind Ave, CSS City, Webland 56789, USA</p>
          </div>
        </div>
      </div>

      {/* copyright */}
      <div className="container">
        <p className="text-center mt-10 opacity-50">
          Copyright &copy; 2024 LightCode. All rights reserved.
        </p>
      </div>

      {/* floral image */}
      <div className="absolute bottom-0 left-0 opacity-20 pointer-events-none">
        <img
          src={Floral1}
          alt="Imagen floral de fondo"
          className="w-full lg:w-1/2"
        />
      </div>
    </footer>
  );
};

export default Footer;
