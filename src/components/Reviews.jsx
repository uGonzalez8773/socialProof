import iconStar from "./../assets/icon-star.svg";
import reviewData from "./../data/reviews";

const Reviews = () => {
  return (
    <div id="2" className="md:col-span-2">
      {reviewData.map((review) => (
        <div
          key={review.id}
          className={`flex flex-col items-center bg-fourthColor rounded h-20 mb-4 md:flex-row ${
            review.id === 1
              ? "md:ml-0"
              : review.id === 2
              ? "md:ml-12"
              : "md:ml-24"
          } md:items-center md:justify-center md:gap-6 md:h-16 md:w-5/6`}
        >
          <div className="flex items-center h-full space-x-3">
            {[1, 2, 3, 4, 5].map((index) => (
              <img key={index} src={iconStar} alt={`Star ${index}`} />
            ))}
          </div>
          <p className="ml-2 font-bold text-primaryColor text-lg pb-3">
            Rated 5 Stars in {review.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
