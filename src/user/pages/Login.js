import {
    Box,
    Button,
    FormLabel,
    Input,
    InputGroup,
    InputRightElement,
    list,
    useToast,
  } from "@chakra-ui/react";
  import axios from "axios";
  import React, { useContext, useState } from "react";
  import { useNavigate } from "react-router-dom"
import { MainContext } from "../../context/Context";
  
  
  
  const Login = () => {
    const nav = useNavigate()
    const toast = useToast()
    const [show, setshow] = useState(false);
    const [loading,setloading] = useState(false)
    const {fetchAgain, setfetchAgain} =useContext(MainContext) 

    const [list,setlist] = useState({
      email:"",
      password:""
    })
  
  
    const handleClick = () => {
      setshow(!show);
    };
  
    const inputChangeHandler = (e) => {
      setlist({...list,[e.target.name]:e.target.value})
    }
  
  
    const submitHandler = async () => {
      if(!list.password || !list.email){
        toast({
          title:"Please Fill All The Fields",
          duration:5000,
          status:"error",
          position:"bottom",
          isClosable:true
        })
        return ;
      }
      let options = {
        url:"https://capstone-project-2022.herokuapp.com/user/login",
        headers:{
          "content-type":"application/json"
        },
        method:"POST",
        data:list    
      }
  
      try{
        setlist({
          email:"",
          password:""
        })
        setloading(true)
        let response = await axios(options)
        localStorage.setItem("user", JSON.stringify(response.data.result))
        localStorage.setItem("tocken",response.data.tocken)
        if(!response.data.result.calories.length){
          nav("/qusetionsPage")
          setfetchAgain(!fetchAgain)
        }else{
          nav("/dashboard")
          setfetchAgain(!fetchAgain)
        }
        setloading(false)
      }catch(error){
        console.log("error",error)
        toast({
          title:"Unable to Login Please Try Again Later",
          duration:5000,
          status:"error",
          position:"bottom",
          isClosable:true
        })
      }
      setloading(false)
  
    }
  
    return (
      <Box d="flex" flexDir={"column"} justifyContent="space-between" padding={2}>
        <FormLabel>Email Id</FormLabel>
        <Input placeholder="Enter Email Id" size="md" type={"email"} value={list.email} name="email" onChange={inputChangeHandler}/>
        <FormLabel>Password</FormLabel>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={show ? "text" : "password"}
            placeholder="Enter password"
            value={list.password}
            onChange={inputChangeHandler}
            name="password"
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
        <br />
        <Button colorScheme="blue" variant="solid" onClick={submitHandler} isLoading={loading}>
          Login
        </Button>
      </Box>
    );
  };
  
  export default Login;
  