import PlantOneImage from "../assets/img/plant-1.png";
import PlantTwoImage from "../assets/img/plant-2.png";
import LeafThreeImage from "../assets/img/leaf-3.png";
import SectionHeader from "./common/SectionHeader";

const About = () => {
  return (
    <section id="about" className="relative overflow-hidden">
      <div className="absolute -top-8 -right-12 opacity-50">
        <img
          src={LeafThreeImage}
          alt="Imagen de hojas"
          className="w-40 md:w-52 xl:w-64"
        />
      </div>

      <SectionHeader
        title={"About Us"}
        description={"Follow instruction for more"}
      />

      <div className="container space-y-10 xl:space-y-0">
        {/* item 1 */}
        <div className="flex flex-col items-center lg:flex-row gap-5">
          {/* image */}
          <div className="w-full lg:w-1/2">
            <img
              src={PlantOneImage}
              alt="Imagen de planta"
              className="w-full sm:w-2/3 lg:w-full xl:w-2/3 mx-auto"
            />
          </div>
          {/* content */}
          <div className="w-full lg:w-1/2">
            <div className="space-y-5">
              <h3>
                Make your <span className="text-yellow-500">organic</span>{" "}
                <br />
                garden
              </h3>
              <p className="text-slate-300 font-Lobster">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis, amet in sapiente architecto culpa quod iusto quis
                eligendi sequi assumenda nisi veniam. Consectetur, excepturi,
                ratione repudiandae ullam odio ipsa minima obcaecati ab eveniet
                voluptatibus laboriosam qui.
              </p>
            </div>
          </div>
        </div>

        {/* item 2 */}
        <div className="flex flex-col items-center lg:flex-row-reverse gap-5">
          {/* image */}
          <div className="w-full lg:w-1/2">
            <img
              src={PlantTwoImage}
              alt="Imagen de planta"
              className="w-full sm:w-2/3 lg:w-full xl:w-2/3 mx-auto"
            />
          </div>
          {/* content */}
          <div className="w-full lg:w-1/2">
            <div className="space-y-5">
              <h3>
                Come with us <br />
                <span className="text-yellow-500">grow up</span> your plant
              </h3>
              <p className="text-slate-300 font-Lobster">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis, amet in sapiente architecto culpa quod iusto quis
                eligendi sequi assumenda nisi veniam. Consectetur, excepturi,
                ratione repudiandae ullam odio ipsa minima obcaecati ab eveniet
                voluptatibus laboriosam qui.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
