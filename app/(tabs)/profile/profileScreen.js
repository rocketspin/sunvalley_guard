import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, Modal } from 'react-native'
import React, { useState } from 'react'
import { Colors, Sizes, Fonts, CommonStyles } from '../../../constants/styles'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from 'expo-router'

const ProfileScreen = () => {

    const navigation = useNavigation();

    const [showLogoutDialog, setShowLogoutDialog] = useState(false);

    return (
        <View style={{ flex: 1, backgroundColor: Colors.whiteColor }}>
            {header()}
            <ScrollView showsVerticalScrollIndicator={false}>
                {userInfo()}
                {profileOptions()}
            </ScrollView>
            {logoutDialog()}
        </View>
    )

    function logoutDialog() {
        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={showLogoutDialog}
                onRequestClose={() => { setShowLogoutDialog(false) }}
            >
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => { setShowLogoutDialog(false) }}
                    style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.5)" }}
                >
                    <View style={{ justifyContent: "center", flex: 1 }}>
                        <TouchableOpacity
                            activeOpacity={1}
                            onPress={() => { }}
                            style={styles.dialogWrapper}
                        >
                            <Text style={{ ...Fonts.primaryColor18Bold }}>
                                Logout
                            </Text>
                            <Text style={{ ...Fonts.grayColor16Medium, textAlign: 'center', marginTop: Sizes.fixPadding }}>
                                Are you sure you want to logout this account?
                            </Text>
                            <View style={{ ...CommonStyles.rowAlignCenter, marginTop: Sizes.fixPadding * 2.0 }}>
                                <TouchableOpacity
                                    activeOpacity={0.8}
                                    onPress={() => { setShowLogoutDialog(false) }}
                                    style={{ ...styles.dialogButton, backgroundColor: Colors.whiteColor, marginRight: Sizes.fixPadding }}
                                >
                                    <Text style={{ ...Fonts.blackColor16Medium }}>
                                        Cancel
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    activeOpacity={0.8}
                                    onPress={() => { setShowLogoutDialog(false); navigation.push('auth/signinScreen') }}
                                    style={{ ...styles.dialogButton, backgroundColor: Colors.primaryColor, marginLeft: Sizes.fixPadding }}
                                >
                                    <Text style={{ ...Fonts.whiteColor16Bold }}>
                                        Logout
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            </Modal>
        )
    }

    function profileOptions() {
        return (
            <View style={styles.profileOptionWrapper}>
                {optionShort({ option: 'Edit Profile', iconName: 'edit', IconAb: MaterialIcons, onPress: () => { navigation.push('editProfile/editProfileScreen') } })}
                {optionShort({ option: 'Notifications', iconName: 'notifications', IconAb: MaterialIcons, onPress: () => { navigation.push('notifications/notificationsScreen') } })}
                {optionShort({ option: 'Privacy Policy', iconName: 'info', IconAb: MaterialIcons, onPress: () => { navigation.push('privacyPolicy/privacyPolicyScreen') } })}
                {optionShort({ option: 'Terms & Conditions', iconName: 'description', IconAb: MaterialIcons, onPress: () => { navigation.push('termsAndCondition/termsAndConditionScreen') } })}
                {optionShort({ option: 'Support', iconName: 'headset', IconAb: MaterialIcons, onPress: () => { navigation.push('support/supportScreen') } })}
                {optionShort({ option: 'Logout', iconName: 'log-out', IconAb: Ionicons, onPress: () => { setShowLogoutDialog(true) } })}
            </View>
        )
    }

    function optionShort({ option, iconName, IconAb, onPress }) {
        return (
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={onPress}
                style={{
                    ...CommonStyles.rowAlignCenter,
                    marginHorizontal: Sizes.fixPadding + 5.0,
                    marginBottom: Sizes.fixPadding * 2.5
                }}
            >
                <View style={styles.optionIconWrapper}>
                    <IconAb
                        name={iconName}
                        color={Colors.primaryColor}
                        size={22}
                    />
                </View>
                <Text numberOfLines={1} style={{ ...Fonts.blackColor16Medium, marginLeft: Sizes.fixPadding }}>
                    {option}
                </Text>
            </TouchableOpacity>
        )
    }

    function userInfo() {
        return (
            <View style={styles.userInfoWrapper}>
                <Image
                    source={require('../../../assets/images/users/user1.png')}
                    style={{ width: 70.0, height: 70.0, borderRadius: Sizes.fixPadding }}
                />
                <View style={{ flex: 1, marginLeft: Sizes.fixPadding }}>
                    <View style={{ ...CommonStyles.rowAlignCenter }}>
                        <Text numberOfLines={1} style={{ flex: 1, lineHeight: 20, ...Fonts.blackColor16Medium }}>
                            Jacob Jones
                        </Text>
                        <Text style={{ ...Fonts.greenColor14Bold,lineHeight: 20, marginLeft: Sizes.fixPadding }}>
                            On Duty
                        </Text>
                    </View>
                    <Text numberOfLines={1} style={{ ...Fonts.grayColor14Medium, marginVertical: Sizes.fixPadding - 3.0 }}>
                        jacobjones@gmail.com
                    </Text>
                    <Text numberOfLines={1} style={{ ...Fonts.grayColor14Medium }}>
                        +91 8547859685
                    </Text>
                </View>
            </View>
        )
    }

    function header() {
        return (
            <View style={styles.headerWrapper}>
                <Text style={{ ...Fonts.whiteColor18Bold }}>
                    Profile
                </Text>
            </View>
        )
    }
}

export default ProfileScreen

const styles = StyleSheet.create({
    headerWrapper: {
        backgroundColor: Colors.primaryColor,
        borderBottomLeftRadius: Sizes.fixPadding * 2.0,
        borderBottomRightRadius: Sizes.fixPadding * 2.0,
        padding: Sizes.fixPadding * 2.0
    },
    qrCodeImage: {
        width: 30.0,
        height: 30.0,
        resizeMode: 'contain',
        tintColor: Colors.grayColor
    },
    userInfoWrapper: {
        ...CommonStyles.rowAlignCenter,
        backgroundColor: Colors.whiteColor,
        borderRadius: Sizes.fixPadding,
        ...CommonStyles.shadow,
        padding: Sizes.fixPadding + 5.0,
        marginHorizontal: Sizes.fixPadding * 2.0,
        marginVertical: Sizes.fixPadding * 2.5
    },
    optionIconWrapper: {
        width: 40.0,
        height: 40.0,
        borderRadius: Sizes.fixPadding,
        ...CommonStyles.center,
        backgroundColor: Colors.lightPrimaryColor
    },
    profileOptionWrapper: {
        backgroundColor: Colors.whiteColor,
        ...CommonStyles.shadow,
        borderRadius: Sizes.fixPadding,
        marginHorizontal: Sizes.fixPadding * 2.0,
        paddingTop: Sizes.fixPadding * 2.5,
        marginBottom: Sizes.fixPadding * 2.5
    },
    dialogButton: {
        flex: 1,
        ...CommonStyles.center,
        ...CommonStyles.shadow,
        borderRadius: Sizes.fixPadding,
        padding: Sizes.fixPadding + 5.0,
    },
    dialogWrapper: {
        backgroundColor: Colors.whiteColor,
        borderRadius: Sizes.fixPadding,
        marginHorizontal: Sizes.fixPadding * 2.0,
        ...CommonStyles.center,
        paddingVertical: Sizes.fixPadding * 2.5,
        paddingHorizontal: Sizes.fixPadding * 2.0
    }
})