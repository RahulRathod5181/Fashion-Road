import { FormControl, FormErrorMessage, FormLabel, Input, InputGroup, InputLeftAddon, Radio, RadioGroup, Stack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const AddressForm = () => {

  const [formData, setFormData] = useState({pincode: '', mobileNo: '', name: ''})


  useEffect(() => {
  
    localStorage.setItem('formData', JSON.stringify(formData))
  }, [formData])
  

// console.log(formData)
  return (
    <Stack bgColor={'white'} borderRadius={'.35rem'} p={'10px 30px'} as="form" >
      <Stack direction={'row'}>
        <FormControl isInvalid={formData.pincode === '' ? true : false}  >
          <FormLabel>Pincode</FormLabel>
          <Input variant={'unstyled'} maxLength={6} value={formData.pincode} onChange={(e)=>setFormData({...formData, pincode: e.target.value})}  borderRadius={'none'} borderBottom={'1px solid grey'}   />
          <FormErrorMessage>Pincode is required.</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={formData.mobileNo === '' ? true : false} >
          <FormLabel>Mobile Number </FormLabel>

          <InputGroup>
    <InputLeftAddon outline={'none'} h={'auto'} border={'none'} bgColor={'white'} borderRadius={'none'} borderBottom={'1px solid grey'} p={'0'} m={0}>
      +91
    </InputLeftAddon>
    <Input  maxLength={10} value={formData.mobileNo} onChange={(e)=>setFormData({...formData, mobileNo: e.target.value})}   type='tel'  variant={'unstyled'}  borderRadius={'none'}  borderBottom={'1px solid grey'} />
    <FormErrorMessage>Mobile Number is required.</FormErrorMessage> 
  </InputGroup>


         
        </FormControl>
      </Stack>
      <FormControl isInvalid={formData.name === '' ? true : false} >
        <FormLabel>Full Name </FormLabel>
        
        <Input  value={formData.name} onChange={(e)=>setFormData({...formData, name: e.target.value})}   variant={'unstyled'}  borderRadius={'none'} borderBottom={'1px solid grey'} />
        <FormErrorMessage>Full Name is required.</FormErrorMessage>
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
