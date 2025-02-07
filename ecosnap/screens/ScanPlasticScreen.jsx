import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet, Alert } from "react-native";
import { RNCamera } from "react-native-camera";

const ScanPlasticScreen = ({ navigation }) => {
  const [cameraRef, setCameraRef] = useState(null);

  const takePicture = async () => {
    if (cameraRef) {
      const options = { quality: 0.5, base64: true };
      const data = await cameraRef.takePictureAsync(options);
      console.log("Captured Photo: ", data.uri);
      Alert.alert("Photo Taken", "Check the console for the captured photo URI.");
    }
  };

  return (
    <View style={styles.container}>
      <RNCamera
        ref={(ref) => setCameraRef(ref)}
        style={styles.camera}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.off}
        captureAudio={false}
      >
        <View style={styles.cameraOverlay}>
          <TouchableOpacity style={styles.captureButton} onPress={takePicture}>
            <Text style={styles.captureText}>Capture</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.manualEntryButton} onPress={() => navigation.navigate("ManualEntryScreen")}>
            <Text style={styles.buttonText}>Manual Entry</Text>
          </TouchableOpacity>
        </View>
      </RNCamera>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#000" },
  camera: { flex: 1, width: "100%" },
  cameraOverlay: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 20,
  },
  captureButton: {
    backgroundColor: "blue",
    padding: 20,
    borderRadius: 50,
    marginBottom: 20,
  },
  captureText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  manualEntryButton: {
    backgroundColor: "green",
    padding: 15,
    borderRadius: 10,
  },
  buttonText: { color: "white", fontSize: 16, fontWeight: "bold" },
});

export default ScanPlasticScreen;
