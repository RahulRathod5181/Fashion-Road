
import { Box, Button, Image,  Stack, Text } from '@chakra-ui/react'
import React from 'react'

const CartEmpty = () => {
  return (
    <Stack >
        <br />
    <Box  borderBottom={'1px solid black'} position={'fixed'} top={'0'} bgColor={'white'} zIndex={'2'} style={{ width:'100%' , height: '8vh'}}>Navbar</Box>

    <Stack display={'flex'} justifyContent={'center'} alignItems={'center'} p={'5rem'}>
     <Image w={'250px'} h={'300px'} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjlt1wSnX_U3WQUVYvOpqBw1glQyRLpWCVaQ&usqp=CAU' />
     <br />
     <br />
    <Text fontSize={'25px'} color={'black'}  > No item in cart</Text>
    <Button variant={'solid'} _active={{all:'none'}} _hover={{boxShadow: 'rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px'}} bgColor={'#99cc33'} color={'white'} > SHOP NOW </Button>
    </Stack>
  </Stack>
  )
}

export default CartEmpty


 