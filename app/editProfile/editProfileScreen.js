import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Colors, CommonStyles, Fonts, Sizes } from '../../constants/styles'
import MyStatusBar from '../../components/myStatusBar'
import { Header } from '../../components/header'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from 'expo-router'
import { PickImageOptionSheet } from '../../components/pickImageOptionSheet'

const EditProfileScreen = () => {

    const navigation = useNavigation();

    const [userName, setUserName] = useState('Kerry Richard');
    const [email, setEmail] = useState('kerryrichard@gmail.com');
    const [mobileNumber, setMobileNumber] = useState("+91 9254875968");
    const [showChangePhotoSheet, setShowChangePhotoSheet] = useState(false);

    return (
        <View style={{ flex: 1, backgroundColor: Colors.whiteColor }}>
            <MyStatusBar />
            <View style={{ flex: 1 }}>
                <Header header={'Edit Profile'} />
                <ScrollView
                    automaticallyAdjustKeyboardInsets={true}
                    showsVerticalScrollIndicator={false}
                >
                    {userPhotoWithChangeOption()}
                    {nameInfo()}
                    {emailInfo()}
                    {mobileNumberInfo()}
                </ScrollView>
            </View>
            {saveButton()}
            <PickImageOptionSheet
                title='Change Profile Photo'
                show={showChangePhotoSheet}
                setShow={setShowChangePhotoSheet}
            />
        </View>
    )

    function saveButton() {
        return (
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => { navigation.pop() }}
                style={{ ...CommonStyles.buttonStyle, margin: Sizes.fixPadding * 2.0 }}
            >
                <Text style={{ ...Fonts.whiteColor18Bold, }}>
                    Save
                </Text>
            </TouchableOpacity>
        )
    }

    function mobileNumberInfo() {
        return (
            <View style={{ marginHorizontal: Sizes.fixPadding * 2.0, marginBottom: Sizes.fixPadding * 2.5 }}>
                <Text style={{ ...Fonts.blackColor16Medium }}>
                    Mobile Number
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

    function emailInfo() {
        return (
            <View style={{ marginHorizontal: Sizes.fixPadding * 2.0, marginVertical: Sizes.fixPadding * 2.5 }}>
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

    function nameInfo() {
        return (
            <View style={{ marginHorizontal: Sizes.fixPadding * 2.0, }}>
                <Text style={{ ...Fonts.blackColor16Medium }}>
                    Name
                </Text>
                <View style={styles.textFieldWrapper}>
                    <TextInput
                        placeholder='Enter Name'
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

    function userPhotoWithChangeOption() {
        return (
            <View style={{ ...CommonStyles.center, marginVertical: Sizes.fixPadding * 4.0, marginHorizontal: Sizes.fixPadding * 2.0 }}>
                <View style={{ ...CommonStyles.center }}>
                    <Image
                        source={require('../../assets/images/users/user1.png')}
                        style={{ width: 100.0, height: 100.0, borderRadius: 50.0, }}
                    />
                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => { setShowChangePhotoSheet(true) }}
                        style={styles.changeOptionCircle}
                    >
                        <MaterialIcons
                            name='camera-alt'
                            color={Colors.primaryColor}
                            size={20}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default EditProfileScreen

const styles = StyleSheet.create({
    changeOptionCircle: {
        width: 36.0,
        height: 36.0,
        borderRadius: 18.0,
        backgroundColor: Colors.whiteColor,
        ...CommonStyles.shadow,
        ...CommonStyles.center,
        position: 'absolute',
        right: -2.0,
        bottom: -2.0
    },
    textFieldWrapper: {
        backgroundColor: Colors.whiteColor,
        ...CommonStyles.shadow,
        borderRadius: Sizes.fixPadding,
        padding: Sizes.fixPadding + 5.0,
        marginTop: Sizes.fixPadding
    },

})