import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors, CommonStyles, Fonts, screenWidth, Sizes } from '../../constants/styles'
import MyStatusBar from '../../components/myStatusBar'
import { Header } from '../../components/header'
import { useNavigation } from 'expo-router'

const VisitorDetailScreen = () => {

    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, backgroundColor: Colors.whiteColor }}>
            <MyStatusBar />
            <View style={{ flex: 1 }}>
                <Header header={'Visitor'} />
                <ScrollView showsVerticalScrollIndicator={false}>
                    {userImage()}
                    {visitorInfo()}
                </ScrollView>
            </View>
            {confirmAndSendinInfo()}
        </View>
    )

    function confirmAndSendinInfo() {
        return (
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => { navigation.pop() }}
                style={{ ...CommonStyles.buttonStyle, marginVertical: Sizes.fixPadding * 2.0 }}
            >
                <Text style={{ ...Fonts.whiteColor18Bold }}>
                    Confirm & Send In
                </Text>
            </TouchableOpacity>
        )
    }

    function visitorInfo() {
        return (
            <View style={styles.visitorInfoWrapper}>
                {infoShort({ title: 'Guest Name', description: 'George Smith' })}
                <View style={styles.divider} />
                {infoShort({ title: 'Building', description: 'B Wing' })}
                <View style={styles.divider} />
                {infoShort({ title: 'Flat Number', description: '403' })}
                <View style={styles.divider} />
                {infoShort({ title: 'Gate Pass', description: '#458796' })}
            </View>
        )
    }

    function infoShort({ title, description }) {
        return (
            <View style={{ margin: Sizes.fixPadding * 2.0 }}>
                <Text numberOfLines={1} style={{ ...Fonts.grayColor16Medium }}>
                    {title}
                </Text>
                <Text numberOfLines={1} style={{ ...Fonts.blackColor16SemiBold, marginTop: Sizes.fixPadding }}>
                    {description}
                </Text>
            </View>
        )
    }

    function userImage() {
        return (
            <Image
                source={require('../../assets/images/users/user2.png')}
                style={styles.userImageStyle}
            />
        )
    }
}

export default VisitorDetailScreen

const styles = StyleSheet.create({
    userImageStyle: {
        width: screenWidth / 2.9,
        height: screenWidth / 2.9,
        borderRadius: (screenWidth / 2.9) / 2.0,
        alignSelf: 'center',
        marginVertical: Sizes.fixPadding * 5.0,
    },
    divider: {
        backgroundColor: Colors.lightWhiteColor,
        height: 2.0,
    },
    visitorInfoWrapper: {
        backgroundColor: Colors.whiteColor,
        borderRadius: Sizes.fixPadding,
        ...CommonStyles.shadow,
        marginHorizontal: Sizes.fixPadding * 2.0,
        marginBottom: Sizes.fixPadding * 2.0,
    }
})