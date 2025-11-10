import { ScrollView, StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Colors, CommonStyles, Fonts, screenWidth, Sizes } from '../../constants/styles';
import MyStatusBar from '../../components/myStatusBar';
import { Header } from '../../components/header';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useLocalSearchParams, useNavigation } from 'expo-router';

const AddGuestScreen = () => {

    const navigation = useNavigation();

    const { selectedAreas } = useLocalSearchParams();

    const [guestName, setGuestName] = useState('');
    const [mobileNumber, setMobileNumber] = useState("");

    return (
        <View style={{ flex: 1, backgroundColor: Colors.whiteColor }}>
            <MyStatusBar />
            <View style={{ flex: 1 }}>
                <Header header='Guest Entry' />
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    automaticallyAdjustKeyboardInsets={true}
                >
                    {addGuestView()}
                    {guestNameInfo()}
                    {mobileNumberInfo()}
                    {visitingAreaInfo()}
                </ScrollView>
            </View>
            {continueButton()}
        </View>
    )

    function continueButton() {
        return (
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => { navigation.push('allowSuccess/allowSuccessScreen') }}
                style={{ ...CommonStyles.buttonStyle, margin: Sizes.fixPadding * 2.0 }}
            >
                <Text style={{ ...Fonts.whiteColor18Bold }}>
                    Continue
                </Text>
            </TouchableOpacity>
        )
    }

    function visitingAreaInfo() {
        return (
            <View style={{ marginHorizontal: Sizes.fixPadding * 2.0, marginBottom: Sizes.fixPadding * 2.5 }}>
                <Text style={{ ...Fonts.blackColor16Medium }}>
                    Select Visiting Area
                </Text>
                <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => navigation.push('selectVisitingArea/selectVisitingAreaScreen', { from: 'guest' })}
                    style={styles.dropDownBox}
                >
                    <Text style={{ flex: 1, ...selectedAreas ? { ...Fonts.blackColor15Medium } : { ...Fonts.grayColor15Medium } }}>
                        {selectedAreas ? JSON.parse(selectedAreas).join(' , ').toString() : 'Select Visiting Area'}
                    </Text>
                    <Ionicons
                        name={'caret-down-outline'}
                        color={Colors.blackColor}
                        size={18}
                        style={{ marginLeft: Sizes.fixPadding }}
                    />
                </TouchableOpacity>
            </View>
        )
    }

    function mobileNumberInfo() {
        return (
            <View style={{ marginHorizontal: Sizes.fixPadding * 2.0, marginVertical: Sizes.fixPadding * 2.5 }}>
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

    function guestNameInfo() {
        return (
            <View style={{ marginHorizontal: Sizes.fixPadding * 2.0 }}>
                <Text style={{ ...Fonts.blackColor16Medium }}>
                    Guest Name
                </Text>
                <View style={styles.textFieldWrapper}>
                    <TextInput
                        placeholder='Enter Guest Name'
                        placeholderTextColor={Colors.grayColor}
                        selectionColor={Colors.primaryColor}
                        cursorColor={Colors.primaryColor}
                        numberOfLines={1}
                        style={{ ...Fonts.blackColor15Medium, paddingTop: 0, paddingBottom: 0 }}
                        value={guestName}
                        onChangeText={(text) => { setGuestName(text) }}
                    />
                </View>
            </View>
        )
    }

    function addGuestView() {
        return (
            <View style={styles.optionBox}>
                <Image
                    source={require('../../assets/images/authBg.png')}
                    style={styles.optionBgImage}
                />
                <View style={styles.optionBoxOverlay}>
                    <Text numberOfLines={1} style={{ ...Fonts.primaryColor16SemiBold, margin: Sizes.fixPadding + 5.0 }}>
                        Add Guest
                    </Text>
                    <Image
                        source={require('../../assets/images/options/addGuest.png')}
                        style={{ width: screenWidth / 5.0, height: screenWidth / 5.0, }}
                    />
                </View>
            </View>
        )
    }
}

export default AddGuestScreen

const styles = StyleSheet.create({
    optionBoxOverlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        borderRadius: Sizes.fixPadding,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    optionBgImage: {
        width: '100%',
        height: 140.0,
        opacity: 0.1,
        borderRadius: Sizes.fixPadding
    },
    optionBox: {
        backgroundColor: Colors.whiteColor,
        ...CommonStyles.shadow,
        borderRadius: Sizes.fixPadding,
        marginVertical: Sizes.fixPadding * 3.5,
        width: screenWidth / 2.34,
        alignSelf: 'center'
    },
    textFieldWrapper: {
        backgroundColor: Colors.whiteColor,
        ...CommonStyles.shadow,
        borderRadius: Sizes.fixPadding,
        padding: Sizes.fixPadding + 5.0,
        marginTop: Sizes.fixPadding
    },
    dropDownBox: {
        ...CommonStyles.rowAlignCenter,
        backgroundColor: Colors.whiteColor,
        ...CommonStyles.shadow,
        borderRadius: Sizes.fixPadding,
        padding: Sizes.fixPadding + 5.0,
        marginTop: Sizes.fixPadding
    },
})