import { BackHandler, KeyboardAvoidingView, Image, Platform, FlatList, ScrollView, TextInput, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useRef, useState } from 'react'
import { Colors, Fonts, Sizes, CommonStyles } from '../../constants/styles'
import MyStatusBar from '../../components/myStatusBar'
import { useFocusEffect, useNavigation } from 'expo-router'
import IntlPhoneInput from "react-native-intl-phone-input";
import { ExitToast } from '../../components/exitToast'

const SigninScreen = () => {

    const navigation = useNavigation();

    const backAction = () => {
        backClickCount == 1 ? BackHandler.exitApp() : _spring();
        return true;
    };

    useFocusEffect(
        useCallback(() => {
            const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);
            return () => {
                backHandler.remove();
            };
        }, [backAction])
    );

    function _spring() {
        setBackClickCount(1);
        setTimeout(() => {
            setBackClickCount(0);
        }, 1000);
    }

    const [backClickCount, setBackClickCount] = useState(0);
    const [countries, setcountries] = useState();
    const [mobileNumber, setMobileNumber] = useState("");
    const phoneInput = useRef();

    return (
        <View style={{ flex: 1, backgroundColor: Colors.whiteColor }}>
            <MyStatusBar />
            <View style={{ flex: 1, zIndex: 1, }}>
                {header()}
                <ScrollView automaticallyAdjustKeyboardInsets={true} showsVerticalScrollIndicator={false}>
                    {mobileNumberInfo()}
                    {signinButton()}
                </ScrollView>
            </View>
            {bgImage()}
            {backClickCount == 1 ? <ExitToast /> : null}
        </View>
    )

    function bgImage() {
        return (
            <Image
                source={require('../../assets/images/authBg.png')}
                style={styles.authBgImage}
            />
        )
    }

    function signinButton() {
        return (
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => { navigation.push('auth/signupScreen') }}
                style={{ ...CommonStyles.buttonStyle, marginBottom: Sizes.fixPadding * 2.0 }}
            >
                <Text style={{ ...Fonts.whiteColor18Bold }}>
                    Signin
                </Text>
            </TouchableOpacity>
        )
    }

    function mobileNumberInfo() {
        return (
            <View style={{ marginHorizontal: Sizes.fixPadding * 2.0, marginVertical: Sizes.fixPadding * 6.0 }}>
                <Text style={{ ...Fonts.blackColor16Medium, marginBottom: Sizes.fixPadding }}>
                    Mobile number
                </Text>
                <IntlPhoneInput
                    ref={phoneInput}
                    onChangeText={({ phoneNumber }) => setMobileNumber(phoneNumber)}
                    defaultCountry="IN"
                    inputProps={{ cursorColor: Colors.primaryColor, selectionColor: Colors.primaryColor }}
                    containerStyle={styles.mobileFieldStyle}
                    placeholder={"Enter your mobile number"}
                    phoneInputStyle={styles.mobileNumberInputStyle}
                    placeholderTextColor={Colors.grayColor}
                    dialCodeTextStyle={{ ...Fonts.blackColor15Medium, marginRight: Sizes.fixPadding + 2.0, }}
                    filterInputStyle={{ ...Fonts.blackColor15Medium }}
                    flagStyle={{ width: 0, height: 0 }}
                    customModal={(modalVisible, allCountries, onCountryChange) => {
                        const filterCountries = (value) => {
                            const data = allCountries.filter(
                                (obj) =>
                                    obj.en.indexOf(value) > -1 || obj.dialCode.indexOf(value) > -1
                            );
                            setcountries(data);
                        };
                        return (
                            <View>
                                <Modal
                                    visible={modalVisible}
                                    transparent={true}
                                    onRequestClose={() => { phoneInput.current.hideModal() }}
                                    animationType="slide"
                                >
                                    <TouchableOpacity
                                        activeOpacity={1}
                                        onPress={() => { phoneInput.current.hideModal() }}
                                        style={{ flex: 1, justifyContent: "center", backgroundColor: "rgba(0,0,0,0.3)", }}
                                    >
                                        <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : null}>
                                            <TouchableOpacity
                                                activeOpacity={1}
                                                onPress={() => { }}
                                                style={styles.countryPickerModal}
                                            >
                                                <View style={{ ...CommonStyles.shadow, backgroundColor: Colors.whiteColor, borderRadius: Sizes.fixPadding - 5.0 }}>
                                                    <TextInput
                                                        autoCapitalize="words"
                                                        autoFocus
                                                        style={{ ...Fonts.blackColor15Medium, padding: Sizes.fixPadding, }}
                                                        cursorColor={Colors.primaryColor}
                                                        selectionColor={Colors.primaryColor}
                                                        onFocus={() => setcountries(allCountries)}
                                                        onChangeText={filterCountries}
                                                        placeholderTextColor={Colors.grayColor}
                                                        placeholder="Search"
                                                    />
                                                </View>
                                                <FlatList
                                                    contentContainerStyle={{ paddingTop: Sizes.fixPadding }}
                                                    data={countries ? countries : allCountries}
                                                    keyExtractor={(item, index) => index.toString()}
                                                    showsVerticalScrollIndicator={false}
                                                    renderItem={({ item }) => (
                                                        <TouchableOpacity
                                                            onPress={() => onCountryChange(item.code)}
                                                            style={{ ...CommonStyles.rowAlignCenter, marginVertical: Sizes.fixPadding - 5.0, }}
                                                        >
                                                            <Text style={{ fontSize: 25 }}>{item.flag}</Text>
                                                            <Text style={{ ...Fonts.blackColor15Medium, flex: 1, marginHorizontal: Sizes.fixPadding, }}>
                                                                {item.en}
                                                            </Text>
                                                            <Text style={{ ...Fonts.blackColor15Medium }}>
                                                                {item.dialCode}
                                                            </Text>
                                                        </TouchableOpacity>
                                                    )}
                                                />
                                            </TouchableOpacity>
                                        </KeyboardAvoidingView>
                                    </TouchableOpacity>
                                </Modal>
                            </View>
                        );
                    }}
                />
            </View>
        )
    }

    function header() {
        return (
            <View style={styles.headerWrapper}>
                <Text style={{ ...Fonts.whiteColor20SemiBold }}>
                    Signin
                </Text>
                <Text style={{ ...Fonts.whiteColor16Medium, opacity: 0.6, marginTop: Sizes.fixPadding + 5.0 }}>
                    Signin to your account
                </Text>
            </View>
        )
    }
}

export default SigninScreen

const styles = StyleSheet.create({
    headerWrapper: {
        backgroundColor: Colors.primaryColor,
        borderBottomLeftRadius: Sizes.fixPadding * 2.0,
        borderBottomRightRadius: Sizes.fixPadding * 2.0,
        padding: Sizes.fixPadding * 2.0,
    },
    countryPickerModal: {
        height: "80%",
        marginHorizontal: Sizes.fixPadding * 2.0,
        backgroundColor: Colors.whiteColor,
        borderRadius: Sizes.fixPadding,
        paddingHorizontal: Sizes.fixPadding * 2.0,
        paddingTop: Sizes.fixPadding * 2.0,
    },
    mobileFieldStyle: {
        backgroundColor: Colors.whiteColor,
        paddingHorizontal: Sizes.fixPadding + 2.0,
        paddingVertical: Sizes.fixPadding + 3.0,
        borderRadius: Sizes.fixPadding,
        ...CommonStyles.shadow,
    },
    mobileNumberInputStyle: {
        flex: 1,
        ...Fonts.blackColor15Medium,
        paddingLeft: Sizes.fixPadding + 5.0,
        borderLeftColor: Colors.grayColor,
        borderLeftWidth: 1.0,
        height: 25.0,
        paddingTop: 0,
        paddingBottom: 0
    },
    authBgImage: {
        width: '100%',
        height: 330.0,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        opacity: 0.2,
    }
})