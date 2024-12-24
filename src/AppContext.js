import { getEmptyGameData } from 'game-config';
import React, { createContext, useEffect, useState } from 'react';
import { Cookies } from 'react-cookie';



export const AppContext = createContext();
const AppProvider = ({ children }) => {
    const cookies = new Cookies();
    const [userData, setUserData] = useState(getEmptyGameData());

    useEffect(() => {
        const userDataFromCookie = cookies.get('userData');
        if (userDataFromCookie) {
            setUserData(userDataFromCookie);
            console.log("User data loaded from cookie", userDataFromCookie);
        }
    }, []);
    useEffect(() => {
        console.log("userData updated", userData);
    }, [userData]);
   
  const [role,setRole] = useState(undefined);
  return (
    <AppContext.Provider value={{ userData, setUserData, role, setRole }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider };