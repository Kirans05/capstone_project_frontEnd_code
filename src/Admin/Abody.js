import {
  Box,
  Button,
  Image,
  list,
  Text,
  useToast,
  Wrap,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { InputLabel, MenuItem, Select, FormControl } from "@mui/material";
import { DeleteIcon, EditIcon, ViewIcon } from "@chakra-ui/icons";
import { MainContext } from "../context/Context";
import {} from "@chakra-ui/icons";

const Abody = () => {
  const nav = useNavigate();
  const { tocken } = useContext(MainContext);
  const toast = useToast();
  const [data, setdata] = useState([]);

  let { dietPlans, setdietPlans } = useContext(MainContext);

  const handleChange = (e) => {
    // setvarient(e.target.value);
  };

  const fetchAllDietplans = async () => {
    let options = {
      url: "https://capstone-project-2022.herokuapp.com/diettable/allDatas",
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${tocken}`,
      },
    };

    try {
      console.log("first")
      let response = await axios(options);
      console.log(response.data);
      setdietPlans(response.data.result);
    } catch (error) {
      toast({
        title: "Unable to Display The Diet Data",
        duration: 5000,
        isClosable: true,
        position: "bottom",
        status: "error",
      });
    }
  };

  useEffect(() => {
    fetchAllDietplans();
  }, []);


  const deleteHandler  = async (list_id) => {
    let options = {
      url:`https://capstone-project-2022.herokuapp.com/diettable/delete/${list_id}`,
      method:"DELETE",
      headers:{
        "content-type":"application/json",
        Authorization:`Bearer ${tocken}`
      }
    }


    try{
      let response = await axios(options)
      console.log(response.data) 
      fetchAllDietplans()
    }catch(error){
      toast({
        title:"Unable To Delete The Diet Plan",
        duration:5000,
        isClosable:true,
        status:"error",
        position:"bottom"
      })
    }
  }

  return (
    <Box bg="white" color={"black"}>
      <Box mt={4} mb={5}>
        <Button
          colorScheme="teal"
          size="md"
          onClick={() => nav("/adminDashboard")}
          mr={5}
        >
          Home
        </Button>
        <Button
          colorScheme="teal"
          size="md"
          onClick={() => nav("/dietPlan")}
          mr={5}
        >
          Diet Plan
        </Button>
        <Button
          colorScheme="teal"
          size="md"
          mr={5}
            onClick={() =>nav("/userDetails")}
        >
          Users
        </Button>
      </Box>
      <Box>
        {dietPlans == 5 ? (
          <Text>No Data To Display</Text>
        ) : (
          <Box
            d="flex"
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"space-around"}
            flexWrap={"Wrap"}
            rowGap={10}
            columnGap={5}
          >
            {dietPlans.map((item, index) => {
              return (
                <Box key={index} boxShadow="dark-lg" p={3}
                d="flex"
                flexDir={"column"}
                rowGap={3}
                >
                  <Text>{item.dietName}</Text>
                  <Box
                  d="flex"
                  columnGap={5}
                  >
                    <ViewIcon onClick={() => nav(`/viewDiet/${item._id}`)} 
                    _hover={{
                      cursor:"pointer"
                    }}
                    fontSize={30}
                    />
                    <EditIcon onClick={() => nav(`/editDiet/${item._id}`)} 
                    _hover={{
                      cursor:"pointer"
                    }}
                    fontSize={30}/>
                    <DeleteIcon  
                    _hover={{
                      cursor:"pointer"
                    }}
                    fontSize={30}
                    onClick={() => deleteHandler(item._id)}
                    />
                  </Box>
                </Box>
              );
            })}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Abody;
