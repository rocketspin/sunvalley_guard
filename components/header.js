import { useNavigation } from "expo-router"
import { Colors, CommonStyles, Sizes, Fonts } from "../constants/styles"
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { StyleSheet, View, Text } from 'react-native'

export const Header = ({ header }) => {

    const navigation = useNavigation();

    return (
        <View style={styles.headerWrapStyle}>
            <MaterialIcons
                name='keyboard-backspace'
                color={Colors.whiteColor}
                size={26}
                onPress={() => { navigation.pop() }}
            />
            <Text style={{ ...Fonts.whiteColor18Bold, flex: 1, marginLeft: Sizes.fixPadding + 5.0 }}>
                {header}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerWrapStyle: {
        backgroundColor: Colors.primaryColor,
        padding: Sizes.fixPadding * 2.0,
        borderBottomLeftRadius: Sizes.fixPadding * 2.0,
        borderBottomRightRadius: Sizes.fixPadding * 2.0,
        ...CommonStyles.rowAlignCenter,
    }
});