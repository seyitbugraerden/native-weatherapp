import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Modal,
  Pressable,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
const image = {
  uri: "https://images.unsplash.com/photo-1557683304-673a23048d34?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};
const HomeScreen = () => {
  const [value, setValue] = useState("");
  const [isModal, setIsModal] = useState(false);
  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <SafeAreaView style={styles.container}>
        <StatusBar hidden={true} />
        <View style={styles.paramed}>
          <TouchableOpacity
            style={styles.icon}
            onPressIn={() => {
              setIsModal(true);
            }}
          >
            <AntDesign name="search1" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <Text style={styles.text}>{value}</Text>
      </SafeAreaView>
      <Modal animationType="fade" transparent={true} visible={isModal}>
        <Pressable
          style={{
            flex: 1,
            backgroundColor: "rgba(0, 0, 0, 0.2)",
          }}
        >
          <View style={styles.modal}>
            <SafeAreaView>
              <View style={styles.modalContent}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                  <View>
                    <Text style={{ fontSize: 26, fontWeight: "300" }}>
                      Hangi Şehri Arıyorsun?
                    </Text>

                    <View>
                      <TextInput
                        style={{
                          color: "black",
                          borderWidth: 1,
                          padding: 10,
                          marginTop: 10,
                        }}
                        value={value}
                        onChangeText={(text) => setValue(text)}
                        placeholder="Şehir gir"
                        keyboardType="web-search"
                      />
                    </View>

                    <View
                      style={{ justifyContent: "center", alignItems: "center" }}
                    >
                      <Pressable
                        onPressOut={() => {
                          setIsModal(false);
                        }}
                        style={[
                          styles.icon,
                          {
                            backgroundColor: "black",
                            width: 44,
                            marginTop: 24,
                          },
                        ]}
                      >
                        <AntDesign name="search1" size={24} color="white" />
                      </Pressable>
                    </View>
                  </View>
                </TouchableWithoutFeedback>
              </View>
            </SafeAreaView>
          </View>
        </Pressable>
      </Modal>
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
  modal: {
    marginBottom: "auto",
    backgroundColor: "rgb(225,225,225)",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  modalContent: {
    backgroundColor: "rgb(225,225,225)",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 25,
    marginRight: 25,
    paddingTop: 15,
    paddingBottom: 35,
    paddingLeft: 0,
    paddingRight: 0,
  },
});
export default HomeScreen;
