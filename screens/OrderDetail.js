import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    ImageBackground
} from 'react-native';

import { dummyData, COLORS, SIZES, FONTS, icons } from "../constants";
import { IconButton } from "../components";
import {connect} from 'react-redux'
import { ScrollView } from 'react-native-gesture-handler';



const OrderDetail = ({navigation, route, appTheme}) => {

    const [selectedItem, setSelectedItem] = React.useState(null)

    React.useEffect(() =>{
        let { selectedItem } = route.params
        setSelectedItem(selectedItem)
    }, [])



    function renderHeaderSection() {
        return(
            <View
                style={{
                    width: "100%",
                    height: "55%",
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <View
                    style={{
                        position: 'absolute',
                        top:0,
                        bottom: 0,
                        right: 0,
                        left: 40,
                        borderBottomLeftRadius: 100,
                        backgroundColor: COLORS.primary
                    }}
                >
                    <Image 
                        source={selectedItem?.thumbnail}
                        resizeMode='contain'
                        style={{
                            width: SIZES.width * 0.7,
                            height: SIZES.width * 0.7
                        }}
                    />
                    {/* back button */}
                    


                </View>
            </View>
        )
    }


    return (
        <View 
            style={{
                flex: 1,
                backgroundColor: appTheme.backgroundColor
            }}
        >
            <ScrollView
                contentContainerStyle={{
                    flex: 1,
                    paddingBottom: 150
                }}
            >
                {/* header */}
                {renderHeaderSection()}

                {/* detail */}
            </ScrollView>
        </View>
    )
}

function mapStateToProps(state) {
  return {
    appTheme: state.appTheme,
    error: state.error,
  };
}
function mapDispatchToProps(dispatch) {
  return {};
}
export default connect(mapStateToProps, mapDispatchToProps)(OrderDetail);