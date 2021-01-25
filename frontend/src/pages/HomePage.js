import React,{useContext,useState} from 'react';
import {useToast} from '@chakra-ui/react';
import {Layout} from '../components/common-components';
import {UserForm} from '../components/user-form';
import {AccountsPanel} from '../components/account';
import {validateEmail,getError} from '../utils';
import {getCustomerInfo} from '../api';
import {UserDetailsContext} from '../state';

export const HomePage = () => {
    const [isFormValid,setFormValidation] = useState(false);
    const toast = useToast();
    const {setUserDetails} = useContext(UserDetailsContext);
    
    const handleFormSubmit = async (email) => {
        const isInvalid = validateEmail(email);
        setFormValidation(isInvalid);
        if(!isInvalid){
            try{
                const userDetails = await getCustomerInfo({data: {email}});
                setUserDetails(userDetails);
            } catch(ex){
                toast({
                    title: "Error",
                    description: `${getError(ex)}`,
                    status: "error",
                    duration: 5000,
                    isClosable: true,
                    position: "top"
                });
            }
        }
    }

    return (
        <>
            <Layout>
                <UserForm
                    isFormValid = {isFormValid}
                    setFormValidation = {setFormValidation}
                    handleFormSubmit = {handleFormSubmit}
                />
                <AccountsPanel/>
            </Layout>
        </>
    )
}

export default HomePage;