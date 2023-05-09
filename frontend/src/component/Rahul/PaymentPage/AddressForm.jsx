import { FormControl, FormLabel, Input, InputGroup, InputLeftAddon, Radio, RadioGroup, Stack } from "@chakra-ui/react";
import React from "react";

const AddressForm = () => {
  return (
    <Stack bgColor={'white'} borderRadius={'.35rem'} p={'10px 30px'}>
      <Stack direction={'row'}>
        <FormControl isRequired >
          <FormLabel>Pincode</FormLabel>
          <Input variant={'unstyled'}  borderRadius={'none'} borderBottom={'1px solid grey'}   />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Mobile Number </FormLabel>

          <InputGroup>
    <InputLeftAddon outline={'none'} h={'auto'} border={'none'} bgColor={'white'} borderRadius={'none'} borderBottom={'1px solid grey'} p={'0'} m={0}>
      +91
    </InputLeftAddon>
    <Input  type='tel'  variant={'unstyled'}  borderRadius={'none'}  borderBottom={'1px solid grey'} />
  </InputGroup>


          {/* <Input  border={'none'} borderRadius={'none'} borderBottom={'1px solid grey'}  " /> */}
        </FormControl>
      </Stack>
      <FormControl isRequired>
        <FormLabel>Full Name </FormLabel>
        <Input variant={'unstyled'}  borderRadius={'none'} borderBottom={'1px solid grey'}
          
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>
Flat / House No. / Building Name</FormLabel>
        <Input   variant={'unstyled'}  borderRadius={'none'} borderBottom={'1px solid grey'}   />
      </FormControl>
  
      <Stack direction={'row'} >
        <FormControl isRequired>
          <FormLabel>City</FormLabel>
          <Input   variant={'unstyled'}  borderRadius={'none'} borderBottom={'1px solid grey'}  />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>State </FormLabel>
          <Input   variant={'unstyled'}  borderRadius={'none'} borderBottom={'1px solid grey'}  />
        </FormControl>
      </Stack>

      <FormControl>
          <FormLabel>Address Type</FormLabel>
          <RadioGroup defaultValue='addressType'>
    <Stack direction={'row'} justify={'flex-start'} spacing={'150px'}>
      <Radio  value='home'>Home</Radio>
      <Radio value='office'>Office</Radio>
    
    </Stack>
  </RadioGroup>
         </FormControl>

    </Stack>
  );
};

export default AddressForm;
