import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const CustomBtn = ({ label, onPress }) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={onPress}>
      <Text style={styles.btnText}>{label}</Text>
    </TouchableOpacity>
  );
};

export default CustomBtn;

const styles = StyleSheet.create({
  btnContainer: {
    width: "95%",
    alignSelf: "center",
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1A7DCA",
    marginVertical: 40,
    borderRadius: 5,
  },
  btnText: {
    fontSize: 20,
    color: "#FFFFFF",
    fontWeight: "600",
    lineHeight: 24,
  },
});
