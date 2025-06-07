import { View, Text, StyleSheet, Button } from 'react-native'
import React, {useState, useEffect, use, useContext} from 'react'
import { CameraView, Camera } from 'expo-camera'
import { fetchProductData } from '../api/productApi';
import ScannedContext from '../contexts/scannedItems';

export default function Scan() {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [showCamera, setShowCamera] = useState(true)
    const { scannedItems, setScannedItems } = useContext(ScannedContext);

    let lock = false; // lock variable ensures camera only scans once, by default it scans many times. 

  useEffect(() => {
    const getCameraPermissions = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getCameraPermissions();
  }, []);

  const addItem = (product) => {
    setScannedItems([...scannedItems, product])
  }

  const handleBarcodeScanned = async ({ type, data }) => {
    try {
    if (!lock) {
    lock = true;
    setScanned(true);
    console.log("data: ", data)
    console.log("type: ", type)
    const product = await fetchProductData(data)
    addItem(product.product)
    setShowCamera(false)
    if (product.product) {
      console.log("Product Name: ", product.product.product_name)
      console.log("Product Brand: ", product.product.brands)
      alert(`Product Name: ${product.product.product_name}`);
    }
  } 
}
    catch (error) {
      // console.error("Error fetching product data:", error);
      alert("Failed to fetch product data. Please try again.");
    }
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
    {showCamera && ( 
      <CameraView
        onBarcodeScanned={scanned ? undefined : handleBarcodeScanned}
        barcodeScannerSettings={{
            barcodeTypes: [
                "pdf417",
                "ean13",    // Retail barcode formats
                "ean8",
                "upc_a",
                "upc_e",
              ],
        }}
        style={StyleSheet.absoluteFillObject}
      />
    )}
      {scanned && (
        <Button title={"Tap to Scan Again"} onPress={() => {setScanned(false);
        setShowCamera(true)}} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      justifyContent: "center",
    },
  });

  