import { StyleSheet, Text, View, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Colors, CommonStyles, Fonts, screenWidth, Sizes } from '../../constants/styles'
import MyStatusBar from '../../components/myStatusBar'
import { Header } from '../../components/header'
import { useNavigation } from 'expo-router'

const SupportScreen = () => {

    const navigation = useNavigation();

    const [topic, setTopic] = useState('');
    const [message, setMessage] = useState('');

    return (
        <View style={{ flex: 1, backgroundColor: Colors.whiteColor }}>
            <MyStatusBar />
            <View style={{ flex: 1 }}>
                <Header header={'Support'} />
                <ScrollView automaticallyAdjustKeyboardInsets={true} showsVerticalScrollIndicator={false}>
                    {supportView()}
                    {topicInfo()}
                    {messageInfo()}
                </ScrollView>
            </View>
            {submitButton()}
        </View>
    )

    function submitButton() {
        return (
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => { navigation.pop() }}
                style={{ ...CommonStyles.buttonStyle, marginVertical: Sizes.fixPadding * 2.0 }}
            >
                <Text style={{ ...Fonts.whiteColor18Bold }}>
                    Submit
                </Text>
            </TouchableOpacity>
        )
    }

    function messageInfo() {
        return (
            <View style={{ marginHorizontal: Sizes.fixPadding * 2.0, marginVertical: Sizes.fixPadding * 2.5 }}>
                <Text style={{ ...Fonts.blackColor16Medium }}>
                    Enter Message
                </Text>
                <View style={styles.textFieldWrapper}>
                    <TextInput
                        placeholder='Enter Your Message'
                        placeholderTextColor={Colors.grayColor}
                        selectionColor={Colors.primaryColor}
                        cursorColor={Colors.primaryColor}
                        numberOfLines={4}
                        multiline
                        style={{ ...Fonts.blackColor15Medium, paddingTop: 0, paddingBottom: 0, height: 100 }}
                        value={message}
                        onChangeText={(text) => { setMessage(text) }}
                        textAlignVertical='top'
                    />
                </View>
            </View>
        )
    }

    function topicInfo() {
        return (
            <View style={{ marginHorizontal: Sizes.fixPadding * 2.0, }}>
                <Text style={{ ...Fonts.blackColor16Medium }}>
                    Enter Topic
                </Text>
                <View style={styles.textFieldWrapper}>
                    <TextInput
                        placeholder='Enter Topic'
                        placeholderTextColor={Colors.grayColor}
                        selectionColor={Colors.primaryColor}
                        cursorColor={Colors.primaryColor}
                        numberOfLines={1}
                        style={{ ...Fonts.blackColor15Medium, paddingTop: 0, paddingBottom: 0 }}
                        value={topic}
                        onChangeText={(text) => { setTopic(text) }}
                    />
                </View>
            </View>
        )
    }

    function supportView() {
        return (
            <View style={{ marginVertical: Sizes.fixPadding * 4.0, marginHorizontal: Sizes.fixPadding * 2.0 }}>
                <View style={styles.optionBox}>
                    <Image
                        source={require('../../assets/images/authBg.png')}
                        style={styles.optionBgImage}
                    />
                    <View style={styles.optionBoxOverlay}>
                        <Image
                            source={require('../../assets/images/supportGirl.png')}
                            style={{ width: screenWidth / 4.0, height: screenWidth / 4.0, }}
                        />
                    </View>
                </View>
                <View style={{ marginTop: Sizes.fixPadding + 5.0 }}>
                    <Text style={{ textAlign: 'center', ...Fonts.blackColor16Medium }}>
                        Get Support
                    </Text>
                    <Text style={{ textAlign: 'center', ...Fonts.grayColor14Medium, marginTop: Sizes.fixPadding - 5.0 }}>
                        Suggest or ask anything we can improve
                    </Text>
                </View>
            </View>
        )
    }
}

export default SupportScreen

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
        justifyContent: 'flex-end'
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
})