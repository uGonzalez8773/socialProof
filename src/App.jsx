import bgImageTop from "./assets/bg-pattern-top-mobile.svg";
import bgImageBottom from "./assets/bg-pattern-bottom-mobile.svg";
import iconStar from "./assets/icon-star.svg";
import firstPerson from "./assets/image-colton.jpg";

function App() {
  const reviewData = [
    { id: 1, name: "Reviews" },
    { id: 2, name: "Report Guru" },
    { id: 3, name: "BestTech" },
  ];

  return (
    <>
      <main className="bg-white z-0">
        <div className="absolute">
          <img
            src={bgImageTop}
            alt="bg-top"
            className="w-full fixed top-0 left-0"
          />
          <img src={bgImageBottom} alt="bg-bottom" />
        </div>
        <section className="p-6 pt-20 grid gap-10">
          <div className=" text-center flex flex-col gap-10 flex-shrink-0">
            <h1 className="text-4xl font-bold text-primaryColor">
              10,000+ of our users love our products.
            </h1>
            <h2 className="text-xl font-medium  text-thirdColor ">
              We only provide great products combined with excellent customer
              service. See what our satisfied customers are saying about our
              services.
            </h2>
          </div>
          <div className="">
            {reviewData.map((review) => (
              <div
                key={review.id}
                className="flex flex-col items-center bg-fourthColor rounded h-20 mb-4"
              >
                <div className="flex items-center h-full space-x-3">
                  {[1, 2, 3, 4, 5].map((index) => (
                    <img key={index} src={iconStar} alt={`Star ${index}`} />
                  ))}
                </div>
                <p className="ml-2 font-bold text-primaryColor text-lg pb-3">Rated 5 Stars in {review.name}</p>
              </div>
            ))}
          </div>
          <div className="">
            <div className="">
              <img src={firstPerson} alt="" />
              <p>Colton Smith</p>
              <p>Verified Buyer</p>
              <p>
                &quot; We needed the same printed design as the one we had
                ordered a week prior. Not only did they find the original order,
                but we also received it in time. Excellent! &quot;
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
