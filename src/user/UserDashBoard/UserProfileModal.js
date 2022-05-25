import {
    Button,
    Image,
    MenuItem,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Text,
    useDisclosure,
    useToast,
  } from "@chakra-ui/react";
  import axios from "axios";
  import React, { useContext, useEffect, useState } from "react";
  import { MainContext } from "../../context/Context";
  
  const UserProfileModal = ({ children }) => {
    const toast = useToast()
    const { isOpen, onOpen, onClose } = useDisclosure();
   
  
    let userlist = JSON.parse(localStorage.getItem("user"))
   
  
    return (
      <>
        {children ? <MenuItem onClick={onOpen}>Profile</MenuItem> : null}
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader fontSize={30} textAlign={"center"}>
              {userlist.name}
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody d="flex" flexDir={"column"} alignItems={"center"}>
              <Image
                borderRadius="full"
                boxSize="150px"
                src={userlist.pic}
                alt="userlist Image"
              />
              <Text fontSize={25}>{userlist.email}</Text>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  };
  
  export default UserProfileModal;
  