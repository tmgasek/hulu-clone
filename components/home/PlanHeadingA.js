function PlanHeadingA() {
  return (
    <div className="flex text-center items-end gap-1 lg:gap-4 ">
      <div className="w-full">
        <p className="bg-gray-500 rounded-full text-white p-1 my-1 text-sm font-bold">
          MOST POPULAR
        </p>
        <p className="text-gray-600">30 DAY FREE TRIAL</p>
        <h2 className="lg:text-3xl font-black">Hulu</h2>
        <button className="bg-black p-3 w-full lg:px-20 text-gray-200 uppercase font-bold cursor-pointer">
          select
        </button>
      </div>
      <div className="w-full">
        <p className="text-gray-600">30 DAY FREE TRIAL</p>
        <h2 className="lg:text-3xl font-black">Hulu (No Ads)</h2>
        <button className="bg-black p-3 w-full lg:px-20 text-gray-200 uppercase font-bold cursor-pointer">
          select
        </button>
      </div>
      <div className="w-full lg:mr-3">
        <p className="text-gray-600">30 DAY FREE TRIAL</p>
        <h2 className="lg:text-3xl font-black">Hulu + Live TV</h2>
        <button className="bg-black p-3 w-full lg:px-20 text-gray-200 uppercase font-bold cursor-pointer">
          select
        </button>
      </div>
    </div>
  );
}

export default PlanHeadingA;
