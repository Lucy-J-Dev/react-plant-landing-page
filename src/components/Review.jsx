import ReviewImage1 from "../assets/img/review-1.jpg";
import ReviewImage2 from "../assets/img/review-2.jpg";
import ReviewImage3 from "../assets/img/review-3.jpg";
import ReviewImage4 from "../assets/img/review-4.jpg";
import Leaf4 from "../assets/img/leaf-4.png";
import SectionHeader from "./common/SectionHeader";
import ReviewCard from "./common/ReviewCard";

const Review = () => {
  const reviews = [
    {
      id: 1,
      Image: ReviewImage1,
      name: "John Doe",
      job: "Designer",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex ipsam cupiditate soluta optio, commodi minima voluptate rerum laboriosam vitae sequi architecto aspernatur, iusto debitis doloribus non! Fuga sequi placeat nesciunt!",
    },
    {
      id: 2,
      Image: ReviewImage2,
      name: "John Doe",
      job: "Designer",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex ipsam cupiditate soluta optio, commodi minima voluptate rerum laboriosam vitae sequi architecto aspernatur, iusto debitis doloribus non! Fuga sequi placeat nesciunt!",
    },
    {
      id: 3,
      Image: ReviewImage3,
      name: "John Doe",
      job: "Designer",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex ipsam cupiditate soluta optio, commodi minima voluptate rerum laboriosam vitae sequi architecto aspernatur, iusto debitis doloribus non! Fuga sequi placeat nesciunt!",
    },
    {
      id: 4,
      Image: ReviewImage4,
      name: "John Doe",
      job: "Designer",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex ipsam cupiditate soluta optio, commodi minima voluptate rerum laboriosam vitae sequi architecto aspernatur, iusto debitis doloribus non! Fuga sequi placeat nesciunt!",
    },
  ];

  return (
    <section id="review" className="relative mb-20 md:mb-28 overflow-hidden">
      <div className="absolute -top-8 -left-12 opacity-50">
        <img
          src={Leaf4}
          alt="Imagen de planta"
          className="w-40 md:w-52 xl:w-64"
        />
      </div>

      <SectionHeader
        title={"Customer Review"}
        description={"Follow instruction for more"}
      />

      <div className="container">
        <div className="py-12">
          <ul className="grid gap-4">
            {reviews.map((review) => (
              <ReviewCard key={review.id} {...review} />
            ))}
            {/* <div className="swiper-pagination"></div> */}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Review;

// TODO: Crear un carrousel nativo y dejar de usar Swiper
