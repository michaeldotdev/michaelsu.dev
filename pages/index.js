import { Box, Container, Heading } from '@chakra-ui/react';

const Page = () => {
  return (
    <Container>
      <Box align="center" bg="lightgrey" borderRadius="lg" mb={6} p={3}>
        Hello! My name is Michael, nice to meet you! 
      </Box>

      <Box display='flex'>
        <Box flexGrow={1}>
          <Heading as="h2" variant='page-title'>
            Michael Su
          </Heading>
          <p>(Developer / Photographer)</p>
        </Box>
      </Box>
    </Container>
  )
}

export default Page