import { Box } from "@chakra-ui/react";
import React from "react";
import Abody from "./Abody";
import AFooter from "./AFooter";
import AHeader from "./AHeader";

const ADashBoard = () => {
  return <Box>
    <AHeader />
    <Abody />
    <AFooter />
  </Box>;
};

export default ADashBoard;
