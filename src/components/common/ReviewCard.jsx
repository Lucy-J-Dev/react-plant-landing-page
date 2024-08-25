/* eslint-disable react/prop-types */
import { RiDoubleQuotesR } from "react-icons/ri";

const ReviewCard = ({ Image, name, job, review }) => {
  return (
    <>
      <li className="">
        <div className="flex flex-col gap-5 bg-green-900 rounded-md p-6">
          <p className="font-Lobster">{review}</p>
          <div className="flex items-center">
            <img
              src={Image}
              alt="Foto de persona que realiza la nota"
              className="w-12 h-12 rounded-full"
            />
            <div className="ml-2">
              <p className="text-yellow-500 uppercase">{name}</p>
              <p>{job}</p>
            </div>
            <RiDoubleQuotesR className="text-4xl ml-auto" />
          </div>
        </div>
      </li>
    </>
  );
};

export default ReviewCard;
