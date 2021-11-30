import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

const LightThemeButton = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <IconButton aria-label="Toggle Light Mode"
      colorScheme={useColorModeValue("purple", "orange")}
      icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
      onClick={toggleColorMode}>
      </IconButton>
  )
}

export default LightThemeButton;