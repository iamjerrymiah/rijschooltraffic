import { Box, HStack, Image } from '@chakra-ui/react'
import { Container } from '../../../styling/layout'
import { ElementColor } from '../../../constants/colors'

import volkwasagen from "../../../assets/img/volkswagen.webp"
import ibki from "../../../assets/img/ibki.webp"
import cbr from "../../../assets/img/cbr.webp"
import todrive from "../../../assets/img/2todrive.webp"
import mercedesBenz from "../../../assets/img/mercedes-benz-logo.webp"

const Wrapper = ({children}:any) => (
    <Box
        color={ElementColor.primary}
        bg={'white'}
        overflowX='hidden'
        // className='partners'
    >
        {children}
    </Box>
)

export default function Partners() {
    return (
        <Wrapper>
            <Container>

                <Box minW='200%' h='155px' overflowX='hidden' pos='relative' bgColor="#fff">
                    <HStack
                        minW='200%'
                        px={['30px', '30px', '40px']}
                        py='50px'
                        justify='space-around'
                        align='center'
                        spacing={['75px', '75px', '30px']}
                        pos='absolute'
                        animation='caro-slide 45s linear infinite'
                    >
                        <Image src={volkwasagen} h='50x'/>
                        <Image src={ibki} h='50px'/>
                        <Image src={cbr} h='50px'/>
                        <Image src={todrive} h='55px'/>
                        <Image src={mercedesBenz} h='50px'/>

                        <Image src={volkwasagen} h='50px'/>
                        <Image src={ibki} h='50px'/>
                        <Image src={cbr} h='50px'/>
                        <Image src={todrive} h='55px'/>
                        <Image src={mercedesBenz} h='50px'/>

                        <Image src={volkwasagen} h='50px'/>
                        <Image src={ibki} h='50px'/>
                        <Image src={cbr} h='50px'/>
                        <Image src={todrive} h='55px'/>
                        <Image src={mercedesBenz} h='50px'/>

                    </HStack>
                </Box>

            </Container>

        </Wrapper>
    )
}
