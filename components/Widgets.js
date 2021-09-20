import { SearchIcon } from "@heroicons/react/solid";
import { DotsHorizontalIcon, VideoCameraIcon } from "@heroicons/react/solid";
import Contacts from "./Contacts";
import elon from "../mainimages/elon.jpeg";
import eminem from "../mainimages/eminem.jpeg";
import weekend from "../mainimages/weekend.jpeg";
import steve from "../mainimages/steve.jpeg";
import linus from "../mainimages/linus.jpeg";
import cole from "../mainimages/cole.jpeg";

function Widgets() {
  return (
    <div className="hidden lg:flex shadow:lg flex-col w-60 p-2 mt-5">
      <div className="flex justify-between items-center cursor-pointer text-indigo-500 mb-5">
        <h2 className="text-xl">Online now</h2>
        <div className="flex space-x-2">
          <VideoCameraIcon className="h-6" />
          <SearchIcon className="h-6" />
          <DotsHorizontalIcon className="h-6" />
        </div>
      </div>
      <Contacts pic={elon} name="Elon Musk" />
      <Contacts pic={eminem} name="Eminem" />
      <Contacts pic={linus} name="Linus Torvalds" />
      <Contacts pic={weekend} name="The Weeknd" />
      <Contacts pic={steve} name="Steve Jobs" />
      <Contacts pic={cole} name="J. Cole" />
    </div>
  );
}

export default Widgets;
