import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { Colors, CommonStyles, Fonts, screenWidth, Sizes } from '../../constants/styles'
import MyStatusBar from '../../components/myStatusBar'
import { Header } from '../../components/header'
import { useNavigation } from 'expo-router'

const visitorsList = [
    {
        option: 'Add Guest',
        image: require('../../assets/images/options/addGuest.png'),
        navigateTo: 'addGuest/addGuestScreen',
    },
    {
        option: 'Add Cab',
        image: require('../../assets/images/options/addCab.png'),
        navigateTo: 'addCab/addCabScreen',
    },
    {
        option: 'Add Delivery',
        image: require('../../assets/images/options/addDelivery.png'),
        navigateTo: 'addDelivery/addDeliveryScreen',
    },
    {
        option: 'Add Service',
        image: require('../../assets/images/options/addService.png'),
        navigateTo: 'addService/addServiceScreen',
    },
];

const AddNewVisitorScreen = () => {

    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, backgroundColor: Colors.whiteColor }}>
            <MyStatusBar />
            <View style={{ flex: 1 }}>
                <Header header='Add New Visitor' />
                {optionsInfo()}
            </View>
        </View>
    )

    function optionsInfo() {
        const renderItem = ({ item }) => (
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => { item.navigateTo && navigation.push(item.navigateTo) }}
                style={styles.optionBox}
            >
                <Image
                    source={require('../../assets/images/authBg.png')}
                    style={styles.optionBgImage}
                />
                <View style={styles.optionBoxOverlay}>
                    <Text numberOfLines={1} style={{ ...Fonts.primaryColor16SemiBold, margin: Sizes.fixPadding + 5.0 }}>
                        {item.option}
                    </Text>
                    <Image
                        source={item.image}
                        style={{ width: screenWidth / 5.0, height: screenWidth / 5.0, }}
                    />
                </View>
            </TouchableOpacity>
        )
        return (
            <FlatList
                data={visitorsList}
                numColumns={2}
                renderItem={renderItem}
                contentContainerStyle={{ paddingHorizontal: Sizes.fixPadding }}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={() => addVisitorText()}
            />
        )
    }

    function addVisitorText() {
        return (
            <View style={{ marginHorizontal: Sizes.fixPadding * 2.0, marginVertical: Sizes.fixPadding * 2.5 }}>
                <Text style={{ ...Fonts.blackColor16Medium }}>
                    Add new visitors
                </Text>
                <Text style={{ ...Fonts.grayColor14Medium, marginTop: Sizes.fixPadding }}>
                    Add visitor for quick action or entries
                </Text>
            </View>
        )
    }
}

export default AddNewVisitorScreen

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
        justifyContent: 'space-between'
    },
    optionBgImage: {
        width: '100%',
        height: 140.0,
        opacity: 0.1,
        borderRadius: Sizes.fixPadding
    },
    optionBox: {
        flex: 1,
        backgroundColor: Colors.whiteColor,
        marginHorizontal: Sizes.fixPadding,
        ...CommonStyles.shadow,
        borderRadius: Sizes.fixPadding,
        marginBottom: Sizes.fixPadding * 2.5,
        maxWidth: screenWidth / 2.34
    }
})