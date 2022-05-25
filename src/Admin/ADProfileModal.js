import React, { useContext } from "react";
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
import { MainContext } from "../context/Context";

const ADProfileModal = ({ children }) => {
  let userlist = JSON.parse(localStorage.getItem("user"))
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      {children ? <MenuItem onClick={onOpen}>Profile</MenuItem> : null}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader d="flex" alignItems={"center"} justifyContent="center">
            <Text fontSize={"40px"}>{userlist.name}</Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody
            d="flex"
            flexDir={"column"}
            alignItems="center"
            justifyContent={"center"}
          >
            <Image
              borderRadius="full"
              boxSize="150px"
              src={userlist.pic}
              alt="userlist pic"
            />
            <Text>{userlist.email}</Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ADProfileModal;
