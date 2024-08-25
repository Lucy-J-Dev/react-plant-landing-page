/* eslint-disable react/prop-types */
const ServiceCard = ({ Icon, title, description }) => {
  return (
    <>
      <div className="border border-green-900 p-5 cursor-pointer rounded-md hover:shadow-2xl hover:-translate-y-1 duration-300 space-y-5">
        <div className="flex items-center gap-5">
          <Icon className="text-3xl md:text-4xl" />
          <p className="md:text-lg font-bold">{title}</p>
        </div>
        <p className="font-Lobster">{description}</p>
      </div>
    </>
  );
};

export default ServiceCard;
