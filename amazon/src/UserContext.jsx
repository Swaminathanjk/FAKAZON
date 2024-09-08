import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth } from './firebase'; // Import your Firebase config
import { doc, getDoc } from 'firebase/firestore';
import { db } from './firebase'; // Ensure Firestore is imported 

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      if (auth.currentUser) {
        const userDoc = doc(db, 'users', auth.currentUser.uid); 
        const userSnap = await getDoc(userDoc);
        if (userSnap.exists()) {
          setUserData(userSnap.data()); 
        }
      }
    };

    fetchUserData();
  }, []);

  return (
    <UserContext.Provider value={userData}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
