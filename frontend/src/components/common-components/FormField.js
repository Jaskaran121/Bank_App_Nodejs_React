import React from 'react';
import {FormControl,FormErrorMessage} from '@chakra-ui/react';

const FormField = (props) => {
    const {error,children} = props;
    return (
        <FormControl {...props}>
            {children}
            <FormErrorMessage>
                {error}
            </FormErrorMessage>
        </FormControl>
    );
}
 
export default FormField;