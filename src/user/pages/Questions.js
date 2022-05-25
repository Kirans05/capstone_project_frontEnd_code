import {
  Box,
  Button,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MainContext } from "../../context/Context";
import UHeader from "../UserDashBoard/UHeader";

const Questions = () => {
  const nav = useNavigate()
  const toast = useToast();
  const [gender, setGender] = useState(null);
  const [active, setActive] = useState(null);
  const [weight, setWeight] = useState(null);
  const [height, setHeight] = useState(null);
  const [age, setAge] = useState(null);
  const [activeValue, setactiveValue] = useState(1.2);
  const {tocken, fetchAgain, setfetchAgain} = useContext(MainContext)

  const submitHandler = async () => {
    setfetchAgain(!fetchAgain)
    if (
      gender == null ||
      active == null ||
      weight == 0 ||
      height == 0 ||
      age == 0
    ) {
      toast({
        title: "Please Fill All The Fields",
        duration: 5000,
        isClosable: true,
        position: "bottom",
        status: "error",
      });
    } else {
      if (active == "Not Active") {
        setactiveValue(1.2);
      } else if (active == "Light Activity") {
        setactiveValue(1.375);
      } else if (active == "Moderate Activity") {
        setactiveValue(1.55);
      } else if (active == "Very Active") {
        setactiveValue(1.9);
      }
      let BMR 
      let AMR
      if (gender == "female") {
         BMR = 655.1 + 9.563 * weight + 1.85 * height - 4.676 * age;
         AMR = BMR * activeValue;
         AMR = AMR.toFixed(0) 
        } else {
          BMR = 66.47 + 13.75 * weight + 5.003 * height - 6.755 * age;
          AMR = BMR * activeValue;
          AMR = AMR.toFixed(0) 
      }

      let options = {
        url:"https://capstone-project-2022.herokuapp.com/user/updateCalories",
        method:"POST",
        headers:{
          "content-type":"application/json",
          Authorization:`Bearer ${tocken}`,
          value:"user"
        },
        data:{
            gender,
            active,
            weight,
            height,
            AMR
        }
      }

      try{
        let response = await axios(options)
        console.log(response.data)
        if(response.data.message == 'Calories Data Updated SuccessFully'){
          nav("/dashboard")
          setfetchAgain(!fetchAgain)
        }else{
          toast({
            title:"Unable To Update The Calories",
            duration:5000,
            isClosable:true,
            position:"bottom",
            status:"error"
          })
        }
      }catch(error){
        toast({
          title:"Unable To Upadte The Calories Data",
          duration:5000,
          isClosable:true,
          position:"bottom",
          status:"error"
        })
      }



    }
  };

  return (
    <Box
    d="flex"
    flexDirection={"column"}
    alignItems={"center"}
    >
      <UHeader />
      <Box
      d="flex"
      flexDirection={"column"}
      alignItems={"center"}
      rowGap={5}
      mt={10}
      boxShadow={"dark-lg"}
      padding={10}
      >
        <Text
        fontSize={30}
        >
          About You
          </Text>
        <RadioGroup onChange={setGender} value={gender}>
          <Stack direction="row">
            <Text>Gender</Text>
            <Radio value="male">Male</Radio>
            <Radio value="female">Female</Radio>
          </Stack>
        </RadioGroup>
        <Text>What's Your Age</Text>
        <Input
          type={"number"}
          placeholder="Enter Your Age"
          size="md"
          width={"50%"}
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <Text>What's Your Height</Text>
        <Input
          type={"number"}
          placeholder="Enter Your Height in cm"
          size="md"
          width={"50%"}
          value={height}
          onChange={(e) => {
            setHeight(e.target.value);
          }}
        />
        <Text>What's Your Weight</Text>
        <Input
          type={"number"}
          placeholder="Enter Your Weight in Kg"
          size="md"
          width={"50%"}
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <Text>How Active Re You ?</Text>
        <RadioGroup onChange={setActive} value={active}>
          <Stack direction="row">
            <Radio value="Not Active">Not Active</Radio>
            <Radio value="Light Activity">Light Activity</Radio>
            <Radio value="Moderate Activity">Moderate Activity</Radio>
            <Radio value="Very Active">Very Active</Radio>
          </Stack>
        </RadioGroup>

        <Button variant={"solid"} colorScheme={"green"} onClick={submitHandler}>
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default Questions;
