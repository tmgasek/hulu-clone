import Image from 'next/image';
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from '@heroicons/react/outline';
import HeaderItem from './HeaderItem';

function Header() {
  return (
    <header className="flex mt-4 justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem title="HOME" Icon={HomeIcon} path="/home" />
        <HeaderItem
          title="TRENDING"
          Icon={LightningBoltIcon}
          path="/?genre=fetchTrending&page=1"
        />
        <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} path="#" />
        <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} path="#" />
        <HeaderItem title="SEARCH" Icon={SearchIcon} path="/search" />
        <HeaderItem title="ACCOUNT" Icon={UserIcon} path="/#" />
        <div className="md:hidden mx-2">
          <Image
            className="object-contain"
            src="/Hulu_Logo.svg"
            alt=""
            height={20}
            width={60}
          />
        </div>
      </div>

      <div className="-mt-3 hidden md:block md:mx-6">
        <Image
          className="object-contain"
          src="/Hulu_Logo.svg"
          alt=""
          height={25}
          width={100}
        />
      </div>
    </header>
  );
}

export default Header;
