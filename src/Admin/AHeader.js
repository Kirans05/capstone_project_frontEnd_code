import {
    Avatar,
    Box,
    Button,
    Image,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Text,
    useDisclosure,
  } from "@chakra-ui/react";
  import React, { useContext } from "react";
  import { ChevronDownIcon } from "@chakra-ui/icons";
  import { useNavigate } from "react-router-dom";
import { MainContext } from "../../src/context/Context";
import ADProfileModal from "./ADProfileModal";
  
  const AHeader = ({children}) => {
    const nav = useNavigate();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const {user,setuser} = useContext(MainContext)
  
    const logOutFunction = () => {
      localStorage.removeItem("user");
      localStorage.removeItem("tocken");
      nav("/");
    };
  
    return (
      <>
        <Box
          bg="#22A0F7"
          w="100%"
          p={4}
          color="black"
          d="flex"
          flexDir={"row"}
          alignItems="center"
          justifyContent={"space-between"}
          className="Aheader"
        >
          <Text
        fontSize={40}
        fontStyle={"italic"}

          >
              HealthFit
            </Text>
          <Box  w="fit-content" p={4} color="black"
          d="flex"
          flexDir={"row"}
          alignItems={"center"}
          justifyContent="center"
          >
            {
              children ?  <Button colorScheme='red' size='md'  mr={3} onClick={()=>nav("/adminDashboard")}>
              Home
            </Button>
            : null
            }
            <Menu>
              <MenuButton rightIcon={<ChevronDownIcon />}>
                <Avatar
                  name="Kola Tioluwani"
                  src="https://bit.ly/tioluwani-kolawole"
                />
              </MenuButton>
              <MenuList>
                <ADProfileModal>
                  <MenuItem>Profile</MenuItem>
                </ADProfileModal>
                <MenuItem onClick={logOutFunction}>LogOut</MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
       
      </>
    );
  };
  
  export default AHeader;
  