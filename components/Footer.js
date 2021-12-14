import { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/outline';
function Footer() {
  const [browseActive, setBrowseActive] = useState(false);
  const [helpActive, setHelpActive] = useState(false);
  const [aboutActive, setAboutActive] = useState(false);
  return (
    <div className="lg:flex leading-7 text-gray-500 m-auto max-w-6xl ">
      <div>
        <div
          className="flex justify-between p-4 px-6 cursor-pointer"
          onClick={() => setBrowseActive(!browseActive)}
        >
          <h1 className="uppercase text-gray-800 font-bold">browse</h1>
          {!browseActive ? (
            <ChevronDownIcon className="h-6 w-6 lg:hidden" />
          ) : (
            <ChevronUpIcon className="h-6 w-6 lg:hidden" />
          )}
        </div>
        <div
          className={`px-6 ${
            browseActive ? 'block' : 'hidden'
          } lg:flex flex-wrap gap-12 `}
        >
          <div>
            <p>Streaming Library</p>
            <p>Live TV</p>
            <p>Live News</p>
            <p>Live Sports</p>
          </div>
          <div>
            <p>TV Shows</p>
            <p>Movies</p>
            <p>Originals</p>
            <p>Networks</p>
            <p>Kids</p>
            <p>FX</p>
          </div>
          <div>
            <p>HBO Max</p>
            <p>Cinemax</p>
            <p>Showtime</p>
            <p>STARZ</p>
          </div>
          <div>
            <p>Hulu, Disney+, and ESPN+</p>
            <p>Hulu (No Ads), Disney+, and ESPN+</p>
            <p>Student Discount</p>
          </div>
        </div>
      </div>

      <div>
        <div
          className="flex justify-between p-6 cursor-pointer"
          onClick={() => setHelpActive(!helpActive)}
        >
          <h1 className="uppercase text-gray-800 font-bold">help</h1>
          {!helpActive ? (
            <ChevronDownIcon className="h-6 w-6 lg:hidden" />
          ) : (
            <ChevronUpIcon className="h-6 w-6 lg:hidden" />
          )}
        </div>
        <div className={`px-6 ${helpActive ? 'block' : 'hidden'} lg:block`}>
          <p>Account & Billing</p>
          <p>Plans & Pricing</p>
          <p>Supported Devices</p>
          <p>Accessibility</p>
        </div>
      </div>

      <div>
        <div
          className="flex justify-between p-6 cursor-pointer"
          onClick={() => setAboutActive(!aboutActive)}
        >
          <h1 className="uppercase text-gray-800 font-bold">about us</h1>
          {!aboutActive ? (
            <ChevronDownIcon className="h-6 w-6 lg:hidden" />
          ) : (
            <ChevronUpIcon className="h-6 w-6 lg:hidden" />
          )}
        </div>
        <div className={`px-6 ${aboutActive ? 'block' : 'hidden'} lg:block`}>
          <p>Shop Hulu</p>
          <p>Press</p>
          <p>Jobs</p>
          <p>Contact</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
