import { Box, Button, Image, Text, useToast } from "@chakra-ui/react";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MainContext } from "../context/Context";
import AHeader from "./AHeader";
import NOImAGE from "../images/no_image.jpg";
import AFooter from "./AFooter";
import "../styles/adminstyle.css"
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
// import { TextField } from "@mui/material";

const ViewDiet = () => {
  let current = new Date();
  const [date, setdate] = useState(current.getDate())
  const [year, setyear] = useState(current.getFullYear())
  const [month, setmonth] = useState(current.getMonth())
  const [loading, setloading] = useState(true);
  const [weekDay, setweekDay] = useState(current.toDateString().split(" ")[0]);
  const [particularDay, setparticularDay] = useState("");

  const dayFunction = () => {
    let day = weekDay
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

  const { id } = useParams();
  const { tocken, viewData, setviewData } = useContext(MainContext);
  const toast = useToast();

  const fetchDietData = async () => {
    let options = {
      url: `https://capstone-project-2022.herokuapp.com/diettable/singleData/${id}`,
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${tocken}`,
      },
    };

    try {
      let response = await axios(options);
      setviewData(response.data.result);
      setloading(false);
    } catch (error) {
      toast({
        title: "Unable To Get The Data",
        duration: 5000,
        isClosable: true,
        position: "bottom",
        status: "error",
      });
    }
  };

  const particularData = async () => {
    let Obj = {};
    let list = viewData.dietData[0];
    for (let key in list) {
      if (key.startsWith(weekDay)) {
        Obj[key] = list[key];
      }
    }
    setparticularDay(Obj);
  };

  useEffect(() => {
    fetchDietData();
    particularData();
  }, [date]);

  const yesterdayFunctioon = () => {
    if(date == 1 ){
      let newValue = current.setMonth(month -1)
      setmonth(current.getMonth())
    }

    if(month == 0 && date == 1 ){
      let newValue = current.setMonth(11)
      let newyear = current.setFullYear(year-1)
      setmonth(current.getMonth())
      setyear(current.getFullYear())
    }
    let newValsue = current.setDate(date-1)
    setdate(current.getDate())
    setweekDay(current.toDateString().split(" ")[0])

  }

  const todayDate = () => {
    setdate(current.getDate())
    setweekDay(current.toDateString().split(" ")[0])
    setyear(current.getFullYear())

  }


  const tomorrowDate = () => {
    console.log(date)
    if(date == 30 || date == 31){
      let newValue = current.setMonth(month + 1)
      let newDateValue = current.setDate(1)
      setmonth(current.getMonth())
      setdate(current.getDate())
      setweekDay(current.toDateString().split(" ")[0])
      return true;
    }


    let newValue = current.setDate(date+1)
    setdate(current.getDate())
    setweekDay(current.toDateString().split(" ")[0])

  }



  return (
    <Box>
      <AHeader  >
        <button>Home</button>
      </AHeader>
      <Box bg="bisque" fontSize={40} d="flex" className="box1">
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
    <Box
    textAlign={"center"}
    mt={5}
    mb={5}
    >
      <Button variant={"solid"} colorScheme="blue" mr={5} onClick={yesterdayFunctioon}>
        Yesterday
      </Button>
      <Button variant={"solid"} colorScheme="blue" mr={5} onClick={todayDate} >
        Today
      </Button>
      <Button variant={"solid"} colorScheme="blue" mr={5} onClick={tomorrowDate}>
        Tomorrow
      </Button>
    </Box>
      {loading ? (
        <Text>Loading ......</Text>
      ) : (
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
                src={particularDay[weekDay + "bi"]}
                alt="No Image"
                boxSize="60px"
                mr={5}
              />
              <Text>{particularDay[weekDay + "b"]}</Text>
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
                src={particularDay[weekDay + "bfi"]}
                alt="No Image"
                boxSize="60px"
                mr={5}
              />
              <Text>{particularDay[weekDay + "bf"]}</Text>
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
                src={particularDay[weekDay + "li"]}
                alt="No Image"
                boxSize="60px"
                mr={5}
              />
              <Text>{particularDay[weekDay + "l"]}</Text>
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
                src={particularDay[weekDay + "di"]}
                alt="No Image"
                boxSize="60px"
                mr={5}
              />
              <Text>{particularDay[weekDay + "d"]}</Text>
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
                src={particularDay[weekDay + "si"]}
                alt="No Image"
                boxSize="60px"
                mr={5}
              />
              <Text>{particularDay[weekDay + "s"]}</Text>
            </Box>
          </Box>
        </Box>
        // <Text>Hi</Text>
      )}
      <AFooter />
    </Box>
  );
};

export default ViewDiet;
