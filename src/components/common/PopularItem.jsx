/* eslint-disable react/prop-types */
import {
  RiStarHalfFill,
  RiStarFill,
  RiStarLine,
  RiShoppingCartFill,
} from "react-icons/ri";

const PopularItem = ({ Image, plantName, seller }) => {
  return (
    <>
      <div className=" popular__card bg-green-950 p-10 pt-24 rounded-md relative">
        <img
          src={Image}
          alt="Imagen de planta popular"
          className="w-56 absolute -top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 duration-500"
        />

        <p className="italic">{plantName}</p>
        <h3>{seller}</h3>

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
    </>
  );
};

export default PopularItem;
