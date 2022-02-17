import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import SearchBar from "../Components/SearchBar";
import yelp from "../api/yelp";

export default function SearchScreen() {
  const [term, setTerm] = useState();
  const [businesses, setBusinesses] = useState([]);

  const handleSetTerm = (e) => {
    console.log(e);
    setTerm(e);
  };

  const handleSearch = () => {
    yelp
      .get("/search", {
        params: {
          limit: 20,
          term: term,
          location: "Los Angeles, CA",
        },
      })
      .then((data) => {
        setBusinesses(data.data.businesses);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <View style={styles.screenStyle}>
      <SearchBar
        term={term}
        handleSetTerm={handleSetTerm}
        handleSearch={handleSearch}
      />
      <Text>There are {businesses.length} results</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screenStyle: {
    backgroundColor: "white",
  },
});
