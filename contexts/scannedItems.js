import { View, Text } from 'react-native'
import { React, useEffect, useState, createContext, useContext } from 'react';

const ScannedContext = createContext(null)

export const ScannedProvider = ({ children }) => {
    const [scannedItems, setScannedItems] = useState([]);
  
    const removeItem = (id, index) => {
      setScannedItems(scannedItems.filter(item => !(item.id === id)))
    }

    return (
      <ScannedContext.Provider value={{ scannedItems, setScannedItems, removeItem }}>
        {children}
      </ScannedContext.Provider>
    );
  };
  
  export default ScannedContext;