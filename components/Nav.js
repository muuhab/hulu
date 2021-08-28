import requests from "../utils/requests";
import {useRouter} from 'next/router'

const Nav = () => {
    const router=useRouter()
  return (
    <nav className="relative">
      <div className='flex whitespace-nowrap px-10 sm:px-20 space-x-10 sm:space-x-20 overflow-x-scroll text-2xl scrollbar-hide'>
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2 key={key}
          onClick={() =>router.push(`/?genre=${key}`)}
           className="cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500 last:pr-24">{title}</h2>
        ))}
      </div>
      <div className='absolute right-0 top-0 h-10 w-1/12 bg-gradient-to-l from-[#06202A]'/>
    </nav>
  );
};

export default Nav;
