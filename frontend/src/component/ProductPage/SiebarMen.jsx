


import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Checkbox,
    Radio, RadioGroup, theme, Flex
} from '@chakra-ui/react'
import { MinusIcon, AddIcon } from "@chakra-ui/icons"

import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'


const SidebarMen = () => {
    const data = ['Tahvo', 'Veera Paridhaan', 'Canary London', 'Austin Wood', 'Inspire', 'Status Quo', 'Raa Jeans', 'SHOWOFF', 'Ragzo', 'CAMEY'];

    const { productData } = useSelector((store) => {
        // console.log(store)
        return store.ProductPageReducer
    })
    // console.log(productData)
    

    const[searchParams,setSearchParams] = useSearchParams();

    const initialDiscount = searchParams.getAll("discount");
    const[discount,setDiscount] = useState(initialDiscount || [])
    const initialBrand = searchParams.getAll("brand")
    const[brand,setBrand] = useState(initialBrand || [])
    const initialOffer = searchParams.getAll("offers")
    const [offerType,setOffer] = useState(initialOffer || [])
    const initialPrice = searchParams.get("price")
    const[price,setPrice] = useState(initialPrice || "")



    const handleChangeDiscount = (e)=>{
        let newDiscount = [...discount];
        let value = e.target.value;
        if(newDiscount.includes(value)){
            newDiscount = newDiscount.filter((el)=>el!==value)
        }else{
            newDiscount.push(value)
        }
        setDiscount(newDiscount)

    }
    const handleChangeBrand = (e)=>{
        let newBrand = [...brand];
        let value = e.target.value;
        if(newBrand.includes(value)){
            newBrand = newBrand.filter((el)=>el!==value)
        }else{
            newBrand.push(value)
        }
        setBrand(newBrand)

    }
    const handleOffer = (e)=>{
        let newOffer = [...offerType];
        let value = e.target.value;
        if(newOffer.includes(value)){
            newOffer = newOffer.filter((el)=>el!==value)
        }else{
            newOffer.push(value)
        }
        setOffer(newOffer)
    }

    const handleSort = (e)=>{
        console.log(e.target.value)
        setPrice(e.target.value)

    }


    useEffect(() => {
        

        let params = {
            discount,
            brand,
            offers:offerType
        }
        price&&(params.price=price);
        setSearchParams(params)
        
    }, [productData,discount,brand,offerType,price])

    return (

        <Accordion allowMultiple>
            {/* Sort by Price */}
            <AccordionItem border={"none"}>
                {({ isExpanded }) => (
                    <>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left'>
                                    Sort By
                                </Box>
                                {isExpanded ? (
                                    <MinusIcon fontSize='12px' />
                                ) : (
                                    <AddIcon fontSize='12px' />
                                )}
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} borderBottom={"1px solid #eeeeee"} onChange = {handleSort}  >
                            <Flex alignItems={"center"} >
                                <input type="radio" name="price" value="desc" defaultChecked={price==="desc"} /><label style={{ marginLeft: "7px" }}>High To Low</label>
                            </Flex>
                            <Flex alignItems={"center"} >
                            <input type="radio" name="price" value="asc" style={{colorScheme:"whatsapp"}} defaultChecked={price==="asc"} /><label style={{ marginLeft: "7px" }}>Low To High</label>
                            </Flex>
                        </AccordionPanel>
                    </>
                )}
            </AccordionItem>
            {/* discount */}
            <AccordionItem border={"none"}>
                {({ isExpanded }) => (
                    <>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left'>
                                    Discount
                                </Box>
                                {isExpanded ? (
                                    <MinusIcon fontSize='12px' />
                                ) : (
                                    <AddIcon fontSize='12px' />
                                )}
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} borderBottom={"1px solid #eeeeee"} textAlign={"left"}>
                            <Checkbox colorScheme="whatsapp" value="20" onChange={handleChangeDiscount} isChecked={discount.includes("20")}>
                                1% To 20%
                            </Checkbox>
                            <Checkbox colorScheme="whatsapp" value="40" onChange={handleChangeDiscount} isChecked={discount.includes("40")}>
                                21% To 40%
                            </Checkbox>
                            <Checkbox colorScheme="whatsapp" value="60" onChange={handleChangeDiscount} isChecked={discount.includes("60")}>
                                41% To 60%
                            </Checkbox>
                            <Checkbox colorScheme="whatsapp" value="80" onChange={handleChangeDiscount} isChecked={discount.includes("80")}>
                                61% To 80%
                            </Checkbox>

                        </AccordionPanel>
                    </>
                )}
            </AccordionItem>
            {/* filter by Brand */}
            <AccordionItem border={"none"}>
                {({ isExpanded }) => (
                    <>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left'>
                                    Brand
                                </Box>
                                {isExpanded ? (
                                    <MinusIcon fontSize='12px' />
                                ) : (
                                    <AddIcon fontSize='12px' />
                                )}
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} h="65vh" overflowY={"scroll"}>
                            {data.map((el, i) => (
                                <Flex alignItems={"center"} key={i + 1}>
                                    <Checkbox colorScheme="whatsapp" value={el} onChange={handleChangeBrand} isChecked={brand.includes(el)}>
                                        {el}
                                    </Checkbox>
                                    {/* <label style={{ marginLeft: "7px" }}>{el}</label> */}
                                </Flex>
                            ))}
                        </AccordionPanel>
                    </>
                )}
            </AccordionItem>

            {/* filter by offer */}
            <AccordionItem border={"none"}>
                {({ isExpanded }) => (
                    <>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left'>
                                    Offer
                                </Box>
                                {isExpanded ? (
                                    <MinusIcon fontSize='12px' />
                                ) : (
                                    <AddIcon fontSize='12px' />
                                )}
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} >
                            <Flex alignItems={"center"}>
                                <Checkbox colorScheme="whatsapp" value="Buy 2 Get 1 Free" onChange={handleOffer} isChecked={offerType.includes("Buy 2 Get 1 Free")}>
                                    Buy 2 Get 1 Free
                                </Checkbox>
                            </Flex>
                        </AccordionPanel>
                    </>
                )}
            </AccordionItem>
        </Accordion>

    )
}

export default SidebarMen;
