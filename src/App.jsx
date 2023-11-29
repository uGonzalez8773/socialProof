import bgImageTopMb from "./assets/bg-pattern-top-mobile.svg";
import bgImageBottomMb from "./assets/bg-pattern-bottom-mobile.svg";
import bgImageTopDesktop from "./assets/bg-pattern-top-desktop.svg";
import bgImageBottomDesktop from "./assets/bg-pattern-bottom-desktop.svg";
import BackgroundImages from "./components/BackgroundImages";
import Reviews from "./components/Reviews";
import Opinions from "./components/Opinion";

function App() {
  return (
    <>
      <main className="bg-white z-0">
        <BackgroundImages
          mobileTop={bgImageTopMb}
          mobileBottom={bgImageBottomMb}
          desktopTop={bgImageTopDesktop}
          desktopBottom={bgImageBottomDesktop}
        />
        <section className="p-6 pt-20 grid gap-10 mb-16 md:grid-cols-4 md:p-20 ">
          <div className="text-center flex flex-col gap-7 flex-shrink-0 md:col-span-2 md:text-left">
            <h1 className="text-4xl font-bold text-primaryColor leading-8 md:text-6xl md:leading-[48px]">
              10,000+ of our users love our products.
            </h1>
            <h2 className="text-lg font-medium  text-thirdColor leading-6 tracking-wide md:text-justify md:mr-10">
              We only provide great products combined with excellent customer
              service. See what our satisfied customers are saying about our
              services.
            </h2>
          </div>
          <Reviews />
          <Opinions />
        </section>
      </main>
    </>
  );
}

export default App;
