import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Components/HomeScreen';
import Scan from './Components/Scan';
import List from './Components/List';
import { ScannedProvider } from './contexts/scannedItems';

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <MainApp />
  );
}

const MainApp = () => {
  return (
  <ScannedProvider>
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Scan" component={Scan} />
        <Tab.Screen name="List" component={List} />
      </Tab.Navigator>
    </NavigationContainer>
  </ScannedProvider>
  )
}
