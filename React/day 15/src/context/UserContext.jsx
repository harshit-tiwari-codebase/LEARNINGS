import React, { createContext } from 'react'


export const UserDataContext =  createContext();
const UserContext = (props) => {

   const data = "harshit"
    
  return (
    
    <UserDataContext.Provider value={data} >
           {props.children}
    </UserDataContext.Provider>
    
  )
}

export default UserContext
