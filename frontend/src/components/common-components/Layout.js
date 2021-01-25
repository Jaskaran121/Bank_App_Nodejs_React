import React from 'react';
import {Container} from '@chakra-ui/react';
import {Navbar} from '../navbar';

const Layout = ({children}) => {
    return (
        <Container maxWidth = "1440px" margin = "auto" p = "0px">
            <Navbar/>
            {children}
        </Container>
    );
}
 
export default Layout;