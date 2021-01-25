import React,{useContext,useState} from 'react';
import {Box,Heading,Button,Table,TableCaption,Thead,Tr,Th,Tbody,Td,useToast} from '@chakra-ui/react';
import {UserDetailsContext} from '../../state';
import {formatCurrency,getTotalBalance,getError,parseNum} from '../../utils';
import AccountActions from './AccountActions';
import {ModalComponent} from '../common-components';
import {ActionTypes,CurrencyTypes} from '../../utils/datamaps';
import {performAccountAction,getCustomerInfo} from '../../api';

const initialFormState = {
    actionType: Object.keys(ActionTypes)[0] + "",
    currencyType: Object.keys(CurrencyTypes)[0],
    amount: 1,
    destinationAccountNumber: null
}

const AccountsPanel = () => {
    const state = useContext(UserDetailsContext);
    const toast = useToast();
    const [modalState,setModalState] = useState({
        isOpen: false,
        account: null
    });

    const [actionForm,setActionForm] = useState(initialFormState);
    
    const {customerDetails,accounts,setUserDetails} = state;

    if(!customerDetails || !accounts)
        return null;

    const handleActionChange = (value,key) => {
        setActionForm({...actionForm,[key]:value});
    }

    const isFormValid = () => {
        if(actionForm["actionType"] === "TRANSFER" && !actionForm["destinationAccountNumber"])
            return false;
        if(!actionForm["amount"])
            return false;
        return true;
    }

    const handleActionSubmit = async () => {
        if(!isFormValid())
            return;
        const payload = {...actionForm,amount: parseNum(actionForm.amount,2),
            email:customerDetails.email,accountNumber: modalState.account.accountNumber};
        try{
            const {message} = await performAccountAction({data: payload});
            console.log(message);
            if(message === "Success"){
                const newUserDetails = await getCustomerInfo({data: {email:customerDetails.email}});
                setUserDetails(newUserDetails);
                launchToast("success","Request completed successfully");
            }
        } catch(ex){
            launchToast("error",`${getError(ex)}`);
        }
        setModalState({isOpen: false,account: null});
        handleModalClose();
    }

    const launchToast = (status,description) => {
        toast({
            title: status,
            description,
            status,
            duration: 5000,
            isClosable: true,
            position: "top"
        });
    }

    const handleModalClose = () => {
        setModalState({isOpen: false, account:null});
        setActionForm(initialFormState);
    }

    return (
        <Box>
            <Heading p = "20px" as="h6" size="lg">
                {accounts.length} accounts found
            </Heading>
            <Table variant="simple">
                <TableCaption textAlign = "right">
                    Total Balance : {formatCurrency(getTotalBalance(accounts))}
                </TableCaption>
                <Thead>
                    <Tr>
                        <Th>Account</Th>
                        <Th textAlign = "right">Balance $</Th>
                        <Th textAlign = "right">Perform Action</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {
                        accounts && accounts.map((account) => {
                            return (
                                <Tr key = {account.accountNumber}>
                                    <Td>{`${account.accountType} - ${account.accountNumber}`}</Td>
                                    <Td textAlign = "right">{formatCurrency(account.balance)}</Td>
                                    <Td textAlign = "right">
                                        <Button onClick = {() => setModalState({isOpen: true,account})}>
                                            Action  
                                        </Button>
                                    </Td>
                                </Tr>
                            )
                        })
                    }
                </Tbody>
            </Table>
            <ModalComponent
                isOpen = {modalState.isOpen}
                setModalState = {setModalState}
                title = {`Peform action for account: ${modalState.isOpen && modalState.account.accountNumber}`}
                body = {<AccountActions values = {actionForm} account = {modalState.account} handleChange = {handleActionChange}/>}
                submitButtonText = "Perform"
                handleSubmit = {handleActionSubmit}
                handleClose = {handleModalClose}
            />
        </Box>
    );
}
 
export default AccountsPanel;