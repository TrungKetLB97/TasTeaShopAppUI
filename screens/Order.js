import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
    TouchableWithoutFeedback,
    Image,
    FlatList
} from 'react-native';

import { connect } from 'react-redux'

import { IconButton, TabButton } from "../components";
import { dummyData, COLORS, FONTS, SIZES, icons } from "../constants";

const Order = ({ navigation, route, appTheme }) => {

    const [selectedLocation, setSelectedLocation] = React.useState(null)
    const [selectedTab, setSelectedTab] = React.useState(0);

    React.useEffect(() => {
        let { selectedLocation } = route.params
        setSelectedLocation(selectedLocation)
    })

    function renderHeaderSection() {
        return (
          <SafeAreaView
            style={{
              height: 200,
              backgroundColor: COLORS.primary,
              alignItems: "center",
            }}
          >
            {/* new bar */}
            <View
              style={{
                flexDirection: "row",
                paddingHorizontal: SIZES.radius,
                alignItems: "center",
                marginTop: 20
              }}
            >
              <IconButton
                icon={icons.leftArrow}
                onPress={() => navigation.goBack()}
              />
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                }}
              >
                <Text
                  style={{ color: COLORS.white, ...FONTS.h1, fontSize: 25 }}
                > Pick-Up Order </Text>
              </View>
              <View style={{width: 25}} />
            </View>

            {/* location */}
            <View
                style={{
                    marginTop: SIZES.radius,
                    backgroundColor: COLORS.white1,
                    paddingHorizontal: SIZES.radius,
                    paddingVertical: 5,
                    borderRadius: SIZES.padding
                }}
            >
                <Text
                    style={{ color: COLORS.primary, ...FONTS.body3 }}
                > {selectedLocation?.title} </Text>
            </View>

          </SafeAreaView>
        );
    }

    function renderTopTabBarSection() {
        return (
          <View
            style={{
              flexDirection: "row",
              height: 50,
              marginTop: SIZES.radius,
              justifyContent: "center",
              paddingLeft: SIZES.padding * 2,
              paddingRight: SIZES.padding,
            }}
          >
            {/* tab buttons */}
            <View
              style={{
                flex: 1,
                flexDirection: "row",
              }}
            >
              <TabButton
                containerStyle={{
                  width: 60,
                }}
                label="Menu"
                selected={selectedTab == 0}
                onPress={() => setSelectedTab(0)}
              />

              {/* previous */}
              <TabButton
                containerStyle={{
                  width: 90,
                }}
                label="Previous"
                selected={selectedTab == 1}
                onPress={() => setSelectedTab(1)}
              />

              {/* favourite */}
              <TabButton
                containerStyle={{
                  width: 90,
                }}
                label="Favourite"
                selected={selectedTab == 2}
                onPress={() => setSelectedTab(2)}
              />
            </View>

            {/* order Number */}
            <View
                style={{
                    width: 35,
                    height: 35,
                    borderRadius: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: COLORS.primary
                }}
            >
                <Text style={{color: COLORS.white, ...FONTS.h3}} >0</Text>
            </View>
          </View>
        );
    }

    function renderSideBar() {
        return(
            <View>
                
            </View>
        )
    }

    return (
      <View style={styles.container}>
        {/* header */}
        {renderHeaderSection()}

        {/* detail */}
        <View
          style={{
            flex: 1,
            backgroundColor: appTheme.backgroundColor,
            marginTop: -55,
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
          }}
        >
            {/* Tab bar */}
        {renderTopTabBarSection()}

        {/* side bar & listing */}
        <View
            style={{
                flex : 1,
                flexDirection:'row'
            }}
        >
            {/* side bar */}
            {renderSideBar()}

            {/* listing */}
        </View>

        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

function mapStateToProps(state) {
  return {
    appTheme: state.appTheme,
    error: state.error,
  };
}
function mapDispatchToProps(dispatch) {
  return {};
}
export default connect(mapStateToProps, mapDispatchToProps)(Order);