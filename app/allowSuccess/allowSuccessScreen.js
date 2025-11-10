import { StyleSheet, Text, View, Image, BackHandler } from 'react-native';
import React, { useCallback } from 'react';
import { Colors, CommonStyles, Fonts, Sizes } from '../../constants/styles';
import MyStatusBar from '../../components/myStatusBar';
import { useNavigation } from 'expo-router';
import { useFocusEffect } from '@react-navigation/native';

const AllowSuccessScreen = () => {

    const navigation = useNavigation();

    const backAction = () => {
        navigation.push('(tabs)');
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

    return (
        <View style={{ flex: 1, backgroundColor: Colors.whiteColor }}>
            <MyStatusBar />
            <View style={{ flex: 1 }}>
                {successInfo()}
            </View>
            {backToHomeText()}
        </View>
    )

    function backToHomeText() {
        return (
            <Text
                onPress={() => navigation.push('(tabs)')}
                style={{ ...Fonts.primaryColor18Bold, margin: Sizes.fixPadding * 2.0, alignSelf: 'center' }}
            >
                Back To Home
            </Text>
        )
    }

    function successInfo() {
        return (
            <View style={{ flex: 1, ...CommonStyles.center }}>
                <Image
                    source={require('../../assets/images/success.png')}
                    style={styles.successIconStyle}
                />
                <View style={{ margin: Sizes.fixPadding * 2.0, ...CommonStyles.center }}>
                    <Text style={{ ...Fonts.primaryColor20SemiBold }}>
                        Allowed
                    </Text>
                    <Text style={{ ...Fonts.grayColor18Medium, marginTop: Sizes.fixPadding }}>
                        Enter guest to the society safely.
                    </Text>
                </View>
            </View>
        )
    }
}

export default AllowSuccessScreen

const styles = StyleSheet.create({
    successIconStyle: {
        width: 110.0,
        height: 110.0,
        resizeMode: 'contain'
    }
})