import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentScreen = () => {
  username = "Siva Lokam";
  return (
    <View>
      <Text style={styles.textStyle}>Getting started with React Native </Text>
      <Text style={styles.headerStyle}>My Name is {username}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
  },
  headerStyle: {
    fontSize: 20,
  },
});

export default ComponentScreen;
