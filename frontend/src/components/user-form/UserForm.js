import React,{useState} from 'react';
import {HStack, Input,Button,Box} from '@chakra-ui/react';
import {FormField} from '../common-components';

const UserForm = ({isFormValid,handleFormSubmit}) => {
    const [email,setEmail] = useState();

    return (
        <HStack m = "20px 50px" justifyContent = "center">
            <FormField
                id = "form-email"
                isRequired
                error = "Invalid email"
                isInvalid = {isFormValid}
                w = "500px"
            >
                <Input
                    id = "input-email" 
                    variant="flushed" 
                    placeholder="Please enter your email" 
                    value = {email || ''}
                    onChange = {(e) => setEmail(e.target.value)}
                    focusBorderColor="black"
                />
            </FormField>
            <Box alignSelf = "baseline">
                <Button id = "submit-button" variant = "custom" onClick = {() => handleFormSubmit(email)}>
                    Submit
                </Button>
            </Box>
        </HStack>
    );
}
 
export default UserForm;