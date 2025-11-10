import { Image, ScrollView, TextInput, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { Colors, Fonts, Sizes, CommonStyles } from '../../constants/styles';
import MyStatusBar from '../../components/myStatusBar';
import { useNavigation } from 'expo-router';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const SignupScreen = () => {

    const navigation = useNavigation();

    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [mobileNumber, setMobileNumber] = useState("");

    return (
        <View style={{ flex: 1, backgroundColor: Colors.whiteColor }}>
            <MyStatusBar />
            <View style={{ flex: 1, zIndex: 1, }}>
                {header()}
                <ScrollView automaticallyAdjustKeyboardInsets={true} showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingVertical: Sizes.fixPadding * 2.0 }}>
                    {userNameInfo()}
                    {emailAddressInfo()}
                    {mobileNumberInfo()}
                    {signupButton()}
                </ScrollView>
            </View>
            {bgImage()}
        </View>
    )

    function signupButton() {
        return (
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => { navigation.push('auth/verificationScreen') }}
                style={{ ...CommonStyles.buttonStyle, marginTop: Sizes.fixPadding * 4.0, marginBottom: Sizes.fixPadding * 2.0 }}
            >
                <Text style={{ ...Fonts.whiteColor18Bold }}>
                    Signup
                </Text>
            </TouchableOpacity>
        )
    }

    function mobileNumberInfo() {
        return (
            <View style={{ margin: Sizes.fixPadding * 2.0, }}>
                <Text style={{ ...Fonts.blackColor16Medium }}>
                    Mobile number
                </Text>
                <View style={styles.textFieldWrapper}>
                    <TextInput
                        placeholder='Enter Mobile Number'
                        placeholderTextColor={Colors.grayColor}
                        selectionColor={Colors.primaryColor}
                        cursorColor={Colors.primaryColor}
                        numberOfLines={1}
                        style={{ ...Fonts.blackColor15Medium, paddingTop: 0, paddingBottom: 0 }}
                        value={mobileNumber}
                        onChangeText={(text) => { setMobileNumber(text) }}
                        keyboardType='phone-pad'
                    />
                </View>
            </View>
        )
    }

    function emailAddressInfo() {
        return (
            <View style={{ marginHorizontal: Sizes.fixPadding * 2.0, marginVertical: Sizes.fixPadding - 5.0 }}>
                <Text style={{ ...Fonts.blackColor16Medium }}>
                    Email Address
                </Text>
                <View style={styles.textFieldWrapper}>
                    <TextInput
                        placeholder='Enter Email Address'
                        placeholderTextColor={Colors.grayColor}
                        selectionColor={Colors.primaryColor}
                        cursorColor={Colors.primaryColor}
                        numberOfLines={1}
                        style={{ ...Fonts.blackColor15Medium, paddingTop: 0, paddingBottom: 0 }}
                        value={email}
                        onChangeText={(text) => { setEmail(text) }}
                        keyboardType='email-address'
                    />
                </View>
            </View>
        )
    }

    function userNameInfo() {
        return (
            <View style={{ margin: Sizes.fixPadding * 2.0, }}>
                <Text style={{ ...Fonts.blackColor16Medium }}>
                    User Name
                </Text>
                <View style={styles.textFieldWrapper}>
                    <TextInput
                        placeholder='Enter User Name'
                        placeholderTextColor={Colors.grayColor}
                        selectionColor={Colors.primaryColor}
                        cursorColor={Colors.primaryColor}
                        numberOfLines={1}
                        style={{ ...Fonts.blackColor15Medium, paddingTop: 0, paddingBottom: 0 }}
                        value={userName}
                        onChangeText={(text) => { setUserName(text) }}
                    />
                </View>
            </View>
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
                        Signup
                    </Text>
                    <Text numberOfLines={1} style={{ ...Fonts.whiteColor16Medium, opacity: 0.6, marginTop: Sizes.fixPadding + 5.0 }}>
                        Create your new account
                    </Text>
                </View>
            </View>
        )
    }
}

export default SignupScreen

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
    textFieldWrapper: {
        backgroundColor: Colors.whiteColor,
        ...CommonStyles.shadow,
        borderRadius: Sizes.fixPadding,
        padding: Sizes.fixPadding + 5.0,
        marginTop: Sizes.fixPadding
    }
})