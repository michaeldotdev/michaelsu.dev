import { Box, Container, Flex, Heading, IconButton, Link, Menu, MenuButton, MenuItem, MenuList, Stack, useColorModeValue } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import NavbarTitle from "./navbarTitle";
import NextLink from "next/link";
import LightThemeButton from "./light-button";

const LinkItem = ({children, href, path }) => {
  const active = path === href;
  const inactiveColor = useColorModeValue("gray200", "whiteAlpha.900");

  return (
    <NextLink href={href}>
      <Link bg={active ? "glassTeal" : undefined} color={active ? "#202023" : inactiveColor} p={3}>
        {children}
      </Link>
    </NextLink>
  )
}

const Navbar = props => {
  const { path } = props;
  
  return (
    <Box as="nav"
      bg={useColorModeValue("#ffffff40", "#20202380")}
      position="fixed" style={{ backdropFilter: "blur(10px)" }}
      w="100%"
      Index={1}
      {...props}
    >
      <Container align="center" display="flex" justify="space-between" maxW="container.md" p={2} wrap="wrap">
        <Flex align="center" mr={5}>
          <Heading as="h1" letterSpacing={"tighter"} size="lg">
            <NavbarTitle />
          </Heading>
        </Flex>
        <Stack
          alignItems="center"
          direction={{ base: "column", md: "row" }}
          display={{ base: 'none', md: "flex" }}
          flexGrow={1}
          mt={{base: 4, nmd: 0}}
          width={{ base: "full", md: 'auto' }}>
          <LinkItem href="/works" path={path}>Works</LinkItem>
          <LinkItem href="/Posts" path={path}>Posts</LinkItem>
        </Stack>

        <Box align="right" flex={1}>
          <LightThemeButton />
          <Box display={{ base: "inline-block", md: "none" }} ml={2}>
            <Menu>
              <MenuButton aria-label="Options" as={IconButton} icon={<HamburgerIcon />} variant="ouline" ></MenuButton>
              <MenuList>
                <NextLink href="/" passHref>
                  <MenuItem as={Link}>About</MenuItem>
                </NextLink>
                <NextLink href="/works" passHref>
                  <MenuItem as={Link}>Works</MenuItem>
                </NextLink>
                <NextLink href="/post" passHref>
                  <MenuItem as={Link}>Posts</MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar;