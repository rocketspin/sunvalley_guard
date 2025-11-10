import { StyleSheet, Text, View, Image, StatusBar } from 'react-native'
import React, { useEffect } from 'react'
import { Colors, Fonts, Sizes, CommonStyles, screenWidth } from '../constants/styles'
import { useNavigation } from 'expo-router'

const SplashScreen = () => {

    const navigation = useNavigation();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.push('auth/signinScreen');
        }, 2000);
        return () => { clearTimeout(timer) }
    }, [])

    return (
        <View style={{ flex: 1, backgroundColor: Colors.primaryColor }}>
            <StatusBar translucent barStyle={'light-content'} backgroundColor={Colors.primaryColor} />
            <View style={{ flex: 1, ...CommonStyles.center }}>
                {appIcon()}
                {appName()}
            </View>
            {appType()}
        </View>
    )

    function appType() {
        return (
            <Text style={styles.appTypeTexStyle}>
                Guard App
            </Text>
        )
    }

    function appName() {
        return (
            <View style={{ ...CommonStyles.rowAlignCenter, marginTop: Sizes.fixPadding - 5.0 }}>
                <View style={styles.nameDivider} />
                <Text style={{ ...Fonts.whiteColor20ExtraBold, marginHorizontal: Sizes.fixPadding - 5.0 }}>
                    Society Connect
                </Text>
                <View style={styles.nameDivider} />
            </View>
        )
    }

    function appIcon() {
        return (
            <Image
                source={require('../assets/images/appLogo.png')}
                style={styles.appIconStyle}
            />
        )
    }
}

export default SplashScreen

const styles = StyleSheet.create({
    nameDivider: {
        backgroundColor: Colors.whiteColor,
        height: 2.0,
        flex: 0.2
    },
    appIconStyle: {
        width: screenWidth / 3.0,
        height: screenWidth / 3.0,
        resizeMode: 'contain'
    },
    appTypeTexStyle: {
        ...Fonts.whiteColor16Bold,
        marginBottom: Sizes.fixPadding * 2.0,
        alignSelf: 'center',
    }
})