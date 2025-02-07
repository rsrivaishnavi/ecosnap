import React from "react";
import { View, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

const ScanPlasticScreen = () => {
  return (
    <View style={styles.container}>
      <WebView 
        source={{ uri: "https://teachablemachine.withgoogle.com/models/d8cVXzq8w/" }} 
        javaScriptEnabled={true} 
        domStorageEnabled={true} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ScanPlasticScreen;
