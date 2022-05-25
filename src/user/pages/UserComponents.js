import { Box } from '@chakra-ui/react'
import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import UserBody from './UserBody'
import "../../styles/homePage.css"



const UserComponents = () => {
  return (
   <Box>
       <Header />
       <UserBody />
       <Footer />
   </Box>
  )
}

export default UserComponents