import { Box } from "@chakra-ui/react";
import Footer from "./Footer";
import { Outlet } from "react-router";
import Header from "./Header";


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
