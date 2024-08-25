import {
  RiTruckLine,
  RiCustomerService2Line,
  RiPlantLine,
  RiMoneyDollarCircleLine,
} from "react-icons/ri";
import ServiceCard from "./common/ServiceCard";

const Services = () => {
  const cards = [
    {
      id: 1,
      Icon: RiTruckLine,
      title: "Fast Delivery",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, atque. Ea aliquam porro consequatur laborum ipsum earum dicta blanditiis voluptatem.",
    },
    {
      id: 2,
      Icon: RiCustomerService2Line,
      title: "Great Customer Service",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, atque. Ea aliquam porro consequatur laborum ipsum earum dicta blanditiis voluptatem.",
    },
    {
      id: 3,
      Icon: RiPlantLine,
      title: "Original Plants",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, atque. Ea aliquam porro consequatur laborum ipsum earum dicta blanditiis voluptatem.",
    },
    {
      id: 4,
      Icon: RiMoneyDollarCircleLine,
      title: "Affordable Price",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, atque. Ea aliquam porro consequatur laborum ipsum earum dicta blanditiis voluptatem.",
    },
  ];

  return (
    <div className="bg-white text-green-900 py-20">
      <div className="container w-full grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {cards.map((card) => (
          <ServiceCard key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Services;
