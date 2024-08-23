import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Link } from "expo-router";
const image = {
  uri: "https://i.pinimg.com/736x/d0/0a/47/d00a47b9d9ef6df1559682e64f0b7426.jpg",
};
const HomeScreen = () => {
  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <SafeAreaView style={styles.container}>
        <StatusBar hidden={true} />
        <View style={styles.paramed}>
          <TouchableOpacity style={styles.icon}>
            <Link href="/search">
              <AntDesign name="search1" size={24} color="white" />
            </Link>
          </TouchableOpacity>
        </View>
        <Text style={styles.text}>Inside</Text>
      </SafeAreaView>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,.4)",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
  },
  icon: {
    backgroundColor: "rgba(255,255,255,.2)",
    padding: 10,
    borderRadius: 100,
  },
  paramed: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginRight: 10,
    padding: 10,
  },
});
export default HomeScreen;
