import Link from "next/link";
import { Text, useColorModeValue } from "@chakra-ui/react";
// import styled from "@emotion/styled";

// const navTitle = styled.span`
// align-items: center;
// display: inline-flex;
// font-size: 18px;
// font-weight: bold;
// height: 30px;
// line-height: 20px;
// padding: 10px;
// `

const NavbarTitle = () => {
  return (
    <Link href="/">
      <a href="">
        <Text color={useColorModeValue("gray.800", "whiteAlpha.900")} fontFamily="M PLUS Rounded 1c" fontWeight="bold" ml={3}>Michael Su</Text>
      </a>
    </Link>
  )
}

export default NavbarTitle;