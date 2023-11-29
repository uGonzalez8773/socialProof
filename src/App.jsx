import bgImageTopMb from "./assets/bg-pattern-top-mobile.svg";
import bgImageBottomMb from "./assets/bg-pattern-bottom-mobile.svg";
import bgImageTopDesktop from "./assets/bg-pattern-top-desktop.svg";
import bgImageBottomDesktop from "./assets/bg-pattern-bottom-desktop.svg";
import iconStar from "./assets/icon-star.svg";
import firstPerson from "./assets/image-colton.jpg";
import secondPerson from "./assets/image-irene.jpg";
import thirdPerson from "./assets/image-anne.jpg";

function App() {
  const reviewData = [
    { id: 1, name: "Reviews" },
    { id: 2, name: "Report Guru" },
    { id: 3, name: "BestTech" },
  ];

  const opinionData = [
    {
      id: 1,
      name: "Colton Smith",
      photo: firstPerson,
      opinion:
        "We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!",
    },
    {
      id: 2,
      name: "Irene Roberts",
      photo: secondPerson,
      opinion:
        "Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery.",
    },
    {
      id: 3,
      name: "Anne Wallace",
      photo: thirdPerson,
      opinion:
        "Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!",
    },
  ];

  return (
    <>
      <main className="bg-white z-0">
        <div className="absolute">
          <div className="md:hidden">
            <img
              src={bgImageTopMb}
              alt="bg-top"
              className="w-full fixed top-0 left-0 "
            />
            <img
              src={bgImageBottomMb}
              alt="bg-bottom"
              className="-bottom-60 fixed w-full right-0"
            />
          </div>
          <div className="hidden md:block">
            <img
              src={bgImageTopDesktop}
              alt="bg-top"
              className="md:w-[560px] "
            />
            <img
              src={bgImageBottomDesktop}
              alt="bg-bottom"
              className="md:w-3/4 md:fixed md:-bottom-10 md:right-0"
            />
          </div>
        </div>
        <section className="p-6 pt-20 grid gap-10 mb-16 md:grid-cols-4  ">
          <div className=" text-center flex flex-col gap-7 flex-shrink-0 md:col-span-2">
            <h1 className="text-4xl font-bold text-primaryColor leading-8">
              10,000+ of our users love our products.
            </h1>
            <h2 className="text-lg font-medium  text-thirdColor leading-6 tracking-wide">
              We only provide great products combined with excellent customer
              service. See what our satisfied customers are saying about our
              services.
            </h2>
          </div>
          <div className="md:col-span-2">
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
                <p className="ml-2 font-bold text-primaryColor text-lg pb-3">
                  Rated 5 Stars in {review.name}
                </p>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-5 md:row-start-2 md:col-start-1 md:col-end-5">
            {opinionData.map((opinion) => (
              <div
                key={opinion.id}
                className="bg-primaryColor rounded-lg p-10 text-white text-base/[17px]"
              >
                <div className="flex items-center mb-5">
                  <img
                    src={opinion.photo}
                    alt="person"
                    className="rounded-full w-12"
                  />
                  <div className="ml-5 font-mainFont font-bold">
                    <p>{opinion.name}</p>
                    <p className="text-secondColor font-extralight">
                      Verified Buyer
                    </p>
                  </div>
                </div>
                <p className="font-medium leading-[22px] tracking-tight">
                  &quot; {opinion.opinion} &quot;
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
