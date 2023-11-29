import opinionData from "./../data/opinions";

const Opinions = () => {
  return (
    <div
      id="3"
      className="flex flex-col gap-5 md:row-start-2 md:col-start-1 md:col-end-5 md:flex-row"
    >
      {opinionData.map((opinion) => (
        <div
          key={opinion.id}
          className={`bg-primaryColor rounded-lg p-10 text-white text-base/[17px] ${
            opinion.id === 1
              ? "md:translate-y-0"
              : opinion.id === 2
              ? "md:translate-y-10"
              : "md:translate-y-20"
          }`}
        >
          <div className="flex items-center mb-5">
            <img
              src={opinion.photo}
              alt="person"
              className="rounded-full w-12"
            />
            <div className="ml-5 font-mainFont font-bold">
              <p>{opinion.name}</p>
              <p className="text-secondColor font-extralight">Verified Buyer</p>
            </div>
          </div>
          <p className="font-medium leading-[22px] tracking-tight">
            &quot; {opinion.opinion} &quot;
          </p>
        </div>
      ))}
    </div>
  );
};

export default Opinions;
