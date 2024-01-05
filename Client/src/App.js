import { Box, Center } from "@chakra-ui/react";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import AllRoutes from "./Routes/Routes";

function App() {
  return (
    <>
      <Navbar />
      <Box
        position="relative"
        top="70px"
        left="0"
        right="0"
        bottom="0"
        bg="#ECEFF1"
        paddingTop={10}
      >
        <Center>{<AllRoutes />}</Center>
        <Footer />
      </Box>
    </>
  );
}

export default App;
