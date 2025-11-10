import { FlatList, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { Colors, CommonStyles, Fonts, Sizes } from '../../../constants/styles'
import { useNavigation } from 'expo-router';

const chatList = [
    {
        id: '1',
        image: require('../../../assets/images/users/user9.png'),
        name: 'Lely Piterson',
        flat: '(B-403)',
        lastMessage: 'Keep Kids away from Cars in Parking at A...',
        time: '2m ago',
    },
    {
        id: '2',
        image: require('../../../assets/images/users/user14.png'),
        name: 'Peter Johnson',
        flat: '(A-103)',
        lastMessage: 'Keep reminder to switch off water tank ...',
        time: '10m ago',
    },
    {
        id: '3',
        image: require('../../../assets/images/users/user6.png'),
        name: 'Rahul Patel',
        flat: '(C-403)',
        lastMessage: 'Keep street dog away from the mai gate.',
        time: '1h ago',
    },
    {
        id: '4',
        image: require('../../../assets/images/users/user7.png'),
        name: 'Jessia Albania',
        flat: '(A-203)',
        lastMessage: 'Keep reminder to switch off water tank ...',
        time: '2h ago',
    },
    {
        id: '5',
        image: require('../../../assets/images/users/user8.png'),
        name: 'Emili William',
        flat: '(B-103)',
        lastMessage: 'Keep Kids away from Cars in Parking at B...',
        time: '5h ago',
    },
    {
        id: '6',
        image: require('../../../assets/images/users/user5.png'),
        name: 'Albert Flores',
        flat: '(C-403)',
        lastMessage: 'Keep silent on the afternoon.',
        time: '6h ago',
    },
    {
        id: '7',
        image: require('../../../assets/images/users/user15.png'),
        name: 'Devon Lane',
        flat: '(C-203)',
        lastMessage: 'Keep Kids away from Cars in Parking at A...',
        time: '7h ago',
    },
    {
        id: '8',
        image: require('../../../assets/images/users/user4.png'),
        name: 'Esther Howard',
        flat: '(A-203)',
        lastMessage: 'Keep Kids away from Dogs in garden area.',
        time: '7h ago',
    },
    {
        id: '9',
        image: require('../../../assets/images/users/user3.png'),
        name: 'Savannah Fox',
        flat: '(D-203)',
        lastMessage: 'Keep Kids away from Cars in Parking at A...',
        time: '8h ago',
    },
];

const MessagesScreen = () => {

    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, backgroundColor: Colors.whiteColor }}>
            {header()}
            {messagesInfo()}
        </View>
    )

    function messagesInfo() {
        const renderItem = ({ item }) => (
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => { navigation.push('chat/chatScreen') }}
                style={styles.messageWrapper}
            >
                <Image
                    source={item.image}
                    style={styles.userImageStyle}
                />
                <View style={{ flex: 1, marginLeft: Sizes.fixPadding }}>
                    <View style={{ ...CommonStyles.rowAlignCenter }}>
                        <View style={{ ...CommonStyles.rowAlignCenter, flex: 1, }}>
                            <Text numberOfLines={1} style={{lineHeight:20, ...Fonts.blackColor16Medium, maxWidth: '70%' }}>
                                {item.name}
                            </Text>
                            <Text style={{ ...Fonts.grayColor14Medium }}>
                                { } {item.flat}
                            </Text>
                        </View>
                        <Text style={{ ...Fonts.grayColor14Medium }}>
                            {item.time}
                        </Text>
                    </View>
                    <Text numberOfLines={1} style={{ ...Fonts.grayColor14Medium, marginTop: Sizes.fixPadding - 5.0 }}>
                        {item.lastMessage}
                    </Text>
                </View>
            </TouchableOpacity>
        )
        return (
            <FlatList
                data={chatList}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingTop: Sizes.fixPadding * 2.5 }}
            />
        )
    }

    function header() {
        return (
            <View style={styles.headerWrapper}>
                <Text style={{ ...Fonts.whiteColor18Bold }}>
                    Messages
                </Text>
            </View>
        )
    }
}

export default MessagesScreen

const styles = StyleSheet.create({
    headerWrapper: {
        backgroundColor: Colors.primaryColor,
        borderBottomLeftRadius: Sizes.fixPadding * 2.0,
        borderBottomRightRadius: Sizes.fixPadding * 2.0,
        padding: Sizes.fixPadding * 2.0,
    },
    userImageStyle: {
        width: 50.0,
        height: 50.0,
        borderRadius: Sizes.fixPadding,
        ...CommonStyles.shadow
    },
    messageWrapper: {
        backgroundColor: Colors.whiteColor,
        ...CommonStyles.shadow,
        borderRadius: Sizes.fixPadding,
        padding: Sizes.fixPadding,
        marginHorizontal: Sizes.fixPadding * 2.0,
        marginBottom: Sizes.fixPadding * 2.5,
        ...CommonStyles.rowAlignCenter
    }
})