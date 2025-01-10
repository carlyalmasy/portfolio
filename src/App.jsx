import { React } from "react";
import { Box, Button, HStack, Text } from "@chakra-ui/react";
import { Link, Routes, Route, BrowserRouter } from "react-router-dom";

function Home() {
  return (
    <Box textAlign="center" fontSize="xl" p={5}>
      <Text mb={4}>🚧 Coming Soon 🚧</Text>
      <Text mb={5}>Work in progress. Stay tuned!</Text>
    </Box>
  );
}

function About() {
  return (
    <Box textAlign="center" fontSize="xl" p={5}>
      <Text mb={4}>Welcome to the About Page!</Text>
      <Link to="/">
        <Button colorScheme="blue">Go to Home Page</Button>
      </Link>
    </Box>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
