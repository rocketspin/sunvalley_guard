import { FlatList, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { Colors, CommonStyles, Fonts, Sizes } from '../../../constants/styles';
import { SceneMap, TabView } from 'react-native-tab-view';

const waitingUsers = [
    {
        id: '1',
        image: require('../../../assets/images/users/user3.png'),
        name: 'Guy Hawkins',
        typeWithVisitArea: 'Guest (B-403)',
        mobileNumber: '+91 4857965854'
    },
    {
        id: '2',
        name: 'Esther Howard',
        image: require('../../../assets/images/users/user4.png'),
        typeWithVisitArea: 'Guest (A-403)',
        mobileNumber: '+91 7854965821'
    },
    {
        id: '3',
        name: 'Robert Fox',
        image: require('../../../assets/images/users/user5.png'),
        typeWithVisitArea: 'Service (C-403)',
        mobileNumber: '+91 6965874562'
    },
    {
        id: '4',
        name: 'Jacob Jones',
        image: require('../../../assets/images/users/user6.png'),
        typeWithVisitArea: 'Cab (B-403)',
        mobileNumber: '+91 4521875962'
    },
    {
        id: '5',
        name: 'Cody Fisher',
        image: require('../../../assets/images/users/user7.png'),
        typeWithVisitArea: 'Delivery (D-203)',
        mobileNumber: '+91 6528749652'
    },
    {
        id: '6',
        name: 'Jenny Wailsome',
        image: require('../../../assets/images/users/user8.png'),
        typeWithVisitArea: 'Guest (B-203)',
        mobileNumber: '+91 8547965824'
    }
];

const insideUsers = [
    {
        id: '1',
        image: require('../../../assets/images/users/user9.png'),
        name: 'Perry Piterson',
        typeWithVisitArea: 'Guest (B-403)',
        mobileNumber: '+91 4857965854'
    },
    {
        id: '2',
        image: require('../../../assets/images/users/user10.png'),
        name: 'Lellie Alexendar',
        typeWithVisitArea: 'Guest (A-403)',
        mobileNumber: '+91 7854965821'
    },
    {
        id: '3',
        image: require('../../../assets/images/users/user11.png'),
        name: 'Joshep Maken',
        typeWithVisitArea: 'Service (C-403)',
        mobileNumber: '+91 6965874562'
    },
    {
        id: '4',
        image: require('../../../assets/images/users/user12.png'),
        name: 'Perry Piterson',
        typeWithVisitArea: 'Cab (B-403)',
        mobileNumber: '+91 4521875962'
    },
    {
        id: '5',
        image: require('../../../assets/images/users/user13.png'),
        name: 'Perry Piterson',
        typeWithVisitArea: 'Delivery (D-203)',
        mobileNumber: '+91 6528749652'
    }
];

const InoutScreen = () => {

    const tab = ['Waiting', 'Inside'];

    const [index, setIndex] = useState(0);

    return (
        <View style={{ flex: 1, backgroundColor: Colors.whiteColor }}>
            {header()}
            {tabViewInfo()}
        </View>
    )

    function tabView(props) {
        return (
            <View style={styles.tabWrapper}>
                {
                    tab.map((item, innerIndex) => (
                        <TouchableOpacity
                            key={`${innerIndex}`}
                            activeOpacity={0.8}
                            onPress={() => { setIndex(innerIndex) }}
                            style={{ flex: 1, ...CommonStyles.center, padding: Sizes.fixPadding + 5.0 }}
                        >
                            <Text style={{ ...Fonts.primaryColor16Bold, opacity: index == innerIndex ? 1 : 0.5 }}>
                                {item}
                            </Text>
                        </TouchableOpacity>
                    ))
                }
            </View>
        )
    }

    function tabViewInfo() {

        const renderScene = SceneMap({
            first: () => <Users data={waitingUsers} type='waiting' />,
            second: () => <Users data={insideUsers} type='inside' />,
        });

        const routes = [
            { key: 'first', title: 'Waiting' },
            { key: 'second', title: 'Inside' },
        ];

        return (
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                renderTabBar={(props) => tabView(props)}
            />
        )
    }

    function header() {
        return (
            <View style={styles.headerWrapper}>
                <Text style={{ ...Fonts.whiteColor18Bold }}>
                    In Out
                </Text>
            </View>
        )
    }
}

export default InoutScreen;

const Users = ({ data, type }) => {
    const renderItem = ({ item }) => (
        <View style={styles.userWrapper}>
            <Image
                source={item.image}
                style={{ width: 64.0, height: 64.0, borderRadius: Sizes.fixPadding }}
            />
            <View style={{ flex: 1, marginHorizontal: Sizes.fixPadding }}>
                <Text numberOfLines={1} style={{ ...Fonts.blackColor16Medium,lineHeight:18 }}>
                    {item.name}
                </Text>
                <Text numberOfLines={1} style={{ ...Fonts.grayColor14Medium,lineHeight:17, marginVertical: Sizes.fixPadding - 5.0, }}>
                    {item.typeWithVisitArea}
                </Text>
                <Text numberOfLines={1} style={{ ...Fonts.grayColor14Medium,lineHeight:17, }}>
                    {item.mobileNumber}
                </Text>
            </View>
            <View
                style={{
                    backgroundColor: type == 'inside' ? Colors.redColor : Colors.greenColor,
                    ...styles.inOutButtonStyle,
                }}
            >
                <Text numberOfLines={1} style={{ ...Fonts.whiteColor16Bold }}>
                    {type == 'inside' ? 'Out' : 'In'}
                </Text>
            </View>
        </View>
    )
    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingTop: Sizes.fixPadding * 2.5 }}
        />
    )
}

const styles = StyleSheet.create({
    headerWrapper: {
        backgroundColor: Colors.primaryColor,
        borderBottomLeftRadius: Sizes.fixPadding * 2.0,
        borderBottomRightRadius: Sizes.fixPadding * 2.0,
        padding: Sizes.fixPadding * 2.0
    },
    tabWrapper: {
        backgroundColor: Colors.lightPrimaryColor,
        ...CommonStyles.rowAlignCenter,
        marginTop: Sizes.fixPadding * 2.5
    },
    inOutButtonStyle: {
        width: 80.0,
        borderRadius: Sizes.fixPadding,
        padding: Sizes.fixPadding,
        ...CommonStyles.center,
    },
    userWrapper: {
        backgroundColor: Colors.whiteColor,
        ...CommonStyles.shadow,
        borderRadius: Sizes.fixPadding,
        padding: Sizes.fixPadding + 5.0,
        marginHorizontal: Sizes.fixPadding * 2.0,
        marginBottom: Sizes.fixPadding * 2.5,
        ...CommonStyles.rowAlignCenter
    }
})