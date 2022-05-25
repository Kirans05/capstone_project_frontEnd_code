import {
  Avatar,
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { MdAccountCircle } from "react-icons/md";
import AdminLogin from "../Admin/AdminLogin";
import AdminSignup from "../Admin/AdminSignup";
import LoginPage from "./pages/Login";
import SignUpPage from "./pages/SignUpPage";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      bg="#22A0F7"
      w="100%"
      p={7}
      color="white"
      d="flex"
      flexDir={"row"}
      alignItems={"center"}
      justifyContent={"flex-end"}
      className="homeHeader"
    >
      |
      <Text
        mr={12}
        mt={0}
        mb={0}
        onClick={onOpen}
        ml={5}
        _hover={{
          cursor: "pointer",
        }}
        className="homeHeaderfont"
      >
        SignUp / Login / AdminLogin
      </Text>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>SignUp / Login</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Tabs variant="soft-rounded" colorScheme="green" isFitted>
              <TabList>
                <Tab>Login</Tab>
                <Tab>SignUp</Tab>
                <Tab>Admin Login</Tab>
                <Tab>Admin SignUp</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <LoginPage />
                </TabPanel>
                <TabPanel>
                  <SignUpPage />
                </TabPanel>
                <TabPanel>
                  <AdminLogin />
                </TabPanel>
                <TabPanel>
                  <AdminSignup />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Header;
