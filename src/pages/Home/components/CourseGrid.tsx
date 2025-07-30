import {
    Box,
    Heading,
    SimpleGrid,
    Text,
    VStack,
} from '@chakra-ui/react';
import imagery from "../../../assets/img/eigen1.webp";
// import regionImg from "../../../assets/img/region_img.webp";
import informatie3 from "../../../assets/img/informatie3.webp";
// import region3Img from "../../../assets/img/region3_img.webp";
import { useNavigate } from 'react-router';
import { Container } from '../../../styling/layout';

const courses = [
    {title: 'Autorijles', image: imagery, link: `/autorijschool-nijmengen`},
    // {title: 'Motorrijles', image: regionImg, link: `/motorrijles-apeldoorn`},
    {title: 'Spoedcursus', image: informatie3, link: `/spoedcursus`},
    // {title: 'Theoriecursus', image: region3Img, link: `/theoriecursus`},
    // {title: 'Opfriscursus', image: imagery, link: `/opfriscursus`},
];

export default function CourseGrid() {
    const navigate = useNavigate()

    return (
        <Box bg='whitesmoke' py={10} px={[4,10,10,28]}>
            <Container>
            <VStack spacing={2} textAlign="center" mb={8}>
                <Heading size="xl">Onze opleidingen</Heading>
                <Text fontSize="sm" maxW="800px">
                    Wil je ook een opleiding volgen bij ons? Hieronder kan je een overzicht zien van de kwalitatieve, 
                    maar betaalbare opleidingen die wij te bieden hebben.
                </Text>
            </VStack>

            <SimpleGrid
                columns={[1,1,1,2]}
                spacing={6}
                justifyContent="center"
            >
                {courses.map((course, index) => (
                <Box
                    key={index}
                    borderRadius="md"
                    overflow="hidden"
                    height="250px"
                    bgImage={`url(${course.image})`}
                    bgSize="cover"
                    bgPosition="center"
                    position="relative"
                    boxShadow="md"
                    cursor={'pointer'}
                    objectFit={'cover'}
                    onClick={()=>navigate(course?.link)}
                    _hover={{ transform: 'scale(1.02)', transition: '0.3s' }}
                >
                    <Box
                        position="absolute"
                        top="0"
                        left="0"
                        right="0"
                        bottom="0"
                        bg="rgba(0,0,0,0.4)"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Text
                            fontSize="xl"
                            fontWeight="bold"
                            color="white"
                            textAlign="center"
                            px={2}
                            textShadow="0 0 6px rgba(0, 0, 0, 0.7)"
                        >
                            {course.title}
                        </Text>
                    </Box>
                </Box>
                ))}
            </SimpleGrid>
            </Container>
        </Box>
    );
}