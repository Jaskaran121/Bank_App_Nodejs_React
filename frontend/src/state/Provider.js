import React, { useState } from 'react';
import {UserDetailsContext,initialState} from './Context';

export const UserDetailsProvider = ({ children }) => {
  const setUserDetails = (newState) => {
      updateUserDetails((prevState) => {
        return {...prevState,...newState};
  })};

  const [userDetails, updateUserDetails] = useState({...initialState,setUserDetails});

  return (
    <UserDetailsContext.Provider value={userDetails}>
      {children}
    </UserDetailsContext.Provider>
  )
}

export default UserDetailsProvider;