import CartImage1 from "../assets/img/cart-1.png";
import CartImage2 from "../assets/img/cart-2.png";
import CartImage3 from "../assets/img/cart-3.png";
import CartImage4 from "../assets/img/cart-4.png";
import SectionHeader from "./common/SectionHeader";
import PopularItem from "./common/PopularItem";

const Popular = () => {
  const items = [
    {
      id: 1,
      Image: CartImage1,
      plantName: "Nephrolepis exaltata",
      seller: "Boston Fern",
    },
    {
      id: 2,
      Image: CartImage2,
      plantName: "Ficus elastica",
      seller: "Rubber Plant",
    },
    {
      id: 3,
      Image: CartImage3,
      plantName: "Spathiphyllum wallisii",
      seller: "PeaceLily",
    },
    {
      id: 4,
      Image: CartImage4,
      plantName: "Adenium obesum",
      seller: "Desert Rose",
    },
  ];

  return (
    <section id="popular" className="bg-green-900">
      <SectionHeader
        title={"Your Choice Plant"}
        description={"Your Choice Plant"}
      />

      <div className="container w-full grid grid-cols-1 gap-x-8 gap-y-36 pt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {items.map((item) => (
          <PopularItem key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Popular;
