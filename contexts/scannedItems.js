import { View, Text } from 'react-native'
import { React, useEffect, useState, createContext, useContext } from 'react';

const ScannedContext = createContext(null)

export const ScannedProvider = ({ children }) => {
    const [scannedItems, setScannedItems] = useState([]);
  
    return (
      <ScannedContext.Provider value={{ scannedItems, setScannedItems }}>
        {children}
      </ScannedContext.Provider>
    );
  };
  
  export default ScannedContext;