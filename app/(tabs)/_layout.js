import { Tabs } from 'expo-router';
import React, { useCallback, useState } from 'react';
import { Colors, CommonStyles, Sizes, Fonts, screenWidth } from '../../constants/styles';
import { View, StyleSheet, BackHandler, Image, Platform, Pressable, Text } from 'react-native';
import MyStatusBar from '../../components/myStatusBar';
import { useFocusEffect } from '@react-navigation/native';
import { ExitToast } from '../../components/exitToast';

export default function TabLayout() {

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

    return (
        <View style={{ flex: 1 }}>
            <MyStatusBar />
            <Tabs
                initialRouteName='home/homeScreen'
                screenOptions={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: Colors.primaryColor,
                    tabBarInactiveTintColor: Colors.grayColor,
                    tabBarStyle: { ...styles.tabBarStyle },
                    tabBarButton: (props) => (
                        <Pressable
                            {...props}
                            android_ripple={{
                                color: Colors.whiteColor,
                            }}
                        />
                    ),
                }}
            >
                <Tabs.Screen
                    name="home/homeScreen"
                    options={{
                        tabBarIcon: ({ color, focused }) => (
                            <View style={{ ...CommonStyles.center, width: screenWidth / 4.3 }}>
                                <Image
                                    source={require('../../assets/images/icons/home.png')}
                                    style={{ ...styles.iconStyle, tintColor: color }}
                                />
                                <Text numberOfLines={1} style={{ ...focused ? { ...Fonts.primaryColor16SemiBold } : { ...Fonts.grayColor16SemiBold } }}>
                                    Home
                                </Text>
                            </View>
                        ),
                    }}
                />
                <Tabs.Screen
                    name="inout/inoutScreen"
                    options={{
                        tabBarIcon: ({ color, focused }) => (
                            <View style={{ ...CommonStyles.center, width: screenWidth / 4.3 }}>
                                <Image
                                    source={require('../../assets/images/icons/inout.png')}
                                    style={{ ...styles.iconStyle, tintColor: color }}
                                />
                                <Text numberOfLines={1} style={{ ...focused ? { ...Fonts.primaryColor16SemiBold } : { ...Fonts.grayColor16SemiBold } }}>
                                    In-out
                                </Text>
                            </View>
                        ),
                    }}
                />
                <Tabs.Screen
                    name="messages/messagesScreen"
                    options={{
                        tabBarIcon: ({ color, focused }) => (
                            <View style={{ ...CommonStyles.center, width: screenWidth / 4.3 }}>
                                <Image
                                    source={require('../../assets/images/icons/message.png')}
                                    style={{ ...styles.iconStyle, tintColor: color }}
                                />
                                <Text numberOfLines={1} style={{ ...focused ? { ...Fonts.primaryColor16SemiBold } : { ...Fonts.grayColor16SemiBold } }}>
                                    Messages
                                </Text>
                            </View>
                        ),
                    }}
                />
                <Tabs.Screen
                    name="profile/profileScreen"
                    options={{
                        tabBarIcon: ({ color, focused }) => (
                            <View style={{ ...CommonStyles.center, width: screenWidth / 4.3 }}>
                                <Image
                                    source={require('../../assets/images/icons/profile.png')}
                                    style={{ ...styles.iconStyle, tintColor: color }}
                                />
                                <Text numberOfLines={1} style={{ ...focused ? { ...Fonts.primaryColor16SemiBold } : { ...Fonts.grayColor16SemiBold } }}>
                                    Profile
                                </Text>
                            </View>
                        ),
                    }}
                />
            </Tabs>
            {backClickCount == 1 ? <ExitToast /> : null}
        </View>
    );
}

const styles = StyleSheet.create({
    middleCircle: {
        width: 53.0,
        height: 53.0,
        borderRadius: 26.5,
        backgroundColor: Colors.primaryColor,
        ...CommonStyles.center,
        ...CommonStyles.shadow,
        borderColor: Colors.whiteColor,
        borderWidth: 3.0,
        marginBottom: Sizes.fixPadding * 6.0
    },
    iconStyle: {
        width: 26.0,
        height: 26.0,
        resizeMode: 'contain',
        marginBottom: Sizes.fixPadding - 9.0,
    },
    tabBarStyle: {
        height: 70.0,
        backgroundColor: Colors.whiteColor,
        ...CommonStyles.shadow,
        paddingTop: Sizes.fixPadding + 6.0,
        borderTopWidth: Platform.OS == 'ios' ? 0.0 : 1.0,
        borderColor: Colors.lightWhiteColor,
        paddingHorizontal: Sizes.fixPadding - 5.0
    }
})
