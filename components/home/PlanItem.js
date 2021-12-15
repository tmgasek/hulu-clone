import { CheckIcon } from '@heroicons/react/outline';
import { MinusIcon } from '@heroicons/react/outline';

function PlanItem({ text, stars }) {
  return (
    <div className="lg:text-xl">
      <p className="lg:hidden text-center mt-2">{text}</p>
      <div className="flex  items-center border-b-2 py-4">
        <p className="hidden lg:flex w-1/3 xl:w-2/3 ">{text}</p>
        <div className="flex justify-center items-center w-1/3">
          {(stars[0] && <CheckIcon className="h-6 w-6" />) || (
            <MinusIcon className="h-6 w-6 text-gray-300" />
          )}
        </div>
        <div className="flex justify-center items-center w-1/3 ">
          {(stars[1] && <CheckIcon className="h-6 w-6" />) || (
            <MinusIcon className="h-6 w-6 text-gray-300" />
          )}
        </div>
        <div className="flex justify-center items-center w-1/3">
          {(stars[2] && <CheckIcon className="h-6 w-6" />) || (
            <MinusIcon className="h-6 w-6 text-gray-300 z-0" />
          )}
        </div>
      </div>
    </div>
  );
}

export default PlanItem;
