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
import { connect } from "react-redux";
import { toggleTheme } from "../stores/themeActions";

const HeaderBar = ({appTheme, toggleTheme}) => {

  function toggleThemeHandler() {
    if(appTheme.name == "light") {
      toggleTheme("dark")
    }else{
      toggleTheme("light")
    }
  }

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
        onPress={() => toggleThemeHandler()}
      >
        {/* sun */}
        <View
          style={{
            width: 40,
            height: 40,
            alignItems: "center",
            justifyContent: "center",
            ...(appTheme.name == "light" ) ? styles.selectedLightModeStyle : {},
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
            ...(appTheme.name == "dark" ) ? styles.selectedNightModeStyle : {},
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

function mapStateToProps(state) {
  return {
    appTheme: state.appTheme,
    error: state.error,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    toggleTheme: (themeType) => {
      return dispatch(toggleTheme(themeType))},
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(HeaderBar);
