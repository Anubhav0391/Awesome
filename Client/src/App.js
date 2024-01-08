import { Box, Center } from "@chakra-ui/react";
import Navbar from "./component/Navbar";
import AllRoutes from "./Routes/Routes";
import { useState } from "react";

function App() {
  const [opacity, setOpacity] = useState(1);
  return (
    <>
      <Navbar setOpacity={setOpacity} />
      <Box
        opacity={opacity}
        position="relative"
        top="70px"
        bg="#ECEFF1"
        paddingTop={10}
      >
        <Center>{<AllRoutes />}</Center>
        
      </Box>
    </>
  );
}

export default App;
