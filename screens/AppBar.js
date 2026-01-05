import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function AppBar({ title = "Mon Application", back = false }) {
  const navigation = useNavigation();

  return (
    <View style={styles.appBar}>
      {back && (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backBtn}
        >
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>
      )}

      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  appBar: {
    height: 60,
    backgroundColor: "#007AFF",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    elevation: 4,
  },
  backBtn: {
    marginRight: 15,
    padding: 5,
  },
  backText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
