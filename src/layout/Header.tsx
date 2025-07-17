import {
  Box,
  Flex,
  HStack,
  VStack,
  Image,
  Text,
  Icon,
  Button,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  IconButton,
  Show,
  Hide,
} from '@chakra-ui/react';
import {
  FaHeart,
  FaThumbsUp,
  FaMobileAlt,
  FaBolt,
  FaBars,
  FaStar,
  FaChevronCircleUp,
  FaChevronCircleDown,
  FaCar
} from 'react-icons/fa';
import { MdLanguage } from 'react-icons/md';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import { ElementColor } from '../constants/colors';
import MenuDropdown from '../common/Menu/MenuDropdown';
import { Container } from '../styling/layout';

export default function Header() {
    const navigate = useNavigate()
    const { isOpen, onOpen, onClose } = useDisclosure();

    const [active, setActive] = useState('/')
    const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(null);

    const navLinks = [
        {tile: "Home", link: '/', asChildren: []},
        {tile: "Over ons", link: '/over-ons', asChildren: []},
        {tile: "Tarieven", link: '/tarieven', asChildren: []},
        {tile: "Kennisbank", link: '/kennisbank', 
        asChildren: [
            {name: "Lessen vanaf 16,5 jaar", onUse: ()=>navigate(`/lessen-vanaf`)},
            {name: "Theorie-examen", onUse: ()=>navigate(`/theorie-examen`)},
            {name: "Eigen verklaring", onUse: ()=>navigate(`/eigen-verklaring`)},
            {name: "Rijschool machtigen", onUse: ()=>navigate(`/rijschool-machtigen`)},
            {name: "Praktijkexamen afleggen", onUse: ()=>navigate(`/praktijkexamen-afleggen`)},
            // {name: "Leerling app", onUse: ()=>navigate(`/leerling-app`)},
            {name: "Wist jij dat", onUse: ()=>navigate(`/wist-jij-dat`)},
            {name: "Informatie voor ouders", onUse: ()=>navigate(`/informatie-voor-ouders`)},
            {name: "Veelgestelde vragen", onUse: ()=>navigate(`/veelgestelde-vragen`)},
        ]},
        {tile: "Onze regio’s", link: '/0nze-regios', asChildren: [
            {name: "Rijschool Apeldoorn", onUse: ()=>navigate(`/`)},
            {name: "Rijschool Beekbergen", onUse: ()=>navigate(`/rijschool-beekbergen`)},
            {name: "Rijschool Hoenderloo", onUse: ()=>navigate(`/rijschool-hoenderloo`)},
            {name: "Rijschool Teuge", onUse: ()=>navigate(`/rijschool-teuge`)},
            {name: "Rijschool Twello", onUse: ()=>navigate(`/rijschool-twello`)},
            {name: "Rijschool Vaassen", onUse: ()=>navigate(`/rijschool-vaassen`)},
        ]},
        {tile: "Cursussen", link: '/cursussen', asChildren: [
            {name: "Autorijles", onUse: ()=>navigate(`/autorijschool-apeldoorn`)},
            {name: "Motorrijles", onUse: ()=>navigate(`/motorrijles-apeldoorn`)},
            {name: "Theoriecursus", onUse: ()=>navigate(`/theoriecursus`)},
            {name: "Spoedcursus", onUse: ()=>navigate(`/spoedcursus`)},
            {name: "Opfriscursus", onUse: ()=>navigate(`/opfriscursus`)},
        ]},
        {tile: "Werken bij DIEP", link: '/werken-bij-diep', asChildren: []},
        {tile: "Reviews", link: '/reviews', asChildren: []},
        {tile: "Contact", link: '/contact', asChildren: []},
        {tile: "Driving School", link: '/driving-school', asChildren: []},
    ];

    const features = [
        { icon: FaHeart, text: 'Altijd vriendelijk en geduldig' },
        { icon: FaThumbsUp, text: 'Hoog slagingspercentage' },
        { icon: FaMobileAlt, text: 'Unieke leerling app' },
        { icon: FaBolt, text: 'Snel slagen' },
    ];

    return (
        <Container>
        <Box position="fixed" top="0" left="0" right="0" zIndex="1000" boxShadow="md">
            {/* Top Banner */}
            <Flex
                justify="space-between"
                align="center"
                px={4}
                py={4}
                flexWrap="wrap"
                bg="white"
            >
                {/* Logo and Features */}
                <Flex gap={4} flexWrap="wrap" align="center">
                    <Image src="/logo.png" alt="Logo" h="40px" />

                    <Hide below="md">
                        <VStack align="flex-start" spacing={1} fontSize="12px">
                            {features.map((feat, i) => (
                                <HStack key={i} spacing={1}>
                                    <Icon as={feat.icon as unknown as React.ElementType} color="#FF6B35" />
                                    <Text>{feat.text}</Text>
                                </HStack>
                            ))}
                        </VStack>
                    </Hide>
                </Flex>

                {/* Quote and Button */}
                <Flex
                    direction={['column','column','column','row']}
                    align="flex-start"
                    gap={2}
                    mt={{ base: 4, md: 0 }}
                >
                    <VStack align="flex-start" fontSize="12px" spacing={0}>
                        <Text fontStyle="italic"> “Dankzij leerzame en gezellige lessen in no-time geslaagd!!” </Text>
                        <HStack spacing={1}>
                            <HStack spacing={0.5} color="#FF6B35">
                                {[...Array(5)].map((_, i) => (
                                    <Icon as={FaStar as unknown as React.ElementType} key={i} />
                                ))}
                            </HStack>
                            <Text>5/5 |</Text>
                            <Text color="blue.500" cursor="pointer">Bekijk alle reviews.</Text>
                        </HStack>
                    </VStack>
                    <Button
                        leftIcon={<Icon as={FaCar as unknown as React.ElementType} />}
                        colorScheme={'orange'}
                        size="sm"
                        fontSize={'12px'}
                        fontWeight={400}
                        alignSelf={{ base: 'stretch', md: 'center' }}
                    >
                        Gratis proefles aanvragen
                    </Button>
                </Flex>
            </Flex>

            {/* Navigation */}
            <Box bg={ElementColor.primary} px={4}>
                <Flex h={12} alignItems="center" justifyContent="space-between">
                    <Text fontWeight="bold" color="white" fontSize="lg"></Text>

                    {/* Desktop Menu */}
                    <Hide below="lg">
                        <HStack spacing={6}>
                            {navLinks.map((link, i) => (
                                <Text
                                    key={i}
                                    fontSize={'13px'}
                                    color={link?.link === active ? '#A8D5BA' : 'white'}
                                    fontWeight={link?.link === active ? 'bold' : 'normal'}
                                    _hover={{ color: "#A8D5BA" }}
                                    cursor="pointer"
                                    onClick={() => {
                                        setActive(link?.asChildren?.length <= 0 ? link?.link : '');
                                        if (!link?.asChildren || link?.asChildren?.length <= 0) {
                                            navigate(link?.link);
                                        }
                                    }}
                                >
                                {link?.asChildren?.length > 0 ? 
                                    <MenuDropdown 
                                        withName={link?.tile}
                                        buttonColor='white'
                                        buttonIconSize={24}
                                        options={link?.asChildren}
                                    />
                                :link?.link === '/driving-school' ? (
                                    <HStack spacing={1}>
                                        <Icon as={MdLanguage as unknown as React.ElementType} />
                                        <Text>{link?.tile}</Text>
                                    </HStack>
                                ) : (
                                    link?.tile
                                )}
                            </Text>
                            ))}
                        </HStack>
                    </Hide>

                    {/* Mobile Menu Icon */}
                    <Show below="lg">
                        <IconButton
                            icon={<Icon as={FaBars as unknown as React.ElementType} />}
                            variant="outline"
                            colorScheme="whiteAlpha"
                            onClick={onOpen}
                            aria-label="Open Menu"
                        />
                    </Show>
                </Flex>
            </Box>

            {/* Drawer Menu for Mobile */}
            <Drawer placement="right" size={['xs', 'lg']} onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerBody>
                        <VStack mt={8} align="flex-start" spacing={4}>
                            {navLinks.map((link, i) => (
                                <Box
                                    key={i}
                                    w="100%"
                                    fontWeight={link?.link === active ? 'bold' : 'normal'}
                                    color={link?.link === active ? ElementColor.primary : 'black'}
                                    fontSize="md"
                                    cursor="pointer"
                                    onClick={() => {
                                        setActive(link?.asChildren?.length <= 0 ? link?.link : '');
                                        if (!link?.asChildren || link?.asChildren?.length <= 0) {
                                            navigate(link?.link);
                                        }
                                        onClose();
                                    }}
                                >
                                <HStack w="100%" justify="space-between" 
                                    _hover={{ color: "#A8D5BA" }}>
                                    <Text>{link?.tile}</Text>

                                    {link?.asChildren?.length > 0 && (
                                        <Box onClick={(e) => {
                                            e.stopPropagation(); // prevent parent click
                                            setOpenDropdownIndex(prev => (prev === i ? null : i));
                                        }}>
                                        <Icon
                                            size={30}
                                            as={
                                                (openDropdownIndex === i
                                                ? FaChevronCircleUp
                                                : FaChevronCircleDown) as unknown as React.ElementType
                                            }
                                        />
                                    </Box>
                                    )}
                                </HStack>

                                {link?.asChildren?.length > 0 && openDropdownIndex === i && (
                                    <VStack spacing={2} align="start" pl={4} pt={1}>
                                    {link?.asChildren?.map((child: any, j: number) => (
                                        <Box
                                            key={j}
                                            py={1}
                                            w="100%"
                                            cursor="pointer"
                                            _hover={{ bgColor: "#F9FAFB" }}
                                            onClick={() => {child?.onUse(); onClose()}}
                                        >
                                            <Text fontSize="13px" _hover={{ color: 'gray' }}>
                                                {child?.name}
                                            </Text>
                                        </Box>
                                    ))}
                                    </VStack>
                                )}
                                </Box>
                            ))}
                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>

        </Box>

        </Container>
    );
}