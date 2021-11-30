import { Box, Button, Container, Heading, Link,List, ListItem, ListIcon, useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";
import { AiOutlineMail } from "react-icons/ai"
import { FaLinkedin } from "react-icons/fa";

import Paragraph from "../components/paragraph";

const Page = () => {
  return (
    <Container>
      <Box align="center" bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")} borderRadius="lg" mb={6} mt={6} p={3}>
        Hello! Nice to meet you! 
      </Box>
      <Box display="flex">
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Michael Su
          </Heading>
          <p>(Software Engineer / Photographer)</p>
        </Box>
      </Box>

      <Heading as="h3" variant="section-title" mt={10}>
        Work
      </Heading>
      <Paragraph>
        I love learning about how a something functions from start to the end. As a Software Engineer, I am passionate in
        building/working on product/service that has impact on the life of other and solving real-life problems with code.
        When not working with code, I enjoy traveling and capturing memories with my camera. 
      </Paragraph>
      <Box align="center" my={8}>
        <NextLink href="/works">
          <Button colorScheme="blue">My Portfolio</Button>
        </NextLink>
      </Box>

      <Heading as="h3" mt={10} variant="section-title">
        What I am Learning
      </Heading>
      <Paragraph>
        Photography, Drawing
      </Paragraph>

      <Heading as="h3" mt={10} variant="section-title">
        Get in touch!
      </Heading>

      <List>
        <ListItem>
          <ListIcon as={AiOutlineMail} />
          <Link href="mailto:michaelsu.jobs@gmail.com" target="_blank">
          <Button colorScheme="blue" variant="ghost">Email me!</Button>
          </Link>
        </ListItem>
        <ListItem>
          <ListIcon as={FaLinkedin} />
          <Link href="https://www.linkedin.com/in/michael-su-407a10157" target="_blank">
            <Button colorScheme="blue" variant="ghost">My LinkedIn</Button>
          </Link>
        </ListItem>
      </List>


    </Container>
  )
}

export default Page