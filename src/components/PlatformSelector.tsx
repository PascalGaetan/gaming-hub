import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { BiChevronDownCircle } from "react-icons/bi";
import PlatformService from "../services/platform-service";
import { Platform } from "../models/Platform";

interface Props {
  onSelectPLatform: (platform: Platform) => void;
}

function PlatformSelector({ onSelectPLatform }: Props) {
  const { platforms, error } = PlatformService();
  return (
    <>
      {error && <Text>{error}</Text>}
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<BiChevronDownCircle />}
        >
          Actions
        </MenuButton>
        <MenuList>
          {platforms.map((platform) => (
            <MenuItem onClick={() => onSelectPLatform(platform)} key={platform.id}>{platform.name}</MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
}

export default PlatformSelector;
