import React from 'react'
import logo from './logo.png'
import { Box, Button, Divider, Flex, SimpleGrid, useMediaQuery } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

const Navbar2 = ({items, price, handleClick, cartData,show }) => {

const [tabView] = useMediaQuery('(max-width: 990px)')
const navigate = useNavigate();
  return (
    <Box

        position={"fixed"}
        top={"0"}
        paddingBottom={'8px'}
        
        pl={'50px'}
        bgColor={"white"}
        zIndex={"2"}
        boxShadow= 'rgb(38, 57, 77) 0px 20px 30px -25px;'
        // boxShadow= 'rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;'
        style={{ width: "100%"}}
      > <img onClick={()=>navigate('/')} style={{height:'8vh'}} src={logo} alt="logo" />
        {/* Navbar */}
        
{ tabView  && show && cartData.length != false &&   <SimpleGrid columns={3} border={'1px solid #eee'} >
          
<Button variant={'unstyled'}>{ `${items} ITEMS`} </Button> 
<Button variant={'unstyled'} borderLeft={'1px'} borderRight={'1px'} borderRadius={'0'}> {`₹ ${price}`} </Button> 
<Button onClick={()=>handleClick()} variant={'unstyled'} color={'#d3145a'}> {`BUY NOW >`} </Button>
        </SimpleGrid> }
      </Box>
  )
}

export default Navbar2