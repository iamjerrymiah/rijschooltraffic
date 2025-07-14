import { Box } from "@chakra-ui/react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import { Outlet } from "react-router";


export default function Layout() {
    return (
		<Box w='100%'>
			<Header />
				<Box as="main" pt={['200px', '155px']}>
					<Outlet />
				</Box>
			<Footer />
		</Box>
    )
}
