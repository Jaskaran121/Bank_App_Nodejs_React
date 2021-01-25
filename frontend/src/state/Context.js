import { createContext } from 'react'

export const initialState = {
    customerDetails: null,
    accounts: null,
    // This method, can be used by any child to update userdetails state.
    setUserDetails: userDetails => {}
}
export const UserDetailsContext = createContext(initialState);