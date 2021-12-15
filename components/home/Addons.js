import { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/outline';
import PlanItem from './PlanItem';

function Addons() {
  const [active, setActive] = useState(false);

  return (
    <div>
      <div
        className="text-center my-10 lg:text-3xl border-t-2 border-b-2 py-8"
        onClick={() => setActive(!active)}
      >
        <h1>
          Show Addons{' '}
          {!active ? (
            <ChevronDownIcon className="h-10 w-10 inline-block mx-4" />
          ) : (
            <ChevronUpIcon className="h-10 w-10 inline-block mx-4" />
          )}
        </h1>
      </div>
      <div className={`${active ? 'block' : 'hidden'}`}>
        <PlanItem text={'HBO MAX'} stars={[true, true, true]} />
        <PlanItem text={'CINEMAX'} stars={[true, true, true]} />
        <PlanItem text={'SHOWTIME'} stars={[true, true, true]} />
        <PlanItem text={'STARZ'} stars={[true, true, true]} />
        <PlanItem text={'Unlimited Screens'} stars={[false, false, true]} />
        <PlanItem text={'Enhanced Cloud DVR'} stars={[false, false, true]} />
        <PlanItem text={'Entertainment Add-on'} stars={[false, false, true]} />
        <PlanItem text={'Espanol Add-on'} stars={[false, false, true]} />
      </div>
    </div>
  );
}

export default Addons;
