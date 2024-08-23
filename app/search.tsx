import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Search = () => {
  return (
    <View style={styles.searchArea}>
      <Text>Search</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  searchArea: {
    backgroundColor: "transparent",
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
});
export default Search;
