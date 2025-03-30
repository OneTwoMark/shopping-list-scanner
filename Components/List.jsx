import { View, Text, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import ScannedContext from '../contexts/scannedItems';


export default function List() {
  const { scannedItems, setScannedItems } = useContext(ScannedContext);
  return (
    <View style={styles.container}>
      {
        scannedItems.map((item, index) => (
          <View key={`${item.id}-${index}`} style={styles.item}> {/* combined product id and index to avoid errors when duplicate scans */}
            <Text style={styles.itemText}>
              <Text style={styles.label}>Name: </Text>{item.brands || "Unknown"}
              <Text style={styles.label}>Calories: </Text>{item.nutriments?.["energy-kcal"] || "N/A"}
              <Text>Fat: </Text>{item.nutriments?.fat}
            </Text>
          </View>
        )
    )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5', // Light gray background
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333', // Dark gray text
  },
  item: {
    backgroundColor: '#fff', // White card background
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000', // Shadow for depth
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // Elevation for Android shadow
  },
  itemText: {
    fontSize: 16,
    color: '#555', // Medium gray text
    marginBottom: 4,
  },
  label: {
    fontWeight: 'bold',
    color: '#000', // Black text for labels
  },
  noItemsText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#888', // Lighter gray
    marginTop: 20,
  },
});