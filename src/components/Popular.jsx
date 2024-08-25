import CartImageOne from "../assets/img/cart-1.png";
import CartImageTwo from "../assets/img/cart-2.png";
import CartImageThree from "../assets/img/cart-3.png";
import CartImageFour from "../assets/img/cart-4.png";
import {
  RiStarHalfFill,
  RiStarFill,
  RiStarLine,
  RiShoppingCartFill,
} from "react-icons/ri";

const Popular = () => {
  return (
    <section id="popular" className="bg-green-900">
      <div className="flex flex-col items-center gap-3 text-center mb-40 md:mb-28">
        <h2>Your Choice Plant</h2>
        <p>Follow instruction for more</p>
      </div>

      <div className="container w-full grid grid-cols-1 gap-x-8 gap-y-36 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {/* card 1 */}
        <div className=" popular__card bg-green-950 p-10 pt-24 rounded-md relative">
          <img
            src={CartImageOne}
            alt="Imagen de planta popular"
            className="w-56 absolute -top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 duration-500"
          />

          <p className="italic">Nephrolepis exaltata</p>
          <h3>Boston Fern</h3>

          <div className="flex gap-1 text-yellow-500 text-xs py-3">
            <RiStarFill />
            <RiStarFill />
            <RiStarHalfFill />
            <RiStarLine className="text-gray-400" />
            <RiStarLine className="text-gray-400" />
          </div>
          <div className="flex items-center justify-between">
            <p className="text-xl">$5</p>

            <button className="bg-yellow-500 px-2 py-1 rounded-sm text-xl">
              <RiShoppingCartFill />
            </button>
          </div>
        </div>

        {/* card 2 */}
        <div className=" popular__card bg-green-950 p-10 pt-24 rounded-md relative">
          <img
            src={CartImageTwo}
            alt="Imagen de planta popular"
            className="w-56 absolute -top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 duration-500"
          />

          <p className="italic">Ficus elastica </p>
          <h3>Rubber Plant</h3>

          <div className="flex gap-1 text-yellow-500 text-xs py-3">
            <RiStarFill />
            <RiStarFill />
            <RiStarHalfFill />
            <RiStarLine className="text-gray-400" />
            <RiStarLine className="text-gray-400" />
          </div>
          <div className="flex items-center justify-between">
            <p className="text-xl">$5</p>

            <button className="bg-yellow-500 px-2 py-1 rounded-sm text-xl">
              <RiShoppingCartFill />
            </button>
          </div>
        </div>

        {/* card 3 */}
        <div className=" popular__card bg-green-950 p-10 pt-24 rounded-md relative">
          <img
            src={CartImageThree}
            alt="Imagen de planta popular"
            className="w-56 absolute -top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 duration-500"
          />

          <p className="italic">Spathiphyllum wallisii</p>
          <h3>PeaceLily</h3>

          <div className="flex gap-1 text-yellow-500 text-xs py-3">
            <RiStarFill />
            <RiStarFill />
            <RiStarHalfFill />
            <RiStarLine className="text-gray-400" />
            <RiStarLine className="text-gray-400" />
          </div>
          <div className="flex items-center justify-between">
            <p className="text-xl">$5</p>

            <button className="bg-yellow-500 px-2 py-1 rounded-sm text-xl">
              <RiShoppingCartFill />
            </button>
          </div>
        </div>

        {/* card 4 */}
        <div className=" popular__card bg-green-950 p-10 pt-24 rounded-md relative">
          <img
            src={CartImageFour}
            alt="Imagen de planta popular"
            className="w-56 absolute -top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 duration-500"
          />

          <p className="italic">Adenium obesum</p>
          <h3>Desert Rose</h3>

          <div className="flex gap-1 text-yellow-500 text-xs py-3">
            <RiStarFill />
            <RiStarFill />
            <RiStarHalfFill />
            <RiStarLine className="text-gray-400" />
            <RiStarLine className="text-gray-400" />
          </div>
          <div className="flex items-center justify-between">
            <p className="text-xl">$5</p>

            <button className="bg-yellow-500 px-2 py-1 rounded-sm text-xl">
              <RiShoppingCartFill />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Popular;
