import PlanItem from './PlanItem';

function PlanListA() {
  return (
    <div>
      <div>
        <p className="lg:hidden lg:text-xl text-center mt-2">
          Monthly price after free trial
        </p>
        <div className="flex lg:text-xl items-center border-b-2 py-4">
          <p className="hidden lg:flex w-1/3 xl:w-2/3 ">
            Monthly price after free trial
          </p>
          <p className="flex justify-center items-center w-1/3">$6.99/mo</p>
          <p className="flex justify-center items-center w-1/3">$12.99/mo</p>
          <p className="flex justify-center items-center w-1/3">$64.99/mo</p>
        </div>
      </div>
      <PlanItem
        text="Streaming Library with thousands of TV episodes and movies"
        stars={[true, true, true]}
      />
      <PlanItem
        text="Most new episodes the day after they air^"
        stars={[true, true, true]}
      />
      <PlanItem
        text="Access to award-winning Hulu Originals"
        stars={[true, true, true]}
      />
      <PlanItem
        text="Watch on your TV, laptop, phone, or tablet"
        stars={[true, true, true]}
      />
      <PlanItem text="Up to 6 user profiles" stars={[true, true, true]} />
      <PlanItem
        text="Watch on 2 different screens at the same time"
        stars={[true, true, true]}
      />
      <PlanItem
        text="No ads in streaming library"
        stars={[false, true, false]}
      />
      <PlanItem text="Download and watch" stars={[false, true, false]} />
      <PlanItem
        text="Live TV with 75+ top channels. No cable required"
        stars={[false, false, true]}
      />
      <PlanItem
        text="Live TV guide to navigate channels"
        stars={[false, false, true]}
      />
      <PlanItem
        text="Record Live TV with 50 hours of Cloud DVR storage"
        stars={[false, false, true]}
      />
    </div>
  );
}

export default PlanListA;
