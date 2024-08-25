import ReviewImage1 from "../assets/img/review-1.jpg";
import ReviewImage2 from "../assets/img/review-2.jpg";
import ReviewImage3 from "../assets/img/review-3.jpg";
import ReviewImage4 from "../assets/img/review-4.jpg";
import Leaf4 from '../assets/img/leaf-4.png'

import { RiDoubleQuotesR } from "react-icons/ri";

const Review = () => {
  return (
    <section id="review" className="relative mb-20 md:mb-28 overflow-hidden">
      <div className="absolute -top-8 -left-12 opacity-50">
        <img src={Leaf4} alt="Imagen de planta" className="w-40 md:w-52 xl:w-64"/>
      </div>

      <div className="flex flex-col items-center gap-3 text-center mb-10 md:mb-20">
        <h2 className="title">Customer Review</h2>
        <p className="max-w-2xl">Follow instruction for more</p>
      </div>

      <div className="container">
        {/* Eliminar clases swiper en el futuro */}
        <div className="swiper py-12">
          <ul className="swiper-wrapper">
            <li className="swiper-slide">
              <div className="flex flex-col gap-5 bg-green-900 rounded-md p-6">
                <p className="font-Lobster">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
                  ipsam cupiditate soluta optio, commodi minima voluptate rerum
                  laboriosam vitae sequi architecto aspernatur, iusto debitis
                  doloribus non! Fuga sequi placeat nesciunt!
                </p>
                <div className="flex items-center">
                  <img
                    src={ReviewImage1}
                    alt="Foto de persona que realiza la nota"
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="ml-2">
                    <p className="text-yellow-500 uppercase">John Doe</p>
                    <p>Designer</p>
                  </div>
                  <RiDoubleQuotesR className="text-4xl ml-auto" />
                </div>
              </div>
            </li>

            <li className="swiper-slide">
              <div className="flex flex-col gap-5 bg-green-900 rounded-md p-6">
                <p className="font-Lobster">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
                  ipsam cupiditate soluta optio, commodi minima voluptate rerum
                  laboriosam vitae sequi architecto aspernatur, iusto debitis
                  doloribus non! Fuga sequi placeat nesciunt!
                </p>
                <div className="flex items-center">
                  <img
                    src={ReviewImage2}
                    alt="Foto de persona que realiza la nota"
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="ml-2">
                    <p className="text-yellow-500 uppercase">John Doe</p>
                    <p>Designer</p>
                  </div>
                  <RiDoubleQuotesR className="text-4xl ml-auto" />
                </div>
              </div>
            </li>

            <li className="swiper-slide">
              <div className="flex flex-col gap-5 bg-green-900 rounded-md p-6">
                <p className="font-Lobster">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
                  ipsam cupiditate soluta optio, commodi minima voluptate rerum
                  laboriosam vitae sequi architecto aspernatur, iusto debitis
                  doloribus non! Fuga sequi placeat nesciunt!
                </p>
                <div className="flex items-center">
                  <img
                    src={ReviewImage3}
                    alt="Foto de persona que realiza la nota"
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="ml-2">
                    <p className="text-yellow-500 uppercase">John Doe</p>
                    <p>Designer</p>
                  </div>
                  <RiDoubleQuotesR className="text-4xl ml-auto" />
                </div>
              </div>
            </li>

            <li className="swiper-slide">
              <div className="flex flex-col gap-5 bg-green-900 rounded-md p-6">
                <p className="font-Lobster">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
                  ipsam cupiditate soluta optio, commodi minima voluptate rerum
                  laboriosam vitae sequi architecto aspernatur, iusto debitis
                  doloribus non! Fuga sequi placeat nesciunt!
                </p>
                <div className="flex items-center">
                  <img
                    src={ReviewImage4}
                    alt="Foto de persona que realiza la nota"
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="ml-2">
                    <p className="text-yellow-500 uppercase">John Doe</p>
                    <p>Designer</p>
                  </div>
                  <RiDoubleQuotesR className="text-4xl ml-auto" />
                </div>
              </div>
            </li>

            <div className="swiper-pagination"></div>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Review;

// TODO: Crear un carrousel nativo y dejar de usar Swiper
