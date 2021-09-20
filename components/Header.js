import Image from "next/image";
import profile from "../images/profile.jpg";
import logo2 from "../images/logo2.png";
import { useRouter } from "next/router";
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";

import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import HeaderIcon from "./HeaderIcon";

import { auth } from "../firebase/clientApp";

function Header() {

  const router = useRouter();

  async function logOut(e) {
      e.preventDefault();
      auth.signOut();
      router.push("/");
  }

  return (
    <div className="sticky top-0 z-50 bg-white-100 overflow-hidden flex flex-row lg:px-5 md:px-3 items-center p-2 shadow-lg">
      {/* left */}
      <div className="ml-10 flex items-center">
        <p className="whitespace-nowrap text-lg mr-3 hover:animate-bounce cursor-pointer text-indigo-700 shadow-md bg-gray-100 rounded-full hidden md:inline-flex font-semibold pr-3">
          Colconnect
        </p>
        <Image
          src={logo2}
          alt="logo"
          height={40}
          width={40}
          layout="fixed"
          className="rounded-full cursor-pointer"
        />
      </div>

      {/* center */}
      <div className="flex justify-center ml-20">
        <div className="flex space-x-6 md:space-x-2">
          <HeaderIcon active Icon={HomeIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
        <div className="flex mr-12 ml-4 items-center rounded-full bg-indigo-100 p-2">
          <SearchIcon className="h-4 md:h-6 text-gray-600" />
          <input
            className="ml-2 inline-flex flex-shrink items-center bg-transparent outline-none placeholder-gray-500"
            type="text"
            placeholder="Search for friends"
          />
        </div>
      </div>

      {/* right */}
      <div className="ml-20 flex items-center sm:space-x-2 justify-end">
        <button onClick={logOut} className="bg-transparent hover:bg-indigo-600 text-indigo-600 font-semibold hover:text-white py-1 px-3 border border-blue-500 mr-0 hover:border-transparent rounded">Logout</button>
        <ViewGridIcon className="icon" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <ChevronDownIcon className="icon" />
      </div>
    </div>
  );
}

export default Header;
