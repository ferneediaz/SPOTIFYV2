import {
    ChartBarIcon,
    ClockIcon,
    DotsHorizontalIcon,
    
  } from "@heroicons/react/solid";
  import { HomeIcon } from '@heroicons/react/solid'

  import { FaMicrophoneAlt } from "react-icons/fa";
  import { RiCompassFill } from "react-icons/ri";
  import Image from "next/image";
  
  const Sidebar = () => {
    return (
      <div className="fixed top-0 z-40 flex flex-col p-4 items-center bg-black w-[90px] h-screen space-y-8">
        <Image
          src="https://iili.io/HWoR6mu.png"
          width={56}
          height={56}
          className="object-contain"
          alt="alt"
        />
        <div className="flex flex-col space-y-8">
          <HomeIcon className="sidebarIcon text-white opacity-[0.85]" />
          <RiCompassFill className="sidebarIcon text-2xl" />
          <FaMicrophoneAlt className="sidebarIcon ml-1" />
          <ChartBarIcon className="sidebarIcon" />
          <ClockIcon className="sidebarIcon" />
          <DotsHorizontalIcon className="sidebarIcon" />
        </div>
      </div>
    );
  }
  
  export default Sidebar;
