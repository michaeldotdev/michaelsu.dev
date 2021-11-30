import { Box, Button, Container, Divider, Heading, Text } from "@chakra-ui/react";
import NextLink from "next/link"

const NotFound = () => {
  return (
    <Container mt={10}>
      <Heading as="h1">Not Found</Heading>
      <Text>What you are not are looking for does not exist.</Text>

      <Divider my={6} />

      <Box align="center" my={6}>
        <NextLink href="/">
          <Button colorScheme="blue">Return to home</Button>
        </NextLink>
      </Box>
    </Container>
  )
}

export default NotFound;