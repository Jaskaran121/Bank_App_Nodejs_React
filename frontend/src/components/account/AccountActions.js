import React from 'react';
import {VStack,FormControl,Select,HStack,FormLabel,NumberInput,
    NumberInputField,NumberInputStepper,NumberIncrementStepper,NumberDecrementStepper} from '@chakra-ui/react';
import {ActionTypes,CurrencyTypes} from '../../utils/datamaps';

const AccountActions = ({account,handleChange,values}) => {
    if(!account)
        return null;
    
    const {actionType,currencyType,amount,destinationAccountNumber} = values;

    const isActionTypeTransfer = () => actionType === "TRANSFER";

    return (
        <VStack>
            <FormControl id="actionType" isRequired>
                <HStack>
                    <FormLabel w = "200px">Action Type:</FormLabel>
                    <Select 
                        value = {actionType} 
                        w = "350px" 
                        onChange = {(e) => handleChange(e.target.value,"actionType")}
                    >
                        {
                            Object.entries(ActionTypes).map(
                                ([type,name]) => <option key = {type} value = {type}>{name}</option>
                            )
                        }
                    </Select>
                </HStack>
            </FormControl>

            <FormControl id="currencyType" isRequired>
                <HStack>
                    <FormLabel w = "200px">Currency Type:</FormLabel>
                    <Select 
                        w = "350px"
                        value = {currencyType}
                        onChange = {(e) => handleChange(e.target.value,"currencyType")}
                    >
                        {
                            Object.entries(CurrencyTypes).map(
                                ([type,name]) => <option key = {type} value = {type}>{name}</option>
                            )
                        }
                    </Select>
                </HStack>
            </FormControl>

            <FormControl id="amount" isRequired>
                <HStack>
                    <FormLabel w = "200px">Amount:</FormLabel>
                    <NumberInput 
                        min={1.00} 
                        step = {5}
                        onChange = {(value) => handleChange(value,"amount")}
                        value = {amount}
                        keepWithinRange={true}
                        clampValueOnBlur={true}
                        w = "350px" 
                    >
                        <NumberInputField />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                </HStack>
            </FormControl>
            {
                 isActionTypeTransfer() && 
                 <FormControl id="transferTo" isRequired isInvalid = {!(destinationAccountNumber)}>
                    <HStack>
                        <FormLabel w = "200px">Transfer to Account:</FormLabel>
                        <NumberInput 
                            min={0} 
                            keepWithinRange={true} 
                            clampValueOnBlur={true} 
                            w = "350px" 
                            step = {5}
                            value = {destinationAccountNumber || ""} 
                            onChange = {(_,value) => handleChange(value,"destinationAccountNumber")}
                        >
                            <NumberInputField />
                        </NumberInput>
                    </HStack>
                </FormControl>
            }            
        </VStack>
    );
}
 
export default AccountActions;