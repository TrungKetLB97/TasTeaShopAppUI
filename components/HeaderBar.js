import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
  StyleSheet,
} from "react-native";
import { COLORS, SIZES, FONTS, icons } from "../constants";

export default function HeaderBar() {
  return (
    <SafeAreaView
      style={{
        height: 150,
        width: "100%",
        backgroundColor: COLORS.purple,
        flexDirection: "row",
      }}
    >
      {/* greetings */}
      <View
        style={{
          flex: 1,
          paddingLeft: SIZES.padding,
          paddingTop: SIZES.radius,
        }}
      >
        <Text
          style={{
            color: COLORS.white,
            ...FONTS.h2,
          }}
        >
          Wendy,{" "}
        </Text>
        <Text
          style={{
            color: COLORS.white,
            ...FONTS.h2,
          }}
        >
          {" "}
          Welcome Back !{" "}
        </Text>
      </View>
      {/* Toggle Button */}
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-end",
          marginHorizontal: SIZES.padding,
          marginTop: SIZES.radius,
          height: 40,
          borderRadius: 20,
          backgroundColor: COLORS.lightPurple,
        }}
      >
        {/* sun */}
        <View
          style={{
            width: 40,
            height: 40,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={icons.sunny}
            style={{
              height: 30,
              width: 30,
              tintColor: COLORS.white,
            }}
          />
        </View>
        {/* moon */}
        <View
          style={{
            width: 40,
            height: 40,
            alignItems: "center",
            justifyContent: "center",
            ...styles.selectedNightModeStyle,
          }}
        >
          <Image
            source={icons.night}
            style={{
              height: 30,
              width: 30,
              tintColor: COLORS.white,
            }}
          />
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  selectedNightModeStyle: {
    borderRadius: 20,
    backgroundColor: COLORS.black,
  },
  selectedLightModeStyle: {
    borderRadius: 20,
    backgroundColor: COLORS.yellow,
  },
});
