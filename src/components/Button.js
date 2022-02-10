import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native'

TouchableOpacity.defaultProps = { activeOpacity: 0.6 };

const Button = ({ onPress, title, size, backgroundColor, disabled, color }) => (
  
  <TouchableOpacity
    onPress={onPress}
    disabled={disabled}
    style={[
      styles.appButtonContainer,
      size === "sm" && {
        paddingHorizontal: 8,
        paddingVertical: 8,
        elevation: 6,
        width: 100,
        marginRight: 18
      },
      size === "medium" && {
        paddingHorizontal: 8,
        paddingVertical: 12,
        elevation: 6,
        width: 160,
      },
      backgroundColor && { backgroundColor },
      disabled && { 
        backgroundColor: 'lightgrey',
      },
    ]}
  >
    <Text style={[styles.appButtonText, size === "sm" && { fontSize: 14 }, color && { color}]}>
      {title}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#ff6600",
    borderRadius: 30,
    paddingVertical: 8,
    paddingHorizontal: 8,
    width: 130,
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }
});

export default Button;
