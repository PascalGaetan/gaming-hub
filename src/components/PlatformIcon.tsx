import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaAndroid,
  FaApple,
  FaLinux,
  FaGlobe
} from "react-icons/fa";

import { SiNintendo } from "react-icons/si";
import { MdPhoneIphone } from "react-icons/md";
import { IconType } from "react-icons/lib";
import Platform from "../models/Platform";
import { Icon } from "@chakra-ui/react";

interface Props {
  platforms : Platform[]
}

function PlatformIcon({ platforms }: Props) {
  
  const iconMap: {[key: string] : IconType} = {
    playstation: FaPlaystation,
    pc: FaWindows,
    xbox: FaXbox,
    android: FaAndroid,
    mac: FaApple,
    linux: FaLinux,
    web: FaGlobe,
    nintendo: SiNintendo,
    ios:MdPhoneIphone
  }
  return (
    <>
      {platforms.map(platform => <Icon as={iconMap[platform.slug]}/>)}
    </>
    
  )
}

export default PlatformIcon