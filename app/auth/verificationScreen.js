import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, Modal, View } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import { Colors, Fonts, Sizes, CommonStyles, screenWidth } from '../../constants/styles';
import MyStatusBar from '../../components/myStatusBar';
import { useNavigation } from 'expo-router';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { OtpInput } from 'react-native-otp-entry';
import { Circle } from 'react-native-animated-spinkit';

const VerificationScreen = () => {

    const navigation = useNavigation();

    const [timer, setTimer] = useState(59);
    const [otpInput, setotpInput] = useState("");
    const [intervalStop, setIntervalStop] = useState(true);
    const [isLoading, setisLoading] = useState(false);

    const intervalRef = useRef();

    useEffect(() => {
        if (intervalStop) {
            intervalRef.current = setInterval(() => {
                if (timer > 0) {
                    setTimer((prevTimer) => prevTimer - 1);
                } else {
                    clearInterval(intervalRef.current);
                }
            }, 1000);
        }
        return () => {
            clearInterval(intervalRef.current);
        };
    }, [timer, intervalStop]);

    const formatSecondsToTime = (totalSeconds) => {
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        const formattedMinutes = String(minutes).padStart(2, "0");
        const formattedSeconds = String(seconds).padStart(2, "0");
        return `${formattedMinutes}:${formattedSeconds}`;
    };

    return (
        <View style={{ flex: 1, backgroundColor: Colors.whiteColor }}>
            <MyStatusBar />
            <View style={{ flex: 1, zIndex: 1, }}>
                {header()}
                <ScrollView automaticallyAdjustKeyboardInsets={true} showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingVertical: Sizes.fixPadding * 2.0 }}>
                    {otpInfo()}
                    {verifyButton()}
                    {resendInfo()}
                </ScrollView>
            </View>
            {bgImage()}
            {loadingDialog()}
        </View>
    )

    function loadingDialog() {
        return (
            <Modal
                animationType="fade"
                transparent={true}
                visible={isLoading}
            >
                <TouchableOpacity
                    activeOpacity={1}
                    style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.5)" }}
                >
                    <View style={{ justifyContent: "center", flex: 1 }}>
                        <TouchableOpacity
                            activeOpacity={1}
                            onPress={() => { }}
                            style={styles.dialogStyle}
                        >
                            <View style={{ ...CommonStyles.center }}>
                                <Circle size={50} color={Colors.primaryColor} />
                                <Text style={{ ...Fonts.primaryColor18SemiBold, marginTop: Sizes.fixPadding }}>
                                    Please wait
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            </Modal>
        )
    }

    function resendInfo() {
        return (
            <Text style={{ ...Fonts.grayColor15Medium, textAlign: 'center' }}>
                Don’t receive? { }
                <Text
                    onPress={() => { timer == 0 ? setTimer(59) : null }}
                    style={{ ...Fonts.primaryColor16Bold }}
                >
                    Resend
                </Text>
            </Text>
        )
    }

    function otpInfo() {
        return (
            <View style={{ marginHorizontal: Sizes.fixPadding * 2.0, marginTop: Sizes.fixPadding * 4.0 }}>
                <OtpInput
                    numberOfDigits={4}
                    focusColor={Colors.primaryColor}
                    onTextChange={text => {
                        if (text.length == 4) {
                            setotpInput(text);
                            setisLoading(true);
                            setTimeout(() => {
                                setisLoading(false);
                                setIntervalStop(false);
                                navigation.push('(tabs)')
                            }, 2000);
                        }
                    }}
                    theme={{
                        inputsContainerStyle: { justifyContent: 'center' },
                        pinCodeContainerStyle: { ...styles.textFieldStyle },
                        pinCodeTextStyle: { ...Fonts.blackColor18SemiBold },
                    }}
                />
                <Text style={{ ...Fonts.primaryColor18SemiBold, textAlign: 'center', marginTop: Sizes.fixPadding * 2.5 }}>
                    {formatSecondsToTime(timer)}
                </Text>
            </View>
        )
    }

    function verifyButton() {
        return (
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                    setisLoading(true);
                    setTimeout(() => {
                        setisLoading(false);
                        setIntervalStop(false);
                        navigation.push('(tabs)')
                    }, 2000);
                }}
                style={{ ...CommonStyles.buttonStyle, marginTop: Sizes.fixPadding * 6.0, marginBottom: Sizes.fixPadding * 2.5 }}
            >
                <Text style={{ ...Fonts.whiteColor18Bold }}>
                    Verify
                </Text>
            </TouchableOpacity>
        )
    }

    function bgImage() {
        return (
            <Image
                source={require('../../assets/images/authBg.png')}
                style={styles.authBgImage}
            />
        )
    }

    function header() {
        return (
            <View style={styles.headerWrapper}>
                <MaterialIcons
                    name='keyboard-backspace'
                    color={Colors.whiteColor}
                    size={26}
                    onPress={() => { navigation.pop() }}
                />
                <View style={{ flex: 1, marginLeft: Sizes.fixPadding }}>
                    <Text style={{ ...Fonts.whiteColor20SemiBold }}>
                        Verification
                    </Text>
                    <Text numberOfLines={1} style={{ ...Fonts.whiteColor16Medium, opacity: 0.6, marginTop: Sizes.fixPadding + 5.0 }}>
                        Enter otp we will sent you
                    </Text>
                </View>
            </View>
        )
    }
}

export default VerificationScreen

const styles = StyleSheet.create({
    headerWrapper: {
        backgroundColor: Colors.primaryColor,
        borderBottomLeftRadius: Sizes.fixPadding * 2.0,
        borderBottomRightRadius: Sizes.fixPadding * 2.0,
        padding: Sizes.fixPadding * 2.0,
        flexDirection: 'row'
    },
    authBgImage: {
        width: '100%',
        height: 330.0,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        opacity: 0.2,
    },
    textFieldStyle: {
        marginHorizontal: Sizes.fixPadding,
        backgroundColor: Colors.whiteColor,
        ...CommonStyles.shadow,
        borderWidth: 0,
        borderTopWidth: 0,
        borderBottomWidth: 0,
        width: screenWidth / 8.5,
        height: screenWidth / 8.5,
        borderRadius: Sizes.fixPadding,
    },
    dialogStyle: {
        backgroundColor: Colors.whiteColor,
        width: screenWidth - 40,
        alignSelf: 'center',
        borderRadius: Sizes.fixPadding,
        padding: Sizes.fixPadding * 3.0,
    },
})