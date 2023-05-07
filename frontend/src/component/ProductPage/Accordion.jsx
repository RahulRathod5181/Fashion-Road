import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Radio, RadioGroup
} from '@chakra-ui/react'
import {MinusIcon, AddIcon} from "@chakra-ui/icons"

import React from 'react'

const AccordionSide = () => {

    return (

            <Accordion allowMultiple>
                <AccordionItem>
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
                            <AccordionPanel pb={4}>
                                
                            </AccordionPanel>
                        </>
                    )}
                </AccordionItem>
            </Accordion>

    )
}

export default AccordionSide;
