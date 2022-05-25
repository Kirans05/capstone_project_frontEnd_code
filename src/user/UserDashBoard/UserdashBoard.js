import { Box } from '@chakra-ui/react'
import React from 'react'
import UFooter from './UFooter'
import UHeader from './UHeader'
import Userbody from './Userbody'

const UserdashBoard = () => {
  return (
   <Box>
     <UHeader />
     <Userbody />
     <UFooter />
   </Box>
  )
}

export default UserdashBoard