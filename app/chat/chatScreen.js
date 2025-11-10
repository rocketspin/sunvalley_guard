import { StyleSheet, Text, View, Image, FlatList, Platform, KeyboardAvoidingView, TextInput } from 'react-native'
import React, { useState, useRef } from 'react'
import { Colors, CommonStyles, Sizes, Fonts, screenWidth } from '../../constants/styles'
import MyStatusBar from '../../components/myStatusBar'
import { useNavigation } from 'expo-router'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const ChatScreen = () => {

    const navigation = useNavigation();

    const userMessages = [
        {
            id: "1",
            message: "Hello, Good morning",
            isSender: false,
            time: "10:04 AM",
        },
        {
            id: "2",
            message: "Hello, Good morning",
            isSender: true,
            time: "10:04 AM",
        },
    ];

    const [messagesList, setMessagesList] = useState(userMessages);
    const [message, setMessage] = useState("");
    const fieldRef = useRef();

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS == 'ios' ? 'height' : null}
            style={{ flex: 1, backgroundColor: Colors.whiteColor }}
        >
            <MyStatusBar />
            <View style={{ flex: 1 }}>
                {header()}
                {messages()}
                {typeMessage()}
            </View>
        </KeyboardAvoidingView>
    )

    function typeMessage() {
        return (
            <View style={styles.messageFieldBox}>
                <MaterialIcons
                    name='camera-alt'
                    color={Colors.primaryColor}
                    size={24}
                />
                <TextInput
                    ref={fieldRef}
                    placeholder='Write your message here...'
                    style={styles.messageField}
                    placeholderTextColor={Colors.grayColor}
                    cursorColor={Colors.primaryColor}
                    selectionColor={Colors.primaryColor}
                    value={message}
                    onChangeText={setMessage}
                    numberOfLines={1}
                />
                <MaterialIcons
                    name="send"
                    size={24}
                    color={Colors.primaryColor}
                    onPress={() => {
                        if (message != "") {
                            addMessage({ message: message });
                            setMessage("");
                        }
                    }}
                />
            </View>
        )
    }

    function addMessage({ message }) {
        const oldMessages = messagesList;

        let date = Date();
        let hour = new Date(date).getHours();
        let minute = new Date(date).getMinutes();
        let AmPm = hour >= 12 ? "PM" : "AM";
        let finalhour = hour > 12 ? hour - 12 : hour;
        let displayHour =
            finalhour.toString().length == 1 ? `0${finalhour}` : finalhour;
        let displayMinute = minute.toString().length == 1 ? `0${minute}` : minute;

        const newMessage = {
            id: messagesList.length + 1,
            message: message,
            time: `${displayHour}:${displayMinute} ${AmPm}`,
            isSender: true,
        };

        oldMessages.push(newMessage);
        setMessagesList(oldMessages);
    }

    function messages() {
        const renderItem = ({ item }) => {
            return (
                <View
                    style={{
                        marginHorizontal: Sizes.fixPadding * 2.0,
                        marginVertical: Sizes.fixPadding + 5.0,
                        alignItems: item.isSender == true ? "flex-end" : "flex-start",
                    }}
                >
                    <View
                        style={{
                            ...styles.messageWrapStyle,
                            borderBottomRightRadius: item.isSender ? 0 : Sizes.fixPadding,
                            borderBottomLeftRadius: item.isSender ? Sizes.fixPadding : 0,
                            backgroundColor: item.isSender ? Colors.primaryColor : Colors.lightWhiteColor,
                        }}
                    >
                        <Text style={!item.isSender ? { ...Fonts.blackColor14Medium } : { ...Fonts.whiteColor14Medium }}>{item.message}</Text>
                    </View>
                    <Text style={{ ...Fonts.grayColor12Medium, marginTop: Sizes.fixPadding - 5.0 }}>
                        {item.time}
                    </Text>
                </View>
            );
        };
        return (
            <View style={{ flex: 1 }}>
                <FlatList
                    inverted
                    data={messagesList}
                    keyExtractor={(item) => `${item.id}`}
                    renderItem={renderItem}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ flexDirection: "column-reverse", paddingVertical: Sizes.fixPadding * 2.0, }}
                />
            </View>
        );
    }

    function header() {
        return (
            <View style={styles.headerWrapper}>
                <MaterialIcons
                    name='keyboard-backspace'
                    color={Colors.whiteColor}
                    size={26}
                    onPress={() => { navigation.pop() }}
                />
                <View style={{ ...CommonStyles.rowAlignCenter, flex: 1, marginLeft: Sizes.fixPadding }}>
                    <Image
                        source={require('../../assets/images/users/user9.png')}
                        style={{ width: 40.0, height: 40.0, borderRadius: 20.0 }}
                    />
                    <View style={{ flex: 1, marginHorizontal: Sizes.fixPadding }}>
                        <Text numberOfLines={1} style={{ ...Fonts.whiteColor16SemiBold, }}>
                            Leslie Alexander
                        </Text>
                        <Text numberOfLines={1} style={{ ...Fonts.whiteColor12Medium, marginTop: Sizes.fixPadding - 5.0, opacity: 0.6 }}>
                            B-403
                        </Text>
                    </View>
                </View>
                <MaterialIcons name="more-vert" size={24} color={Colors.whiteColor} />
            </View>
        )
    }
}

export default ChatScreen;

const styles = StyleSheet.create({
    headerWrapper: {
        ...CommonStyles.rowAlignCenter,
        backgroundColor: Colors.primaryColor,
        borderBottomLeftRadius: Sizes.fixPadding * 2.0,
        borderBottomRightRadius: Sizes.fixPadding * 2.0,
        padding: Sizes.fixPadding * 2.0
    },
    messageWrapStyle: {
        padding: Sizes.fixPadding,
        borderRadius: Sizes.fixPadding,
        maxWidth: screenWidth - 150.0,
    },
    messageFieldBox: {
        backgroundColor: Colors.whiteColor,
        borderRadius: Sizes.fixPadding,
        ...CommonStyles.shadow,
        ...CommonStyles.rowAlignCenter,
        margin: Sizes.fixPadding * 2.0,
        padding: Sizes.fixPadding + 5.0,
    },
    messageField: {
        ...Fonts.blackColor14Medium,
        flex: 1,
        marginHorizontal: Sizes.fixPadding,
        paddingTop: 0,
        paddingBottom: 0,
    }
})