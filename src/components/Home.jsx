import { PiLeafDuotone } from "react-icons/pi";
import { CiFacebook, CiTwitter, CiInstagram, CiLinkedin } from "react-icons/ci";
import { RiLeafLine, RiFlowerLine, RiPlantLine } from "react-icons/ri";
import HomePlantImg from "../assets/img/home.png";

const Home = () => {
  return (
    <section id="home" className="relative">
      <div className="container">
        {/* Interesante para hacer diseños blur en la pantalla */}
        {/* blob 1 */}
        <div className="w-64 h-64 bg-green-700 rounded-full blur-3xl -z-10 opacity-40 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        </div>
        {/* blob 1 */}
        <div className="w-64 h-64 bg-green-700 rounded-full blur-3xl -z-10 opacity-40 absolute right-0 bottom-0">
        </div>
        <div className="flex flex-col items-center gap-5 lg:flex-row">
          {/* content */}
          <div className="w-full space-y-5 lg:w-1/2">
            <h1>
              <span className="text-yellow-500">Plants</span> make a
              <br />
              positive
              <span className="text-yellow-500"> inpact</span> on
              <br />
              your environment
            </h1>
            <p className="text-slate-300 font-Lobster">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quas saepe facilis rerum, porro cum assumenda nisi deserunt ea
              harum alias veritatis nostrum sapiente maiores dignissimos,
              cupiditate architecto minus similique.
            </p>
            <div className="flex flex-col gap-2 sm:flex-row md:gap-4 lg:pt-5 xl:pt-10">
              <button className="flex flex-row gap-3 items-center btn">
                <span>Shop Now</span>
                <PiLeafDuotone />
              </button>

              <button className="flex flex-row gap-5 items-center btn btn_outline">
                <span>Know More</span>
                <PiLeafDuotone />
              </button>
            </div>
            <p className="text-xs font-Lobster text-slate-300">
              You will get 30-days free trial.
            </p>
            <div className="flex items-center gap-5 text-lg lg:pt-10">
              <CiFacebook
                size={28}
                className="text-slate-300 hover:text-yellow-500 duration-300 cursor-pointer"
              />
              <CiTwitter
                size={28}
                className="text-slate-300 hover:text-yellow-500 duration-300 cursor-pointer"
              />
              <CiInstagram
                size={28}
                className="text-slate-300 hover:text-yellow-500 duration-300 cursor-pointer"
              />
              <CiLinkedin
                size={28}
                className="text-slate-300 hover:text-yellow-500 duration-300 cursor-pointer"
              />
            </div>
          </div>
          {/* image */}
          <div className="w-full relative lg:w-1/2">
            <img src={HomePlantImg} alt="Planta decorativa" />
            {/* leaf */}
            <div className="absolute -top-10 right-0 opacity-30 xl:top-5 animate-movingY">
              <RiLeafLine className="text-6xl text-yellow-500" />
            </div>
            {/* flower */}
            <div className="absolute bottom-0 left-0 opacity-30 xl:bottom-12 animate-rotating">
              <RiFlowerLine className="text-6xl text-yellow-500" />
            </div>
            {/* Plant */}
            <div className="hidden absolute -top-8 -left-5 opacity-30 lg:block animate-scalingUp">
              <RiPlantLine className="text-6xl text-yellow-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
