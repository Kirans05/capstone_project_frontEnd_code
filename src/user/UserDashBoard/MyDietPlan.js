import { Box, Button, Center, Image, Text, useToast } from "@chakra-ui/react";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MainContext } from "../../context/Context";
import UFooter from "./UFooter";
import UHeader from "./UHeader";

const MyDietPlan = () => {
  const nav = useNavigate();
  const toast = useToast();
  const { tocken, myDietPlan, setmyDietPlan } = useContext(MainContext);
  let current = new Date();
  const [date, setdate] = useState(current.getDate());
  const [year, setyear] = useState(current.getFullYear());
  const [month, setmonth] = useState(current.getMonth());
  const [loading, setloading] = useState("nothing");
  const [weekDay, setweekDay] = useState(current.toDateString().split(" ")[0]);
  const [particularDay, setparticularDay] = useState("");

  const fetchMyDiet = async () => {
    let options = {
      url: "https://capstone-project-2022.herokuapp.com/user/displayUserData",
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${tocken}`,
        value: "user",
      },
    };

    try {
      let response = await axios(options);
      console.log(response.data);
      if (response.data.message == "Unable To Display The User data") {
        nav("/dashboard");
      } else {
          if(response.data.result[0].dietPlan.length){
              setmyDietPlan(response.data.result[0]);
              setloading("retrived");
          }else{
            setloading("no_data")
          }
      }
    } catch (error) {
      toast({
        title: "Unable To Display The data",
        duration: 5000,
        isClosable: true,
        position: "bottom",
        status: "error",
      });
    }
  };

  useEffect(() => {
    fetchMyDiet();
  }, []);

  const yesterdayFunctioon = () => {
    if (date == 1) {
      let newValue = current.setMonth(month - 1);
      setmonth(current.getMonth());
    }

    if (month == 0 && date == 1) {
      let newValue = current.setMonth(11);
      let newyear = current.setFullYear(year - 1);
      setmonth(current.getMonth());
      setyear(current.getFullYear());
    }
    let newValsue = current.setDate(date - 1);
    setdate(current.getDate());
    setweekDay(current.toDateString().split(" ")[0]);
  };

  const todayDate = () => {
    setdate(current.getDate());
    setweekDay(current.toDateString().split(" ")[0]);
    setyear(current.getFullYear());
  };

  const tomorrowDate = () => {
    if (date == 30 || date == 31) {
      let newValue = current.setMonth(month + 1);
      let newDateValue = current.setDate(1);
      setmonth(current.getMonth());
      setdate(current.getDate());
      setweekDay(current.toDateString().split(" ")[0]);
      return true;
    }

    let newValue = current.setDate(date + 1);
    setdate(current.getDate());
    setweekDay(current.toDateString().split(" ")[0]);
  };

  const dayFunction = () => {
    let day = weekDay;
    var dayWords;

    if (day == "Sun") {
      dayWords = "Sunday";
      return dayWords;
    } else if (day == "Mon") {
      dayWords = "Monday";
      return dayWords;
    } else if (day == "Tue") {
      dayWords = "Tuesday";
      return dayWords;
    } else if (day == "Wed") {
      dayWords = "Wednesday";
      return dayWords;
    } else if (day == "Thu") {
      dayWords = "Thursday";
      return dayWords;
    } else if (day == "Fri") {
      dayWords = "Friday";
      return dayWords;
    } else if (day == "Sat") {
      dayWords = "Saturday";
      return dayWords;
    } else {
    }
  };

  const removeDietPlan = async () => {
      let options = {
          url:"https://capstone-project-2022.herokuapp.com/user/removeDietPlan",
          method:"PUT",
          headers:{
              "content-type":"application/json",
              Authorization:`Bearer ${tocken}`,
              value:"user"
          },
          data:[]
      }


      try{
        let response = await axios(options)
        if(response.data.message == "SuccessFully Removed Diet Plan"){
            toast({
                title:"SuccessFully Removed the Diet plan",
                duration:5000,
                isClosable:true,
                position:"bottom",
                status:"success"
            })
            setmyDietPlan("")
            nav("/dashboard")
        }else{
            toast({
                title:"Unable to Remove The Diet plan From the list",
                duration:5000,
                isClosable:true,
                position:"bottom",
                status:"error"
            })
        }
      }catch(error){
          toast({
              title:"Unable To Remove The Diet Plan",
              duration:5000,
              isClosable:true,
              position:"bottom",
              status:"error"
          })
      }
  }


  return (
    <Box>
      <UHeader>
        <button>Home</button>
      </UHeader>
      <Box bg="bisque" fontSize={40} d="flex">
        <Text mr={5}>Diet Planner</Text>
        <Text>
          {date}-{month}-{year}
        </Text>
      </Box>
      <Text textAlign={"center"} fontSize={30}>
        {dayFunction()}
      </Text>
      <Text textAlign={"center"} fontSize={30}>
        {date}
      </Text>

      <Box textAlign={"center"} mt={5} mb={5}>
        <Button
          variant={"solid"}
          colorScheme="blue"
          mr={5}
          onClick={yesterdayFunctioon}
        >
          Yesterday
        </Button>
        <Button variant={"solid"} colorScheme="blue" mr={5} onClick={todayDate}>
          Today
        </Button>
        <Button
          variant={"solid"}
          colorScheme="blue"
          mr={5}
          onClick={tomorrowDate}
        >
          Tomorrow
        </Button>
      </Box>

      {loading == "nothing" ? (
        <Text>Loading ......</Text>
      ) : loading == "no_data" ? <Text fontSize={45} textAlign={"center"}>No Diet Plan</Text>
        : (
            <Box d="flex" flexDir={"column"} alignItems={"center"} rowGap={10}>
              <Box
                d="flex"
                flexDir={"column"}
                alignItems={"flex-start"}
                rowGap={5}
                boxShadow={"lg"}
                width={"50%"}
                p={5}
                _hover={{
                  boxShadow: "2xl",
                }}
              >
                <Text>BreakFast</Text>
                <Box
                  w="100%"
                  d="flex"
                  alignItems={"center"}
                  fontSize={20}
                  _hover={{
                    bg: "cyan",
                    cursor: "pointer",
                  }}
                >
                  <Image
                    src={myDietPlan.dietPlan[0].dietData[0][weekDay + "bi"]}
                    alt="No Image"
                    boxSize="60px"
                    mr={5}
                  />
                  <Text>{myDietPlan.dietPlan[0].dietData[0][weekDay + "b"]}</Text>
                </Box>
                <Box
                  d="flex"
                  alignItems={"center"}
                  fontSize={20}
                  w="100%"
                  _hover={{
                    bg: "#EDBD4D",
                    cursor: "pointer",
                  }}
                >
                  <Image
                    src={myDietPlan.dietPlan[0].dietData[0][weekDay + "bfi"]}
                    alt="No Image"
                    boxSize="60px"
                    mr={5}
                  />
                  <Text>{myDietPlan.dietPlan[0].dietData[0][weekDay + "bf"]}</Text>
                </Box>
              </Box>
              <Box
                d="flex"
                flexDir={"column"}
                alignItems={"flex-start"}
                rowGap={5}
                boxShadow={"lg"}
                width={"50%"}
                _hover={{
                  boxShadow: "2xl",
                }}
                p={5}
              >
                <Text>Lunch</Text>
                <Box
                  w="100%"
                  d="flex"
                  alignItems={"center"}
                  fontSize={20}
                  _hover={{
                    bg: "#90FA9A",
                    cursor: "pointer",
                  }}
                >
                  <Image
                    src={myDietPlan.dietPlan[0].dietData[0][weekDay + "li"]}
                    alt="No Image"
                    boxSize="60px"
                    mr={5}
                  />
                  <Text>{myDietPlan.dietPlan[0].dietData[0][weekDay + "l"]}</Text>
                </Box>
              </Box>
              <Box
                d="flex"
                flexDir={"column"}
                alignItems={"flex-start"}
                rowGap={5}
                boxShadow={"lg"}
                _hover={{
                  boxShadow: "2xl",
                }}
                width={"50%"}
                p={5}
              >
                <Text>Dinner</Text>
                <Box
                  w="100%"
                  d="flex"
                  alignItems={"center"}
                  fontSize={20}
                  _hover={{
                    bg: "#9946F9",
                    cursor: "pointer",
                  }}
                >
                  <Image
                    src={myDietPlan.dietPlan[0].dietData[0][weekDay + "di"]}
                    alt="No Image"
                    boxSize="60px"
                    mr={5}
                  />
                  <Text>{myDietPlan.dietPlan[0].dietData[0][weekDay + "d"]}</Text>
                </Box>
              </Box>
              <Box
                d="flex"
                flexDir={"column"}
                alignItems={"flex-start"}
                rowGap={5}
                _hover={{
                  boxShadow: "2xl",
                }}
                boxShadow={"lg"}
                width={"50%"}
                p={5}
              >
                <Text>Snacks</Text>
                <Box
                  w="100%"
                  d="flex"
                  alignItems={"center"}
                  fontSize={20}
                  _hover={{
                    bg: "#DE6EFA",
                    cursor: "pointer",
                  }}
                >
                  <Image
                    src={myDietPlan.dietPlan[0].dietData[0][weekDay + "si"]}
                    alt="No Image"
                    boxSize="60px"
                    mr={5}
                  />
                  <Text>{myDietPlan.dietPlan[0].dietData[0][weekDay + "s"]}</Text>
                </Box>
              </Box>
            </Box>
          )}
      <Box
      d="flex"
      justifyContent={"center"}
      mt={10}
      mb={10}
      >
          {
              loading == "no_data" ? null 
              : loading == "nothing" ? null 
              : <Button
              variant={"solid"}
              colorScheme="red"
              onClick={removeDietPlan}
              >
                  Remove DietPlan
                </Button>
          }
      
      </Box>
      {
        loading == "no_data"  ?  
        <Box mt={220}>
          <UFooter />
        </Box>
        : <UFooter />
      }
      
    </Box>
  );
};

export default MyDietPlan;
