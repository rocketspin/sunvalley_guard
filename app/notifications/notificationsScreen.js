import { StyleSheet, Text, View, Animated } from 'react-native'
import React, { useState, useRef } from 'react'
import { Colors, Sizes, Fonts, CommonStyles, screenWidth } from '../../constants/styles'
import MyStatusBar from '../../components/myStatusBar'
import { Header } from '../../components/header'
import { SwipeListView } from "react-native-swipe-list-view";
import Toast from 'react-native-toast-message';
import { CommonToast } from '../../components/commonToast';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const notificationList = [
    {
        key: '1',
        title: 'Function Organizing',
        description: 'Notify you that tomorrow society celebrate ...',
        time: '2 min',
    },
    {
        key: '2',
        title: 'Salary',
        description: 'Your salary credited succesfully.',
        time: '5 min',
    },
    {
        key: '3',
        title: 'Action',
        description: 'Please collect your new uniform.',
        time: '10 min',
    },
];

const rowTranslateAnimatedValues = {};

const NotificationsScreen = () => {

    const [listData, setListData] = useState(notificationList);

    const animationIsRunning = useRef(false);

    Array(listData.length + 1)
        .fill("")
        .forEach((_, i) => {
            rowTranslateAnimatedValues[`${i}`] = new Animated.Value(1);
        });

    return (
        <View style={{ flex: 1, backgroundColor: Colors.whiteColor }}>
            <MyStatusBar />
            <View style={{ flex: 1 }}>
                <Header header={'Notifications'} />
                {listData.length == 0 ? noNotificationInfo() : notificationsInfo()}
            </View>
            <CommonToast />
        </View>
    )

    function noNotificationInfo() {
        return (
            <View style={{ flex: 1, ...CommonStyles.center, marginHorizontal: Sizes.fixPadding * 2.0 }}>
                <View style={styles.noNotificationIconBox}>
                    <MaterialIcons
                        name='notifications-off'
                        color={Colors.primaryColor}
                        size={50}
                    />
                </View>
                <Text style={{ ...Fonts.grayColor16SemiBold, marginTop: Sizes.fixPadding * 2.0 }}>
                    No Any Notifications
                </Text>
            </View>
        )
    }

    function notificationsInfo() {
        const onSwipeValueChange = (swipeData) => {
            const { key, value } = swipeData;
            if (value > screenWidth || (value < -screenWidth && !animationIsRunning.current)) {
                animationIsRunning.current = true;
                Animated.timing(rowTranslateAnimatedValues[key], {
                    toValue: 0,
                    duration: 200,
                    useNativeDriver: false,
                }).start(() => {
                    const newData = [...listData];
                    const prevIndex = listData.findIndex((item) => item.key === key);
                    const removeItem = listData.filter((item) => item.key === key)[0];
                    newData.splice(prevIndex, 1);
                    setListData(newData);
                    Toast.show({
                        type: 'tomatoToast',
                        text1: removeItem.title + ' Dismissed!'
                    })
                    animationIsRunning.current = false;
                });
            }
        };

        const renderItem = (data) => (
            <View style={{ flex: 1, backgroundColor: Colors.whiteColor }}>
                <View style={styles.notificationWrapper}>
                    <View style={styles.notificationIconBox}>
                        <MaterialIcons
                            name='notifications'
                            color={Colors.primaryColor}
                            size={26}
                        />
                    </View>
                    <View style={{ flex: 1, marginLeft: Sizes.fixPadding }}>
                        <View style={{ ...CommonStyles.rowAlignCenter }}>
                            <Text numberOfLines={1} style={{ lineHeight: 20, ...Fonts.blackColor16Medium, flex: 1, }}>
                                {data.item.title}
                            </Text>
                            <Text style={{ ...Fonts.grayColor14Medium, marginLeft: Sizes.fixPadding }}>
                                {data.item.time}
                            </Text>
                        </View>
                        <Text numberOfLines={1} style={{ ...Fonts.grayColor14Medium, marginTop: Sizes.fixPadding - 8.0 }}>
                            {data.item.description}
                        </Text>
                    </View>
                </View>
            </View>
        );

        const renderHiddenItem = (data) => (
            <View style={{
                backgroundColor: Colors.primaryColor,
                flex: 1,
                marginBottom: Sizes.fixPadding * 2.5
            }} />
        );

        return (
            <SwipeListView
                data={listData}
                renderItem={renderItem}
                renderHiddenItem={renderHiddenItem}
                rightOpenValue={-screenWidth}
                leftOpenValue={screenWidth}
                onSwipeValueChange={onSwipeValueChange}
                useNativeDriver={false}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingTop: Sizes.fixPadding * 2.5 }}
            />
        );
    }
}

export default NotificationsScreen

const styles = StyleSheet.create({
    notificationIconBox: {
        backgroundColor: Colors.lightPrimaryColor,
        width: 50.0,
        height: 50.0,
        borderRadius: Sizes.fixPadding,
        ...CommonStyles.center,
    },
    notificationWrapper: {
        backgroundColor: Colors.whiteColor,
        borderRadius: Sizes.fixPadding,
        ...CommonStyles.shadow,
        padding: Sizes.fixPadding,
        marginHorizontal: Sizes.fixPadding * 2.0,
        marginBottom: Sizes.fixPadding * 2.5,
        ...CommonStyles.rowAlignCenter
    },
    noNotificationIconBox: {
        ...CommonStyles.center,
        width: 100.0,
        height: 100.0,
        borderRadius: Sizes.fixPadding,
        backgroundColor: Colors.lightPrimaryColor
    }
})