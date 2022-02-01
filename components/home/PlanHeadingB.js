function PlanHeadingB() {
  return (
    <div className="flex text-center items-end gap-1 xl:gap-5 ">
      <div className="w-full">
        <p className="bg-gray-500 rounded-full text-white p-1 my-1 text-sm font-bold">
          MOST POPULAR
        </p>
        <img src="/plan-bundle.svg" className="m-auto" />
        <h2 className="lg:text-3xl font-black">Hulu</h2>
        <button className="bg-black p-3 w-full lg:px-14 text-gray-200 uppercase font-bold cursor-pointer xl:whitespace-nowrap">
          get bundle
        </button>
      </div>
      <div className="w-full">
        <img src="/plan-bundle.svg" className="m-auto" />
        <h2 className="lg:text-3xl font-black">Hulu (No Ads)</h2>
        <button className="bg-black p-3 w-full lg:px-14 text-gray-200 uppercase font-bold cursor-pointer xl:whitespace-nowrap">
          get bundle
        </button>
      </div>
      <div className="w-full lg:mr-3">
        <img src="/plan-bundle.svg" className="m-auto" />
        <h2 className="lg:text-3xl font-black">Hulu + Live TV</h2>
        <button className="bg-black p-3 w-full lg:px-14 text-gray-200 uppercase font-bold cursor-pointer xl:whitespace-nowrap">
          get bundle
        </button>
      </div>
    </div>
  );
}

export default PlanHeadingB;
