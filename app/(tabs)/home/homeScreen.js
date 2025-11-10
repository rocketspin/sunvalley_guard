import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors, CommonStyles, Fonts, screenWidth, Sizes } from '../../../constants/styles'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { OtpInput } from 'react-native-otp-entry';
import { useNavigation } from 'expo-router';

const HomeScreen = () => {

    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, backgroundColor: Colors.whiteColor }}>
            {header()}
            <ScrollView automaticallyAdjustKeyboardInsets={true} showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: Sizes.fixPadding * 2.0 }}>
                {visitorEntryInfo()}
                {addNewVisitorButton()}
            </ScrollView>
        </View>
    )

    function addNewVisitorButton() {
        return (
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => { navigation.push('addNewVisitor/addNewVisitorScreen') }}
                style={{ ...CommonStyles.buttonStyle, marginVertical: Sizes.fixPadding * 1.5 }}
            >
                <Text style={{ ...Fonts.whiteColor18Bold }}>
                    Add New Visitor
                </Text>
            </TouchableOpacity>
        )
    }

    function visitorEntryInfo() {
        return (
            <View style={styles.entryInfoWrapper}>
                <Text style={{ ...Fonts.primaryColor16Bold, textAlign: 'center' }}>
                    Visitor Entry
                </Text>
                <Text style={{ ...Fonts.grayColor16Medium, textAlign: 'center', marginTop: Sizes.fixPadding }}>
                    Enter visitor entry code or scan code
                </Text>
                {entryCodeInfo()}
                {confirmButton()}
                {orScanText()}
                <Image
                    source={require('../../../assets/images/icons/qrCode.png')}
                    style={styles.qrCodeImageStyle}
                />
            </View>
        )
    }

    function orScanText() {
        return (
            <Text style={{ textAlign: 'center', ...Fonts.grayColor16Medium, marginVertical: Sizes.fixPadding * 2.0 }}>
                ---------- Or Scan ----------
            </Text>
        )
    }

    function confirmButton() {
        return (
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => { navigation.push('visitorDetail/visitorDetailScreen') }}
                style={styles.confirmButton}
            >
                <Text style={{ ...Fonts.primaryColor18Bold }}>
                    Confirm
                </Text>
            </TouchableOpacity>
        )
    }

    function entryCodeInfo() {
        return (
            <View style={{ marginVertical: Sizes.fixPadding * 4.0 }}>
                <OtpInput
                    numberOfDigits={6}
                    focusColor={Colors.primaryColor}
                    onTextChange={text => {
                        if (text.length == 6) {
                            navigation.push('visitorDetail/visitorDetailScreen')
                        }
                    }}
                    theme={{
                        inputsContainerStyle: { justifyContent: 'center' },
                        pinCodeContainerStyle: { ...styles.textFieldStyle },
                        pinCodeTextStyle: { ...Fonts.blackColor16SemiBold },
                        focusStickStyle: { height: 20 }
                    }}
                />
            </View>
        )
    }

    function header() {
        return (
            <View style={styles.headerWrapper}>
                <Image
                    source={require('../../../assets/images/users/user1.png')}
                    style={styles.userImageStyle}
                />
                <View style={{ flex: 1, marginHorizontal: Sizes.fixPadding + 5.0 }}>
                    <Text numberOfLines={1} style={{ ...Fonts.whiteColor16Bold }}>
                        Hi Jacob Jones
                    </Text>
                    <Text numberOfLines={1} style={{ ...Fonts.whiteColor14SemiBold, opacity: 0.7, marginTop: Sizes.fixPadding - 7.0 }}>
                        On duty
                    </Text>
                </View>
                <MaterialIcons
                    name='notifications'
                    color={Colors.whiteColor}
                    size={24}
                    onPress={() => { navigation.push('notifications/notificationsScreen') }}
                />
            </View>
        )
    }
}

export default HomeScreen

const styles = StyleSheet.create({
    userImageStyle: {
        width: 42.0,
        height: 42.0,
        borderRadius: 21.0,
        borderColor: Colors.whiteColor,
        borderWidth: 2.0,
    },
    headerWrapper: {
        backgroundColor: Colors.primaryColor,
        borderBottomLeftRadius: Sizes.fixPadding * 2.0,
        borderBottomRightRadius: Sizes.fixPadding * 2.0,
        padding: Sizes.fixPadding * 2.0,
        ...CommonStyles.rowAlignCenter
    },
    textFieldStyle: {
        marginHorizontal: Sizes.fixPadding - 5.0,
        backgroundColor: Colors.whiteColor,
        ...CommonStyles.shadow,
        borderWidth: 0,
        borderTopWidth: 0,
        borderBottomWidth: 0,
        width: screenWidth / 11,
        height: screenWidth / 11,
        borderRadius: Sizes.fixPadding,
    },
    confirmButton: {
        backgroundColor: Colors.lightPrimaryColor,
        ...CommonStyles.center,
        padding: Sizes.fixPadding + 5.0,
        borderRadius: Sizes.fixPadding,
    },
    qrCodeImageStyle: {
        width: 80.0,
        height: 80.0,
        resizeMode: 'contain',
        alignSelf: 'center',
    },
    entryInfoWrapper: {
        backgroundColor: Colors.whiteColor,
        borderRadius: Sizes.fixPadding,
        ...CommonStyles.shadow,
        paddingVertical: Sizes.fixPadding * 2.5,
        paddingHorizontal: Sizes.fixPadding * 2.0,
        marginVertical: Sizes.fixPadding * 2.5,
        marginHorizontal: Sizes.fixPadding * 2.0
    }
})