import { View, Text, StyleSheet, ScrollView, Button } from 'react-native'
import React, { useContext } from 'react'
import ScannedContext from '../contexts/scannedItems';


export default function List() {
  const { scannedItems, removeItem } = useContext(ScannedContext);
  const totalKcal = scannedItems.reduce((sum, item) => sum + (item.nutriments?.["energy-kcal"] || 0), 0);
  return (
    <View style={styles.container}>
      <ScrollView>
      {scannedItems.map((item, index) => (
        <View key={`${item.id}-${index}`} style={styles.item}>
          <View style={styles.type}>
            <Text style={styles.label}>Item: </Text>
            <Text>{item.product_name || "Unknown"}</Text>
          </View>
          <View style={styles.type}>
            <Text style={styles.label}>Brand: </Text>
            <Text>{item.brands || "Unknown"}</Text>
          </View>
          <View style={styles.type}>
            <Text style={styles.label}>Calories: </Text>
            <Text>{item.nutriments?.["energy-kcal"] || "N/A"}</Text>
          </View>
          <View style={styles.type}>
            <Text style={styles.label}>Fat: </Text>
            <Text>{item.nutriments?.fat || "N/A"}</Text>
          </View>
          <View>
            <Button
              title="Remove"
              onPress={() => removeItem(item.id, index)}
            />
          </View>
        </View>
      ))}
      </ScrollView> 
      <View style={styles.banner}>
        <Text style={styles.bannerText}>Total Calories: {totalKcal}</Text>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingBottom: 50, 
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
    flexDirection: 'column'
  },
  label: {
    fontWeight: 'bold',
    color: '#000', // Black text for labels
    flexDirection: 'column'
  },
  noItemsText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#888', // Lighter gray
    marginTop: 20,
  },
  type: {
    flexDirection: 'row',
    marginBottom: 5
  },
  banner: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'black',
    padding: 10,
    alignItems: 'center',
  },
  bannerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

