import { Box, Button, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const OrderSucess = () => {
  return (
    <Stack >
    <br />
<Box  borderBottom={'1px solid black'} position={'fixed'} top={'0'} bgColor={'white'} zIndex={'2'} style={{ width:'100%' , height: '8vh'}}>Navbar</Box>

<Stack display={'flex'} justifyContent={'center'} alignItems={'center'} p={'5rem'}>
<Text fontSize={'25px'} color={'black'}  > Your order has been placed successfully!</Text>
 <Image w={'400px'} h={'300px'} src='/order-placed.gif' />
 <br />
 <br />
<Text fontSize={'25px'} color={'black'}  > Thank You for shopping with us</Text>
<Button variant={'solid'} _active={{all:'none'}} _hover={{boxShadow: 'rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px'}} bgColor={'#99cc33'} color={'white'} >Continue Shopping </Button>
</Stack>
</Stack>
  )
}

export default OrderSucess