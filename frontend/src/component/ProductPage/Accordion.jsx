import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
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
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat.
                            </AccordionPanel>
                        </>
                    )}
                </AccordionItem>
            </Accordion>

    )
}

export default AccordionSide;
