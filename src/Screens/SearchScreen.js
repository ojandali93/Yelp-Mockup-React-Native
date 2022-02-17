import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import SearchBar from "../Components/SearchBar";

export default function SearchScreen() {
  const [term, setTerm] = useState();

  const handleSetTerm = (e) => {
    console.log(e);
    setTerm(e);
  };

  const handleSearch = () => {
    console.log("search: " + term);
  };

  return (
    <View style={styles.screenStyle}>
      <SearchBar
        term={term}
        handleSetTerm={handleSetTerm}
        handleSearch={handleSearch}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screenStyle: {
    backgroundColor: "white",
  },
});
