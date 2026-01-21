import { View, Text } from 'react-native'
import { React, useEffect, useState, createContext, useContext } from 'react';

const ScannedContext = createContext(null)

export const ScannedProvider = ({ children }) => {
    const [scannedItems, setScannedItems] = useState([]);
  
    const removeItem = (id, indexToRemove) => {
      setScannedItems(currentList => currentList.filter((item, index) => !(item.id === id && index === indexToRemove))) 
      // The first parameter you use when calling setState becomes the current value of that state, which is why currentList isnt definded anywhere. 
    }

    return (
      <ScannedContext.Provider value={{ scannedItems, setScannedItems, removeItem }}>
        {children}
      </ScannedContext.Provider>
    );
  };
  
  export default ScannedContext;