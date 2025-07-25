import { Box,  Heading, Icon, Stack, Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import Section from "../../../common/Section";
import { MdPhone } from "react-icons/md";
import ContactBtns from "../../../common/Button/ContactBtns";
import { Container } from "../../../styling/layout";

const pricingData = [
	{
		title: 'Auto (Schakel)',
		prices: [
		['Losse rijles (50 min)', '€55'],
		['2 rijlessen', '€220'],
		['4 rijlessen', '€440'],
		['6 rijlessen', '€660'],
		['8 rijlessen', '€880'],
		['10 rijlessen', '€1100'],
		],
	},
	{
		title: 'Auto (Automaat)',
		prices: [
		['Losse rijles (50 min)', '€60'],
		['2 rijlessen', '€240'],
		['4 rijlessen', '€480'],
		['6 rijlessen', '€720'],
		['8 rijlessen', '€960'],
		['10 rijlessen', '€1200'],
		],
	},
	{
		title: 'Motor',
		prices: [
		['Proefles (100 min)', '€55'],
		['Losse rijles (50 min)', '€55'],
		['2 rijlessen (100 min)', '€220'],
		['4 rijlessen (100 min)', '€440'],
		['6 rijlessen (100 min)', '€660'],
		['8 rijlessen (100 min)', '€880'],
		['10 rijlessen (100 min)', '€1100'],
		],
	},
];

export default function Section2() {
	return (
		<Box bg="whitesmoke" py={10} px={[4,10,10,28]}>
			<Container>
			<Section
				leftContent={
				<>
					<Box borderRadius="lg" overflow="hidden" w="100%" mb={4}>
						<Heading mb={5}>Vervolgpakketten</Heading>
						<Text fontSize="14px" py={2}>
							Heb je een rijlespakket bij ons afgenomen maar heb je toch nog
							wat meer lessen nodig voordat je op kunt voor je praktijkexamen?
							Je kunt er natuurlijk voor kiezen om losse rijlessen af te
							nemen, maar we bieden je ook voordelige vervolgpakketten aan.
						</Text>

						<Text fontSize="14px" py={2}>
							Bij losse rijlessen bepaal jij zelf wanneer je wilt lessen. Je
							betaalt je rijlessen per keer en je maakt telkens een nieuwe
							lesafspraak. In overleg met je instructeur kun je dan al snel je
							examen aanvragen. Uniek is dat je bij de eerste rijles een
							instructiewijzer in een app krijgt waarin alle
							instructieonderdelen staan beschreven, en worden uitgelegd, die
							op het examen gevraagd kunnen worden.
						</Text>

						<Text fontSize="14px" py={2}>
							Twijfel je over welk vervolgpakket het beste bij jou past?
							Overleg het met je instructeur. Hij of zij kent je situatie als
							geen ander en kan je hier dus perfect over adviseren!
						</Text>
					</Box>

					<ContactBtns
						leftIcon={<Icon as={MdPhone as unknown as React.ElementType} />}
						leftText="085 060 41 10"
						rightText="Gratis proefles aanvragen"
					/>
				</>
				}
				rightContent={
					<Box borderRadius="lg" overflow="hidden" w="100%">
						<PricingTable />
					</Box>
				}
			/>
			</Container>
		</Box>
	);
}

function PricingTable() {

	return (
		<Box>
			<Stack
				direction={['column', 'row']}
				spacing={[4,6,6,2]}
				justify="center"
				align="flex-start"
				// flexWrap="wrap"
			>
				{pricingData.map((category, i) => (
				<Box
					key={i}
					bg="white"
					borderRadius="md"
					boxShadow="md"
					overflowX="auto"
					minW={['100%', '100%', '100px']}
				>
					<Box p={1}>
						<Heading textAlign={'center'} size="md" fontWeight={500} mb={4}>{category.title}</Heading>
						<Table size="sm">
							<Thead borderBottom={'1px solid #ccc'}>
								<Tr>
									<Th>Onderdeel</Th>
									<Th>Prijs</Th>
								</Tr>
							</Thead>
							<Tbody>
								{category.prices.map(([item, price], i) => (
									<Tr key={i}>
										<Td fontSize={'12px'}>{item}</Td>
										<Td fontSize={'12px'}>{price}</Td>
									</Tr>
								))}
							</Tbody>
						</Table>
					</Box>
				</Box>
				))}
			</Stack>
		</Box>
	);
}
