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
import UserProfileModal from "./UserProfileModal";
import { MainContext } from "../../context/Context";
  
  const UHeader = ({children}) => {
    const nav = useNavigate();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const {user,setuser, setfetchAgain, fetchAgain, setdietPlans} = useContext(MainContext)
  
    const logOutFunction = () => {
      localStorage.removeItem("user");
      localStorage.removeItem("tocken");
      setfetchAgain(!fetchAgain)
      setdietPlans(5)
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
              children ?  <Button colorScheme='red' size='md'  mr={3} onClick={()=>nav("/dashboard")}>
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
                <UserProfileModal>
                  <MenuItem>Profile</MenuItem>
                </UserProfileModal>
                <MenuItem onClick={logOutFunction}>LogOut</MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
       
      </>
    );
  };
  
  export default UHeader;
  