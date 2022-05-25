import { Box, Button, Text, useToast } from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import { MainContext } from "../../context/Context";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Userbody = () => {
  const nav = useNavigate()
  const toast = useToast();
  let { dietPlans, setdietPlans, tocken, selectedDiet, setselectedDiet } =
    useContext(MainContext);

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
      let response = await axios(options);
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

  const dietClicked = async (list) => {
    let options = {
      url:"https://capstone-project-2022.herokuapp.com/user/newDietPlan",
      method:"PUT",
      headers:{
        "content-type":"application/json",
        Authorization:`Bearer ${tocken}`,
        value:"user"
      },
      data:list
    } 

    try{
      let response  = await axios(options)
      console.log(response.data)
      if(response.data.message == "Diet Plan Added SuccessFully"){
          toast({
            title:"Successfully Added New diet plan",
            duration:5000,
            isClosable:true,
            position:"bottom",
            status:"success"
          })
          nav("/myDietPlan")
      }else if(response.data.message == "Already Diet Plan Exists"){
        toast({
          title:"Already Diet Plan Exists",
          duration:5000,
          isClosable:true,
          position:"bottom",
          status:"error",
        })
      }else{  
        toast({
          title:"Unable To Start The Diet",
          duration:5000,
          isClosable:true,
          position:"bottom",
          status:"warning"
        })
      }
    }catch(error){
      toast({
        title:"Unable To Add Diet Plan",
        duration:5000,
        isClosable:true,
        position:"bottom",
        status:"error"
      })
    }
  };

  return (
    <Box
    mt={5}
    >
      <Box>
        <Button variant={"solid"} colorScheme="blue" mr={5}>
          Home
        </Button>
        <Button variant={"solid"} colorScheme="blue" mr={5} onClick={()=>nav("/myDetails")}>
          My Details
        </Button>
        <Button variant={"solid"} colorScheme="blue" mr={5} onClick={() => nav("/myDietPlan")}>
          My DietPlans
        </Button>
      </Box>
      <br />
      <br />
      <>
        {dietPlans == 5 ? (
          <Text>No Data To Display</Text>
        ) : (
          <Box d="flex" flexDir={"column"} alignItems={"center"} rowGap={10}>
            {dietPlans.map((item, index) => {
              return (
                <Box
                  key={index}
                  boxShadow={"lg"}
                  _hover={{
                    boxShadow: "dark-lg",
                    bg: "black",
                    color: "red",
                  }}
                  width="50%"
                  height={"50%"}
                  d="flex"
                  justifyContent={"space-evenly"}
                >
                  {item.dietName}
                  <Button onClick={() => dietClicked(item)}>Start Diet</Button>
                </Box>
              );
            })}
          </Box>
        )}
      </>
    </Box>
  );
};

export default Userbody;
