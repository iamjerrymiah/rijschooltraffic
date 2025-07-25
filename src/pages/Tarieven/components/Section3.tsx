import { Box, Heading, Icon, Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import Section from "../../../common/Section";
import { MdPhone } from "react-icons/md";
import ContactBtns from "../../../common/Button/ContactBtns";
import { Container } from "../../../styling/layout";

const examensData = [
	['Tussentijdse toets', '€300'],
	['Praktijkexamen Auto', '€300'],
	['AVB examen', '€200'],
	['AVD examen', '€300'],
	['B-NOR examen', '€350'],
	['B faalangst examen', '€375'],
];

export default function Section3() {
	return (
		<Container>
		<Box my={10} px={[4, 10, 10, 28]}>
			<Section
				leftContent={
				<>
					<Box borderRadius="lg" overflow="hidden" w="100%">
						<Heading mb={5}>Diverse prijzen</Heading>
						<Text fontSize="14px" py={2}>
							Alle examenonderdelen kun je voorafgaand aan je rijles al
							lezen/bestuderen. In een persoonlijk lesrapport wordt elk
							examenonderdeel zorgvuldig vastgelegd. Je houdt op deze manier
							een goed beeld van je kennis en kunde.
						</Text>

						<Text fontSize="14px" py={2}>
							beeld van je kennis en kunde. Je rijlessen kun je zelfstandig
							via de app of via onze klantenservice plannen op tijden en dagen
							die voor jullie allebei het beste uitkomen. Je examendatum
							bepaal je samen met je instructeur.
						</Text>
					</Box>

					<ContactBtns
						leftIcon={<Icon as={MdPhone as unknown as React.ElementType} />}
						leftText="085 060 41 10"
						rightText="Gratis proefles aanvragen"
					/>
				</>
				}
				rightContent={<Box overflow="hidden" w="100%"> <ExamensTable /> </Box>}
			/>
		</Box>
		</Container>
	);
}


function ExamensTable() {

  return (
		<Box p={[4, 6]} display="flex" justifyContent="center">
			<Box
				bg="white"
				borderRadius="md"
				boxShadow="md"
				overflowX="auto"
				w='110%'
				// minW={['100%','100%','100%','400px']}
			>
				<Box p={4}>
					<Heading size="md" mb={4} fontWeight={500} textAlign="center">Examens</Heading>
					<Table size="sm">
						<Thead >
							<Tr>
								<Th>Onderdeel</Th>
								<Th>Prijs</Th>
							</Tr>
						</Thead>
						<Tbody>
							{examensData.map(([name, price], idx) => (
								<Tr key={idx}>
									<Td fontSize={'12px'}>{name}</Td>
									<Td fontSize={'12px'}>{price}</Td>
								</Tr>
							))}
						</Tbody>
					</Table>
				</Box>
			</Box>
		</Box>
	);
}