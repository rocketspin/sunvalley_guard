import { Text, View } from 'react-native';
import React from 'react';
import Toast from 'react-native-toast-message';
import { CommonStyles, Fonts } from '../constants/styles';

export const CommonToast = () => {

    const toastConfig = {
        tomatoToast: ({ text1 }) => (
            <View style={{ ...CommonStyles.toastStyle }}>
                <Text style={{ ...Fonts.whiteColor14SemiBold }}>
                    {text1}
                </Text>
            </View>
        )
    }

    return (
        <Toast
            config={toastConfig}
            position={'bottom'}
            visibilityTime={1000}
        />
    )
}