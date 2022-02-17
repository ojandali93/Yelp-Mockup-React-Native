import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function SearchBar(props) {
  const { term, handleSetTerm, handleSearch } = props;

  return (
    <View style={styles.container}>
      <Ionicons name="search" size={30} style={styles.icon}></Ionicons>
      <TextInput
        placeholder="Search"
        value={term}
        style={styles.searchBar}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={handleSetTerm}
        onEndEditing={handleSearch}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f0eeee",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    marginVertical: 15,
    flexDirection: "row",
  },
  icon: {
    alignSelf: "center",
    marginHorizontal: 10,
  },
  searchBar: {
    marginRight: 15,
    flex: 1,
    marginVertical: 10,
    fontSize: 18,
  },
});
