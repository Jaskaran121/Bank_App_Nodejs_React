import React,{useContext} from 'react';
import {Divider, HStack,Heading,useColorMode,Spacer,Box,IconButton} from '@chakra-ui/react';
import {SunIcon,MoonIcon} from '@chakra-ui/icons';
import {UserDetailsContext} from '../../state';

export const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const state = useContext(UserDetailsContext);

    return (
        <>
            <HStack p = "20px">
                <Box>
                    <Heading>
                        Welcome {state.customerDetails ? state.customerDetails.firstName : null}
                    </Heading>
                </Box>
                <Spacer/>
                <Box>
                    <IconButton
                        aria-label="Search database"
                        icon={colorMode === "light" ? <MoonIcon/>: <SunIcon />}
                        onClick = {toggleColorMode}
                    />
                </Box>
            </HStack>
            <Divider opacity = {1}/>
        </>
    );
}
 
export default Navbar;