import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import HealthLogo from "../../images/logo.jpg";
import "../../styles/homePage.css"

const UserBody = () => {
  return (
    <Box
      d="flex"
      flexDir={"row"}
      justifyContent={"space-between"}
      bg={"blue.600"}
      
    >
      <Box
      p={10}
      >
        <Text fontSize={100} m={0} fontStyle={"italic"} className={"homeBodyPage"}>HealthFit</Text>
        <Text fontSize={40} color={"#E66206"} className={"textHomePageBody"}>Helping people lead healthy and happy lives.</Text>
        <Text fontSize={40} color={"red"} className={"textHomePageBody"}>Happiness begins with good health</Text>
      </Box>
      <Image boxSize="500px" src={HealthLogo} alt="Dom's Pizza" className="homePageImage"/>
    </Box>
  );
};

export default UserBody;
