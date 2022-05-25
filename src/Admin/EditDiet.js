import { Box, Button, Input , Text, useToast} from '@chakra-ui/react'
import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { MainContext } from '../context/Context'
import AFooter from './AFooter'
import AHeader from './AHeader'

const EditDiet = () => {
  const nav = useNavigate()
  const {id} = useParams()
  const toast = useToast()
  let {tocken} = useContext(MainContext)
  const [dietname, setdietname] = useState("")
  const [inputValues, setinputValues] = useState({
    Monb:"",
    Monbi:"",
    Monbf:"",
    Monbfi:"",
    Monl:"",
    Monli:"",
    Mond:"",
    Mondi:"",
    Mons:"",
    Monsi:"",
    Tueb:"",
    Tuebi:"",
    Tuebf:"",
    Tuebfi:"",
    Tuel:"",
    Tueli:"",
    Tued:"",
    Tuedi:"",
    Tues:"",
    Tuesi:"",
    Wedb:"",
    Wedbi:"",
    Wedbf:"",
    Wedbfi:"",
    Wedl:"",
    Wedli:"",
    Wedd:"",
    Weddi:"",
    Weds:"",
    Wedsi:"",
    Thub:"",
    Thubi:"",
    Thubf:"",
    Thubfi:"",
    Thul:"",
    Thuli:"",
    Thud:"",
    Thudi:"",
    Thus:"",
    Thusi:"",
    Frib:"",
    Fribi:"",
    Fribf:"",
    Fribfi:"",
    Fril:"",
    Frili:"",
    Frid:"",
    Fridi:"",
    Fris:"",
    Frisi:"",
    Satb:"",
    Satbi:"",
    Satbf:"",
    Satbfi:"",
    Satl:"",
    Satli:"",
    Satd:"",
    Satdi:"",
    Sats:"",
    Satsi:"",
    Sunb:"",
    Sunbi:"",
    Sunbf:"",
    Sunbfi:"",
    Sunl:"",
    Sunli:"",
    Sund:"",
    Sundi:"",
    Suns:"",
    Sunsi:"",
})

const inputValueHandler = (e) => {
  setinputValues({...inputValues,[e.target.name]:e.target.value})
}

const submitHandler = async () => {
  let options = {
    url:`https://capstone-project-2022.herokuapp.com/diettable/updateDiet/${id}`,
    method:"POST",
    headers:{
      "content-type":"application/json",
      Authorization:`Bearer ${tocken}`
    },
    data:{
      dietName:dietname,
          dietData:inputValues
    }
  } 


  try{
    let response = await axios(options)
    console.log(response.data)
    if(response.data.message == "Updateed SuccessFully"){
      toast({
        title:"Diet Updated SuccessfUlly",
        duration:5000,
        isClosable:true,
        position:"bottom",
        status:"success"
      })
      nav("/adminDashboard")
    }
    else{
      toast({
        title:"Unable To Update The Product",
        duration:5000,
        isClosable:true,
        position:"bottom",
        status:"error"
      })
    }
  }catch(error){
    toast({
      title:"Unable To Update the Product",
      duration:5000,
      isClosable:true,
      position:"bottom",
      status:"error"
    })
  }
}



const fetchParticularDietPlan = async () => {
  let options = {
    url:`https://capstone-project-2022.herokuapp.com/diettable/singleData/${id}`,
    method:"GET",
    headers:{
      "content-type":"application/json",
      Authorization:`Bearer ${tocken}`
    }
  }


  try{
    let response = await axios(options)
    console.log(response.data)
    let result = response.data.result.dietData[0]
    setinputValues({...inputValues,...result})
    setdietname(response.data.result.dietName)
  }catch(error){  
    toast({
      title:"Unable To Get The Data",
      duration:5000,
      position:"bottom",
      isClosable:true,
      status:"error"
    })
  }
}


useEffect(() => {
  fetchParticularDietPlan()
},[])


  return (
    <Box
    d="flex"
    flexDirection={"column"}
    alignItems={"center"}
    >
    <AHeader>
        <button>Home</button>
    </AHeader>
    <Box
    mt={10}
      d="flex"
      flexDir={"column"}
      alignItems={"center"}
      width={"50%"}

      >
        <Text>
        Diet Plan Name
        </Text>
         <Input type={"text"} placeholder={"Enter Diet Name"} name="dietName" value={dietname} onChange={(e)=>setdietname(e.target.value)} />
        <Text>Monday</Text>
        <Text>BreakFast</Text>
        <Input type={"text"} placeholder={"Enter BreakFast Meal For Monday"} name="Monb" value={inputValues.Monb} onChange={inputValueHandler} />
        <Input type={"text"} placeholder={"Enter The Image Url"} name="Monbi" value={inputValues.Monbi} onChange={inputValueHandler} />
        <Text>BreakFast Fruit</Text>
        <Input
          type={"text"}
          placeholder={"Enter BreakFast Fruits For Monday"}
          name="Monbf" value={inputValues.Monbf} onChange={inputValueHandler}
          />
        <Input
          type={"text"}
          placeholder={"Enter The Image Url"}
          name="Monbfi" value={inputValues.Monbfi} onChange={inputValueHandler}
        />
        <Text>Lunch</Text>
        <Input type={"text"} placeholder={"Enter Lunch Meal For Monday"} name="Monl" value={inputValues.Monl} onChange={inputValueHandler}/>
        <Input type={"text"} placeholder={"Enter The Image Url"} name="Monli" value={inputValues.Monli} onChange={inputValueHandler}/>
        <Text>Dinner</Text>
        <Input type={"text"} placeholder={"Enter Dinner Meal For Monday"} name="Mond" value={inputValues.Mond} onChange={inputValueHandler}/>
        <Input type={"text"} placeholder={"Enter The Image Url"} name="Mondi" value={inputValues.Mondi} onChange={inputValueHandler}/>
        <Text>Snack</Text>
        <Input type={"text"} placeholder={"Enter Snack Meal For Monday"} name="Mons" value={inputValues.Mons} onChange={inputValueHandler}/>
        <Input type={"text"} placeholder={"Enter The Image Url"} name="Monsi" value={inputValues.Monsi} onChange={inputValueHandler}/>
        <br />
        <br />
        <Text>Tuesday</Text>
        <Text>BreakFast</Text>
        <Input type={"text"} placeholder={"Enter BreakFast Meal For Tuesday"} name="Tueb" value={inputValues.Tueb} onChange={inputValueHandler}/>
        <Input type={"text"} placeholder={"Enter The Image Url"} name="Tuebi" value={inputValues.Tuebi} onChange={inputValueHandler}/>
        <Text>BreakFast Fruit</Text>
        <Input
          type={"text"}
          placeholder={"Enter BreakFast Fruits For Tuesday"}
          name="Tuebf" value={inputValues.Tuebf} onChange={inputValueHandler}
        />
        <Input
          type={"text"}
          placeholder={"Enter The Image Url"}
          name="Tuebfi" value={inputValues.Tuebfi} onChange={inputValueHandler}
        />
        <Text>Lunch</Text>
        <Input type={"text"} placeholder={"Enter Lunch Meal For Tuesday"} name="Tuel" value={inputValues.Tuel} onChange={inputValueHandler}/>
        <Input type={"text"} placeholder={"Enter The Image Url"} name="Tueli" value={inputValues.Tueli} onChange={inputValueHandler}/>
        <Text>Dinner</Text>
        <Input type={"text"} placeholder={"Enter Dinner Meal For Tuesday"} name="Tued" value={inputValues.Tued} onChange={inputValueHandler}/>
        <Input type={"text"} placeholder={"Enter The Image Url"} name="Tuedi" value={inputValues.Tuedi} onChange={inputValueHandler}/>
        <Text>Snack</Text>
        <Input type={"text"} placeholder={"Enter Snack Meal For Tuesday"} name="Tues" value={inputValues.Tues} onChange={inputValueHandler}/>
        <Input type={"text"} placeholder={"Enter The Image Url"} name="Tuesi" value={inputValues.Tuesi} onChange={inputValueHandler}/>

        <br />
        <br />

        <Text>Wednesday</Text>
        <Text>BreakFast</Text>
        <Input type={"text"} placeholder={"Enter BreakFast Meal For Wednesday"} name="Wedb" value={inputValues.Wedb} onChange={inputValueHandler}/>
        <Input type={"text"} placeholder={"Enter The Image Url"} name="Wedbi" value={inputValues.Wedbi} onChange={inputValueHandler}/>
        <Text>BreakFast Fruit</Text>
        <Input
          type={"text"}
          placeholder={"Enter BreakFast Fruits For Wednesday"}
          name="Wedbf" value={inputValues.Wedbf} onChange={inputValueHandler}
        />
        <Input
          type={"text"}
          placeholder={"Enter The Image Url"}
          name="Wedbfi" value={inputValues.Wedbfi} onChange={inputValueHandler}
        />
        <Text>Lunch</Text>
        <Input type={"text"} placeholder={"Enter Lunch Meal For Wednesday"} name="Wedl" value={inputValues.Wedl} onChange={inputValueHandler}/>
        <Input type={"text"} placeholder={"Enter The Image Url"} name="Wedli" value={inputValues.Wedli} onChange={inputValueHandler}/>
        <Text>Dinner</Text>
        <Input type={"text"} placeholder={"Enter Dinner Meal For Wednesday"} name="Wedd" value={inputValues.Wedd} onChange={inputValueHandler}/>
        <Input type={"text"} placeholder={"Enter The Image Url"} name="Weddi" value={inputValues.Weddi} onChange={inputValueHandler}/>
        <Text>Snack</Text>
        <Input type={"text"} placeholder={"Enter Snack Meal For Wednesday"} name="Weds" value={inputValues.Weds} onChange={inputValueHandler}/>
        <Input type={"text"} placeholder={"Enter The Image Url"} name="Wedsi" value={inputValues.Wedsi} onChange={inputValueHandler}/>

        <br />
        <br />

        <Text>Thursday</Text>
        <Text>BreakFast</Text>
        <Input type={"text"} placeholder={"Enter BreakFast Meal For Thursday"} name="Thub" value={inputValues.Thub} onChange={inputValueHandler}/>
        <Input type={"text"} placeholder={"Enter The Image Url"} name="Thubi" value={inputValues.Thubi} onChange={inputValueHandler}/>
        <Text>BreakFast Fruit</Text>
        <Input
          type={"text"}
          placeholder={"Enter BreakFast Fruits For Thursday"}
          name="Thubf" value={inputValues.Thubf} onChange={inputValueHandler}
        />
        <Input
          type={"text"}
          placeholder={"Enter The Image Url"}
          name="Thubfi" value={inputValues.Thubfi} onChange={inputValueHandler}
        />
        <Text>Lunch</Text>
        <Input type={"text"} placeholder={"Enter Lunch Meal For Thursday"} name="Thul" value={inputValues.Thul} onChange={inputValueHandler}/>
        <Input type={"text"} placeholder={"Enter The Image Url"} name="Thuli" value={inputValues.Thuli} onChange={inputValueHandler}/>
        <Text>Dinner</Text>
        <Input type={"text"} placeholder={"Enter Dinner Meal For Thursday"} name="Thud" value={inputValues.Thud} onChange={inputValueHandler}/>
        <Input type={"text"} placeholder={"Enter The Image Url"} name="Thudi" value={inputValues.Thudi} onChange={inputValueHandler}/>
        <Text>Snack</Text>
        <Input type={"text"} placeholder={"Enter Snack Meal For Thursday"} name="Thus" value={inputValues.Thus} onChange={inputValueHandler}/>
        <Input type={"text"} placeholder={"Enter The Image Url"} name="Thusi" value={inputValues.Thusi} onChange={inputValueHandler}/>

        <br />
        <br />

        <Text>Friday</Text>
        <Text>BreakFast</Text>
        <Input type={"text"} placeholder={"Enter BreakFast Meal For Friday"} name="Frib" value={inputValues.Frib} onChange={inputValueHandler}/>
        <Input type={"text"} placeholder={"Enter The Image Url"} name="Fribi" value={inputValues.Fribi} onChange={inputValueHandler}/>
        <Text>BreakFast Fruit</Text>
        <Input
          type={"text"}
          placeholder={"Enter BreakFast Fruits For Friday"}
          name="Fribf" value={inputValues.Fribf} onChange={inputValueHandler}
        />
        <Input
          type={"text"}
          placeholder={"Enter The Image Url"}
          name="Fribfi" value={inputValues.Fribfi} onChange={inputValueHandler}
        />
        <Text>Lunch</Text>
        <Input type={"text"} placeholder={"Enter Lunch Meal For Friday"} name="Fril" value={inputValues.Fril} onChange={inputValueHandler}/>
        <Input type={"text"} placeholder={"Enter The Image Url"} name="Frili" value={inputValues.Frili} onChange={inputValueHandler}/>
        <Text>Dinner</Text>
        <Input type={"text"} placeholder={"Enter Dinner Meal For Friday"} name="Frid" value={inputValues.Frid} onChange={inputValueHandler}/>
        <Input type={"text"} placeholder={"Enter The Image Url"} name="Fridi" value={inputValues.Fridi} onChange={inputValueHandler}/>
        <Text>Snack</Text>
        <Input type={"text"} placeholder={"Enter Snack Meal For Friday"} name="Fris" value={inputValues.Fris} onChange={inputValueHandler}/>
        <Input type={"text"} placeholder={"Enter The Image Url"} name="Frisi" value={inputValues.Frisi} onChange={inputValueHandler}/>

        <br />
        <br />

        <Text>Saturday</Text>
        <Text>BreakFast</Text>
        <Input type={"text"} placeholder={"Enter BreakFast Meal For Saturday"} name="Satb" value={inputValues.Satb} onChange={inputValueHandler}/>
        <Input type={"text"} placeholder={"Enter The Image Url"} name="Satbi" value={inputValues.Satbi} onChange={inputValueHandler}/>
        <Text>BreakFast Fruit</Text>
        <Input
          type={"text"}
          placeholder={"Enter BreakFast Fruits For Saturday"}
          name="Satbf" value={inputValues.Satbf} onChange={inputValueHandler}
        />
        <Input
          type={"text"}
          placeholder={"Enter The Image Url"}
          name="Satbfi" value={inputValues.Satbfi} onChange={inputValueHandler}
        />
        <Text>Lunch</Text>
        <Input type={"text"} placeholder={"Enter Lunch Meal For Saturday"} name="Satl" value={inputValues.Satl} onChange={inputValueHandler}/>
        <Input type={"text"} placeholder={"Enter The Image Url"} name="Satli" value={inputValues.Satli} onChange={inputValueHandler}/>
        <Text>Dinner</Text>
        <Input type={"text"} placeholder={"Enter Dinner Meal For Saturday"} name="Satd" value={inputValues.Satd} onChange={inputValueHandler}/>
        <Input type={"text"} placeholder={"Enter The Image Url"} name="Satdi" value={inputValues.Satdi} onChange={inputValueHandler}/>
        <Text>Snack</Text>
        <Input type={"text"} placeholder={"Enter Snack Meal For Saturday"} name="Sats" value={inputValues.Sats} onChange={inputValueHandler}/>
        <Input type={"text"} placeholder={"Enter The Image Url"} name="Satsi" value={inputValues.Satsi} onChange={inputValueHandler}/>

        <br />
        <br />

        <Text>Sunday</Text>
        <Text>BreakFast</Text>
        <Input type={"text"} placeholder={"Enter BreakFast Meal For Sunday"} name="Sunb" value={inputValues.Sunb} onChange={inputValueHandler}/>
        <Input type={"text"} placeholder={"Enter The Image Url"} name="Sunbi" value={inputValues.Sunbi} onChange={inputValueHandler}/>
        <Text>BreakFast Fruit</Text>
        <Input
          type={"text"}
          placeholder={"Enter BreakFast Fruits For Sunday"}
          name="Sunbf" value={inputValues.Sunbf} onChange={inputValueHandler}
        />
        <Input
          type={"text"}
          placeholder={"Enter The Image Url"}
          name="Sunbfi" value={inputValues.Sunbfi} onChange={inputValueHandler}
        />
        <Text>Lunch</Text>
        <Input type={"text"} placeholder={"Enter Lunch Meal For Sunday"} name="Sunl" value={inputValues.Sunl} onChange={inputValueHandler}/>
        <Input type={"text"} placeholder={"Enter The Image Url"} name="Sunli" value={inputValues.Sunli} onChange={inputValueHandler}/>
        <Text>Dinner</Text>
        <Input type={"text"} placeholder={"Enter Dinner Meal For Sunday"} name="Sund" value={inputValues.Sund} onChange={inputValueHandler}/>
        <Input type={"text"} placeholder={"Enter The Image Url"} name="Sundi" value={inputValues.Sundi} onChange={inputValueHandler}/>
        <Text>Snack</Text>
        <Input type={"text"} placeholder={"Enter Snack Meal For Sunday"} name="Suns" value={inputValues.Suns} onChange={inputValueHandler}/>
        <Input type={"text"} placeholder={"Enter The Image Url"} name="Sunsi" value={inputValues.Sunsi} onChange={inputValueHandler}/>

        <br />
        <br />

        <Button
        variant={"solid"}
        colorScheme="red"
        onClick={submitHandler}
        >
            Submit
        </Button>

      </Box>
      <AFooter />
</Box>


  )
}

export default EditDiet