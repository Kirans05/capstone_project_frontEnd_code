import {
  Box,
  Button,
  FormControl,
  Input,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MainContext } from "../context/Context";
import AHeader from "./AHeader";

const NewDietPlan = () => {
  const nav = useNavigate();

  const toast = useToast()
  const {tocken} = useContext(MainContext)

  const [inputValue, setinputValue] = useState({
    m7_30AM: "",
    m9_00AM: "",
    m12_00PM: "",
    m2_30PM: "",
    m4_30AM: "",
    m6_00PM: "",
    m8_30PM: "",
    m10_00AM: "",
    t7_30AM: "",
    t9_00AM: "",
    t12_00PM: "",
    t2_30PM: "",
    t4_30PM: "",
    t6_00PM: "",
    t8_30PM: "",
    t10_00PM: "",
    W7_30AM: "",
    W9_00AM: "",
    W12_00PM: "",
    W2_30PM: "",
    W4_30PM: "",
    W6_00PM: "",
    W8_30PM: "",
    W10_00PM: "",
    T7_30AM: "",
    T9_00AM: "",
    T12_00PM: "",
    T2_30PM: "",
    T4_30PM: "",
    T6_00PM: "",
    T8_30PM: "",
    T10_00PM: "",
    F7_30AM: "",
    F9_00AM: "",
    F12_00PM: "",
    F2_30PM: "",
    F4_30PM: "",
    F6_00PM: "",
    F8_30PM: "",
    F10_00PM: "",
    SAT7_30AM: "",
    SAT9_00AM: "",
    SAT12_00PM: "",
    SAT2_30PM: "",
    SAT4_30PM: "",
    SAT6_00PM: "",
    SAT8_30PM: "",
    SAT10_00PM: "",
    SUN7_30AM: "",
    SUN9_00AM: "",
    SUN12_00PM: "",
    SUN2_30PM: "",
    SUN4_30PM: "",
    SUN6_00PM: "",
    SUN8_30PM: "",
    SUN10_00PM: "",
  });
  const [dietName, setdietName] = useState("")

  const inputChangeHandler = (e) => {
    setinputValue({ ...inputValue, [e.target.name]: e.target.value });
  };


  const submitNewDiet = async () => {
      let options = {
        url:"https://capstone-project-2022.herokuapp.com/diettable",
        headers:{
          "content-type":"application/json",
          Authorization:`Bearer ${tocken}`
        },
        data:{
          dietData:inputValue,
          dietName:dietName
        },
        method:"POST"
      }



      try{
        let response = await axios(options)
        console.log(response.data)
        
      }catch(error){
        toast({
          title:"Unable To Add The data",
          duration:5000,
          isClosable:true,
          position:"bottom",
          status:"error"
        })
      }

  }


  const dietInputHandler = (e) => {
    setdietName(e.target.value)
  }

  return (
    <Box>
      <AHeader>
        <Button
          colorScheme="teal"
          size="md"
          onClick={() => nav("/adminDashboard")}
          mr={5}
        >
          Home
        </Button>
      </AHeader>
      <br />
      <br />

      <Box bg="white" color={"black"}>
        <FormControl
          d="flex"
          flexDir={"column"}
          rowGap={5}
        >
          <Input placeholder="Enter Diet Name" size="lg" type={"text"} name="dietname" value={dietName} onChange={dietInputHandler}/>
          <table width={"50%"}>
            <caption>Monday</caption>
            <thead>
              <tr>
                <td>Timings</td>
                <td>Meals</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>7:30 AM</td>
                <td>
                  <Input
                    type={"text"}
                    placeholder={"Enter Diet"}
                    name="m7_30AM"
                    value={inputValue.m7_30AM}
                    onChange={inputChangeHandler}
                  />
                </td>
              </tr>
              <tr>
                <td>9:00 AM</td>
                <td>
                  <Input
                    type={"text"}
                    placeholder={"Enter Diet"}
                    name="m9_00AM"
                    value={inputValue.m9_00AM}
                    onChange={inputChangeHandler}
                  />
                </td>
              </tr>
              <tr>
                <td>12:00 PM</td>
                <td>
                  <Input
                    type={"text"}
                    placeholder={"Enter Diet"}
                    name="m12_00PM"
                    value={inputValue.m12_00PM}
                    onChange={inputChangeHandler}
                  />
                </td>
              </tr>
              <tr>
                <td>2:30 AM</td>
                <td>
                  <Input
                    type={"text"}
                    placeholder={"Enter Diet"}
                    name="m2_30PM"
                    value={inputValue.m2_30PM}
                    onChange={inputChangeHandler}
                  />
                </td>
              </tr>
              <tr>
                <td>4:30 AM</td>
                <td>
                  <Input
                    type={"text"}
                    placeholder={"Enter Diet"}
                    name="m4_30AM"
                    value={inputValue.m4_30AM}
                    onChange={inputChangeHandler}
                  />
                </td>
              </tr>
              <tr>
                <td>6:00 AM</td>
                <td>
                  <Input
                    type={"text"}
                    placeholder={"Enter Diet"}
                    name="m6_00PM"
                    value={inputValue.m6_00PM}
                    onChange={inputChangeHandler}
                  />
                </td>
              </tr>
              <tr>
                <td>8:30 AM</td>
                <td>
                  <Input
                    type={"text"}
                    placeholder={"Enter Diet"}
                    name="m8_30PM"
                    value={inputValue.m8_30PM}
                    onChange={inputChangeHandler}
                  />
                </td>
              </tr>
              <tr>
                <td>10:00 AM</td>
                <td>
                  <Input
                    type={"text"}
                    placeholder={"Enter Diet"}
                    name="m10_00AM"
                    value={inputValue.m10_00AM}
                    onChange={inputChangeHandler}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          <br />

          <table width={"50%"}>
            <caption>Tuesday</caption>
            <thead>
              <tr>
                <td>Timings</td>
                <td>Meals</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>7:30 AM</td>
                <td>
                  <Input
                    type={"text"}
                    placeholder={"Enter Diet"}
                    name="t7_30AM"
                    value={inputValue.t7_30AM}
                    onChange={inputChangeHandler}
                  />
                </td>
              </tr>
              <tr>
                <td>9:00 AM</td>
                <td>
                  <Input
                    type={"text"}
                    placeholder={"Enter Diet"}
                    name="t9_00AM"
                    value={inputValue.t9_00AM}
                    onChange={inputChangeHandler}
                  />
                </td>
              </tr>
              <tr>
                <td>12:00 PM</td>
                <td>
                  <Input
                    type={"text"}
                    placeholder={"Enter Diet"}
                    name="t12_00PM"
                    value={inputValue.t12_00PM}
                    onChange={inputChangeHandler}
                  />
                </td>
              </tr>
              <tr>
                <td>2:30 PM</td>
                <td>
                  <Input
                    type={"text"}
                    placeholder={"Enter Diet"}
                    name="t2_30PM"
                    value={inputValue.t2_30PM}
                    onChange={inputChangeHandler}
                  />
                </td>
              </tr>
              <tr>
                <td>4:30 PM</td>
                <td>
                  <Input
                    type={"text"}
                    placeholder={"Enter Diet"}
                    name="t4_30PM"
                    value={inputValue.t4_30PM}
                    onChange={inputChangeHandler}
                  />
                </td>
              </tr>
              <tr>
                <td>6:00 PM</td>
                <td>
                  <Input
                    type={"text"}
                    placeholder={"Enter Diet"}
                    name="t6_00PM"
                    value={inputValue.t6_00PM}
                    onChange={inputChangeHandler}
                  />
                </td>
              </tr>
              <tr>
                <td>8:30 PM</td>
                <td>
                  <Input
                    type={"text"}
                    placeholder={"Enter Diet"}
                    name="t8_30PM"
                    value={inputValue.t8_30PM}
                    onChange={inputChangeHandler}
                  />
                </td>
              </tr>
              <tr>
                <td>10:00 PM</td>
                <td>
                  <Input
                    type={"text"}
                    placeholder={"Enter Diet"}
                    name="t10_00PM"
                    value={inputValue.t10_00PM}
                    onChange={inputChangeHandler}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          <br />

          <table width={"50%"}>
            <caption>Wednesday</caption>
            <thead>
              <tr>
                <td>Timings</td>
                <td>Meals</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>7:30 AM</td>
                <td>
                  <Input
                    type={"text"}
                    placeholder={"Enter Diet"}
                    name="W7_30AM"
                    value={inputValue.W7_30AM}
                    onChange={inputChangeHandler}
                  />
                </td>
              </tr>
              <tr>
                <td>9:00 AM</td>
                <td>
                  <Input
                    type={"text"}
                    placeholder={"Enter Diet"}
                    name="W9_00AM"
                    value={inputValue.W9_00AM}
                    onChange={inputChangeHandler}
                  />
                </td>
              </tr>
              <tr>
                <td>12:00 PM</td>
                <td>
                  <Input
                    type={"text"}
                    placeholder={"Enter Diet"}
                    name="W12_00PM"
                    value={inputValue.W12_00PM}
                    onChange={inputChangeHandler}
                  />
                </td>
              </tr>
              <tr>
                <td>2:30 PM</td>
                <td>
                  <Input
                    type={"text"}
                    placeholder={"Enter Diet"}
                    name="W2_30PM"
                    value={inputValue.W2_30PM}
                    onChange={inputChangeHandler}
                  />
                </td>
              </tr>
              <tr>
                <td>4:30 PM</td>
                <td>
                  <Input
                    type={"text"}
                    placeholder={"Enter Diet"}
                    name="W4_30PM"
                    value={inputValue.W4_30PM}
                    onChange={inputChangeHandler}
                  />
                </td>
              </tr>
              <tr>
                <td>6:00 PM</td>
                <td>
                  <Input
                    type={"text"}
                    placeholder={"Enter Diet"}
                    name="W6_00PM"
                    value={inputValue.W6_00PM}
                    onChange={inputChangeHandler}
                  />
                </td>
              </tr>
              <tr>
                <td>8:30 PM</td>
                <td>
                  <Input
                    type={"text"}
                    placeholder={"Enter Diet"}
                    name="W8_30PM"
                    value={inputValue.W8_30PM}
                    onChange={inputChangeHandler}
                  />
                </td>
              </tr>
              <tr>
                <td>10:00 PM</td>
                <td>
                  <Input
                    type={"text"}
                    placeholder={"Enter Diet"}
                    name="W10_00PM"
                    value={inputValue.W10_00PM}
                    onChange={inputChangeHandler}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          <br />

          <table width={"50%"}>
            <caption>Thursday</caption>
            <thead>
              <tr>
                <td>Timings</td>
                <td>Meals</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>7:30 AM</td>
                <td>
                  <Input
                    type={"text"}
                    placeholder={"Enter Diet"}
                    name="T7_30AM"
                    value={inputValue.T7_30AM}
                    onChange={inputChangeHandler}
                  />
                </td>
              </tr>
              <tr>
                <td>9:00 AM</td>
                <td>
                  <Input
                    type={"text"}
                    placeholder={"Enter Diet"}
                    name="T9_00AM"
                    value={inputValue.T9_00AM}
                    onChange={inputChangeHandler}
                  />
                </td>
              </tr>
              <tr>
                <td>12:00 PM</td>
                <td>
                  <Input
                    type={"text"}
                    placeholder={"Enter Diet"}
                    name="T12_00PM"
                    value={inputValue.T12_00PM}
                    onChange={inputChangeHandler}
                  />
                </td>
              </tr>
              <tr>
                <td>2:30 PM</td>
                <td>
                  <Input
                    type={"text"}
                    placeholder={"Enter Diet"}
                    name="T2_30PM"
                    value={inputValue.T2_30PM}
                    onChange={inputChangeHandler}
                  />
                </td>
              </tr>
              <tr>
                <td>4:30 PM</td>
                <td>
                  <Input
                    type={"text"}
                    placeholder={"Enter Diet"}
                    name="T4_30PM"
                    value={inputValue.T4_30PM}
                    onChange={inputChangeHandler}
                  />
                </td>
              </tr>
              <tr>
                <td>6:00 PM</td>
                <td>
                  <Input
                    type={"text"}
                    placeholder={"Enter Diet"}
                    name="T6_00PM"
                    value={inputValue.T6_00PM}
                    onChange={inputChangeHandler}
                  />
                </td>
              </tr>
              <tr>
                <td>8:30 PM</td>
                <td>
                  <Input
                    type={"text"}
                    placeholder={"Enter Diet"}
                    name="T8_30PM"
                    value={inputValue.T8_30PM}
                    onChange={inputChangeHandler}
                  />
                </td>
              </tr>
              <tr>
                <td>10:00 PM</td>
                <td>
                  <Input
                    type={"text"}
                    placeholder={"Enter Diet"}
                    name="T10_00PM"
                    value={inputValue.T10_00PM}
                    onChange={inputChangeHandler}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          <br />

          <table width={"50%"}>
            <caption>Friday</caption>
            <thead>
              <tr>
                <td>Timings</td>
                <td>Meals</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>7:30 AM</td>
                <td>
                  <Input
                    type={"text"}
                    placeholder={"Enter Diet"}
                    name="F7_30AM"
                    value={inputValue.F7_30AM}
                    onChange={inputChangeHandler}
                  />
                </td>
              </tr>
              <tr>
                <td>9:00 AM</td>
                <td>
                  <Input
                    type={"text"}
                    placeholder={"Enter Diet"}
                    name="F9_00AM"
                    value={inputValue.F9_00AM}
                    onChange={inputChangeHandler}
                  />
                </td>
              </tr>
              <tr>
                <td>12:00 PM</td>
                <td>
                  <Input
                    type={"text"}
                    placeholder={"Enter Diet"}
                    name="F12_00PM"
                    value={inputValue.F12_00PM}
                    onChange={inputChangeHandler}
                  />
                </td>
              </tr>
              <tr>
                <td>2:30 PM</td>
                <td>
                  <Input
                    type={"text"}
                    placeholder={"Enter Diet"}
                    name="F2_30PM"
                    value={inputValue.F2_30PM}
                    onChange={inputChangeHandler}
                  />
                </td>
              </tr>
              <tr>
                <td>4:30 PM</td>
                <td>
                  <Input
                    type={"text"}
                    placeholder={"Enter Diet"}
                    name="F4_30PM"
                    value={inputValue.F4_30PM}
                    onChange={inputChangeHandler}
                  />
                </td>
              </tr>
              <tr>
                <td>6:00 PM</td>
                <td>
                  <Input
                    type={"text"}
                    placeholder={"Enter Diet"}
                    name="F6_00PM"
                    value={inputValue.F6_00PM}
                    onChange={inputChangeHandler}
                  />
                </td>
              </tr>
              <tr>
                <td>8:30 PM</td>
                <td>
                  <Input
                    type={"text"}
                    placeholder={"Enter Diet"}
                    name="F8_30PM"
                    value={inputValue.F8_30PM}
                    onChange={inputChangeHandler}
                  />
                </td>
              </tr>
              <tr>
                <td>10:00 PM</td>
                <td>
                  <Input
                    type={"text"}
                    placeholder={"Enter Diet"}
                    name="F10_00PM"
                    value={inputValue.F10_00PM}
                    onChange={inputChangeHandler}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          <br />

          <table width={"50%"}>
            <caption>Saturday</caption>
            <thead>
              <tr>
                <td>Timings</td>
                <td>Meals</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>7:30 AM</td>
                <td>
                  <Input
                    type={"text"}
                    placeholder={"Enter Diet"}
                    name="SAT7_30AM"
                    value={inputValue.SAT7_30AM}
                    onChange={inputChangeHandler}
                  />
                </td>
              </tr>
              <tr>
                <td>9:00 AM</td>
                <td>
                  <Input
                    type={"text"}
                    placeholder={"Enter Diet"}
                    name="SAT9_00AM"
                    value={inputValue.SAT9_00AM}
                    onChange={inputChangeHandler}
                  />
                </td>
              </tr>
              <tr>
                <td>12:00 PM</td>
                <td>
                  <Input
                    type={"text"}
                    placeholder={"Enter Diet"}
                    name="SAT12_00PM"
                    value={inputValue.SAT12_00PM}
                    onChange={inputChangeHandler}
                  />
                </td>
              </tr>
              <tr>
                <td>2:30 PM</td>
                <td>
                  <Input
                    type={"text"}
                    placeholder={"Enter Diet"}
                    name="SAT2_30PM"
                    value={inputValue.SAT2_30PM}
                    onChange={inputChangeHandler}
                  />
                </td>
              </tr>
              <tr>
                <td>4:30 PM</td>
                <td>
                  <Input
                    type={"text"}
                    placeholder={"Enter Diet"}
                    name="SAT4_30PM"
                    value={inputValue.SAT4_30PM}
                    onChange={inputChangeHandler}
                  />
                </td>
              </tr>
              <tr>
                <td>6:00 PM</td>
                <td>
                  <Input
                    type={"text"}
                    placeholder={"Enter Diet"}
                    name="SAT6_00PM"
                    value={inputValue.SAT6_00PM}
                    onChange={inputChangeHandler}
                  />
                </td>
              </tr>
              <tr>
                <td>8:30 PM</td>
                <td>
                  <Input
                    type={"text"}
                    placeholder={"Enter Diet"}
                    name="SAT8_30PM"
                    value={inputValue.SAT8_30PM}
                    onChange={inputChangeHandler}
                  />
                </td>
              </tr>
              <tr>
                <td>10:00 PM</td>
                <td>
                  <Input
                    type={"text"}
                    placeholder={"Enter Diet"}
                    name="SAT10_00PM"
                    value={inputValue.SAT10_00PM}
                    onChange={inputChangeHandler}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          <br />

          <table width={"50%"}>
            <caption>Sunday</caption>
            <thead>
              <tr>
                <td>Timings</td>
                <td>Meals</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>7:30 AM</td>
                <td>
                  <Input
                    type={"text"}
                    placeholder={"Enter Diet"}
                    name="SUN7_30AM"
                    value={inputValue.SUN7_30AM}
                    onChange={inputChangeHandler}
                  />
                </td>
              </tr>
              <tr>
                <td>9:00 AM</td>
                <td>
                  <Input
                    type={"text"}
                    placeholder={"Enter Diet"}
                    name="SUN9_00AM"
                    value={inputValue.SUN9_00AM}
                    onChange={inputChangeHandler}
                  />
                </td>
              </tr>
              <tr>
                <td>12:00 PM</td>
                <td>
                  <Input
                    type={"text"}
                    placeholder={"Enter Diet"}
                    name="SUN12_00PM"
                    value={inputValue.SUN12_00PM}
                    onChange={inputChangeHandler}
                  />
                </td>
              </tr>
              <tr>
                <td>2:30 PM</td>
                <td>
                  <Input
                    type={"text"}
                    placeholder={"Enter Diet"}
                    name="SUN2_30PM"
                    value={inputValue.SUN2_30PM}
                    onChange={inputChangeHandler}
                  />
                </td>
              </tr>
              <tr>
                <td>4:30 PM</td>
                <td>
                  <Input
                    type={"text"}
                    placeholder={"Enter Diet"}
                    name="SUN4_30PM"
                    value={inputValue.SUN4_30PM}
                    onChange={inputChangeHandler}
                  />
                </td>
              </tr>
              <tr>
                <td>6:00 PM</td>
                <td>
                  <Input
                    type={"text"}
                    placeholder={"Enter Diet"}
                    name="SUN6_00PM"
                    value={inputValue.SUN6_00PM}
                    onChange={inputChangeHandler}
                  />
                </td>
              </tr>
              <tr>
                <td>8:30 PM</td>
                <td>
                  <Input
                    type={"text"}
                    placeholder={"Enter Diet"}
                    name="SUN8_30PM"
                    value={inputValue.SUN8_30PM}
                    onChange={inputChangeHandler}
                  />
                </td>
              </tr>
              <tr>
                <td>10:00 PM</td>
                <td>
                  <Input
                    type={"text"}
                    placeholder={"Enter Diet"}
                    name="SUN10_00PM"
                    value={inputValue.SUN10_00PM}
                    onChange={inputChangeHandler}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          <br />
        </FormControl>
        <Button variant={"ghost"} colorScheme="blue" mb={30} onClick={submitNewDiet}>Submit</Button>
      </Box>
    </Box>
  );
};

export default NewDietPlan;
