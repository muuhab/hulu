import Image from "next/image";
import { HomeIcon, BadgeCheckIcon, CollectionIcon, LightningBoltIcon, UserIcon, SearchIcon } from '@heroicons/react/outline'
import HeaderItem from '../components/HeaderItem'

const Header = () => {
  return (
    <header className='flex flex-col m-5 sm:flex-row justify-between items-center h-auto'>
       <div className="flex flex-grow justify-evenly max-w-2xl ">
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
        <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
        <HeaderItem title="COLLECTION" Icon={CollectionIcon} />
        <HeaderItem title="SEARCH" Icon={SearchIcon} />
        <HeaderItem title="ACCOUNT" Icon={UserIcon} />
      </div>
      <Image
        className="object-contain"
        src="https://links.papareact.com/ua6"
        width={200}
        height={100}
      />
    </header>
  );
};

export default Header;
