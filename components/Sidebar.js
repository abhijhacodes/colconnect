import Link from "next/link";

import { ChevronDownIcon, UserGroupIcon } from "@heroicons/react/outline";
import {
  CalendarIcon,
  ClockIcon,
  DesktopComputerIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import SidebarRow from "./SidebarRow";
import profile from "../images/profile.jpg";
import firebase from "../firebase/clientApp";
import {useAuthState} from "react-firebase-hooks/auth";

function Sidebar() {

  const [user, loading, error] = useAuthState(firebase.auth());

  return (
    <div className="p-1 md:p-2 mt-4 border-r-1 border-blue-100 shadow-lg max-w-[600px] xl:min-w-[300px]">
      <SidebarRow src={user.photoURL} title={user.displayName} />
      <a
        target="_blank"
        href="https://colconnect-ide.netlify.app/"
        rel="noopener noreferrer"
      >
        <SidebarRow Icon={DesktopComputerIcon} title="Online IDE" />
      </a>
      <Link href="/others">
        <a>
          <SidebarRow Icon={UsersIcon} title="Recent Chats" />
        </a>
      </Link>
      <Link href="/others">
        <a>
          <SidebarRow Icon={UserGroupIcon} title="Friends" />
        </a>
      </Link>
      <Link href="/others">
        <a>
          <SidebarRow Icon={CalendarIcon} title="Events" />
        </a>
      </Link>
      <Link href="/others">
        <a>
          <SidebarRow Icon={ClockIcon} title="Memories" />
        </a>
      </Link>
      <SidebarRow Icon={ChevronDownIcon} title="See more" />
    </div>
  );
}

export default Sidebar;
