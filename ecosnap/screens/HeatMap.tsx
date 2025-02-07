import React from "react";
import { View, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

const HeatmapScreen = () => {
  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />
        <script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
        <script src="https://unpkg.com/leaflet.heat/dist/leaflet-heat.js"></script>
        <style>
          body, html { margin: 0; padding: 0; height: 100%; }
          #map { width: 100%; height: 100vh; }
        </style>
      </head>
      <body>
        <div id="map"></div>
        <script>
          window.onload = function() {
            var map = L.map('map').setView([37.7749, -122.4194], 13);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
            
                      var heat = L.heatLayer([
              [37.7749, -122.4194, 1], 
              [37.7849, -122.4294, 0.8], 
              [37.7949, -122.4394, 0.6],
              [37.8049, -122.4494, 0.7],
              [37.8149, -122.4594, 0.5]
            ], {radius: 40, blur: 30, maxZoom: 15}).addTo(map);
          };
        </script>
      </body>
    </html>
  `;

  return (
    <View style={styles.container}>
      <WebView 
        source={{ html: htmlContent }} 
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

export default HeatmapScreen;
