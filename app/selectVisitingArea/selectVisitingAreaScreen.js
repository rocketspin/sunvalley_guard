import { BackHandler, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useState } from 'react'
import { Colors, CommonStyles, Sizes, Fonts } from '../../constants/styles'
import MyStatusBar from '../../components/myStatusBar'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useLocalSearchParams, useNavigation } from 'expo-router'
import { useFocusEffect } from '@react-navigation/native';

const wingsList = [
    {
        id: '1',
        block: 'A',
        isExpanded: false,
        flats: [
            {
                id: '1',
                flat: 'A-101',
                isSelected: false,
            },
            {
                id: '2',
                flat: 'A-102',
                isSelected: false,
            },
            {
                id: '3',
                flat: 'A-103',
                isSelected: false,
            },
            {
                id: '4',
                flat: 'A-104',
                isSelected: false,
            },
            {
                id: '5',
                flat: 'A-201',
                isSelected: false,
            },
            {
                id: '6',
                flat: 'A-202',
                isSelected: false,
            },
            {
                id: '7',
                flat: 'A-203',
                isSelected: false,
            },
            {
                id: '8',
                flat: 'A-204',
                isSelected: false,
            },
        ],
    },
    {
        id: '2',
        block: 'B',
        isExpanded: false,
        flats: [
            {
                id: '1',
                flat: 'B-101',
                isSelected: false,
            },
            {
                id: '2',
                flat: 'B-102',
                isSelected: false,
            },
            {
                id: '3',
                flat: 'B-103',
                isSelected: false,
            },
            {
                id: '4',
                flat: 'B-104',
                isSelected: false,
            },
            {
                id: '5',
                flat: 'B-201',
                isSelected: false,
            },
            {
                id: '6',
                flat: 'B-202',
                isSelected: false,
            },
            {
                id: '7',
                flat: 'B-203',
                isSelected: false,
            },
            {
                id: '8',
                flat: 'B-204',
                isSelected: false,
            },
        ],
    },
    {
        id: '3',
        block: 'C',
        isExpanded: false,
        flats: [
            {
                id: '1',
                flat: 'C-101',
                isSelected: false,
            },
            {
                id: '2',
                flat: 'C-102',
                isSelected: false,
            },
            {
                id: '3',
                flat: 'C-103',
                isSelected: false,
            },
            {
                id: '4',
                flat: 'C-104',
                isSelected: false,
            },
            {
                id: '5',
                flat: 'C-201',
                isSelected: false,
            },
            {
                id: '6',
                flat: 'C-202',
                isSelected: false,
            },
            {
                id: '7',
                flat: 'C-203',
                isSelected: false,
            },
            {
                id: '8',
                flat: 'C-204',
                isSelected: false,
            },
        ],
    },
    {
        id: '4',
        block: 'D',
        isExpanded: false,
        flats: [
            {
                id: '1',
                flat: 'D-101',
                isSelected: false,
            },
            {
                id: '2',
                flat: 'D-102',
                isSelected: false,
            },
            {
                id: '3',
                flat: 'D-103',
                isSelected: false,
            },
            {
                id: '4',
                flat: 'D-104',
                isSelected: false,
            },
            {
                id: '5',
                flat: 'D-201',
                isSelected: false,
            },
            {
                id: '6',
                flat: 'D-202',
                isSelected: false,
            },
            {
                id: '7',
                flat: 'D-203',
                isSelected: false,
            },
            {
                id: '8',
                flat: 'D-204',
                isSelected: false,
            },
        ],
    },
];

const commonList = [
    {
        id: '1',
        block: 'A',
        isExpanded: false,
        areas: [
            {
                id: '1',
                area: 'Club House',
                isSelected: false,
            },
            {
                id: '2',
                area: 'Common Area',
                isSelected: false,
            },
            {
                id: '3',
                area: 'Garden',
                isSelected: false,
            },
            {
                id: '4',
                area: 'Parking',
                isSelected: false,
            },
            {
                id: '5',
                area: 'Temple',
                isSelected: false,
            }
        ]
    },
    {
        id: '2',
        block: 'B',
        isExpanded: false,
        areas: [
            {
                id: '1',
                area: 'Club House',
                isSelected: false,
            },
            {
                id: '2',
                area: 'Common Area',
                isSelected: false,
            },
            {
                id: '3',
                area: 'Garden',
                isSelected: false,
            },
            {
                id: '4',
                area: 'Parking',
                isSelected: false,
            },
            {
                id: '5',
                area: 'Temple',
                isSelected: false,
            }
        ]
    },
    {
        id: '3',
        block: 'C',
        isExpanded: false,
        areas: [
            {
                id: '1',
                area: 'Club House',
                isSelected: false,
            },
            {
                id: '2',
                area: 'Common Area',
                isSelected: false,
            },
            {
                id: '3',
                area: 'Garden',
                isSelected: false,
            },
            {
                id: '4',
                area: 'Parking',
                isSelected: false,
            },
            {
                id: '5',
                area: 'Temple',
                isSelected: false,
            }
        ]
    },
    {
        id: '4',
        block: 'D',
        isExpanded: false,
        areas: [
            {
                id: '1',
                area: 'Club House',
                isSelected: false,
            },
            {
                id: '2',
                area: 'Common Area',
                isSelected: false,
            },
            {
                id: '3',
                area: 'Garden',
                isSelected: false,
            },
            {
                id: '4',
                area: 'Parking',
                isSelected: false,
            },
            {
                id: '5',
                area: 'Temple',
                isSelected: false,
            }
        ]
    },
];

const SelectVisitingAreaScreen = () => {

    const backAction = () => {
        backPress();
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

    const navigation = useNavigation();

    const { from } = useLocalSearchParams();

    const tab = ['Wing', 'Common'];

    const [index, setIndex] = useState(0);
    const [wings, setWings] = useState(wingsList);
    const [commnArea, setCommnArea] = useState(commonList);

    return (
        <View style={{ flex: 1, backgroundColor: Colors.whiteColor }}>
            <MyStatusBar />
            <View style={{ flex: 1 }}>
                {header()}
                {tabView()}
                {
                    index == 0
                        ?
                        <Wing data={wings} setData={setWings} />
                        :
                        <CommonArea data={commnArea} setData={setCommnArea} />
                }
            </View>
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

    function backPress() {
        const selectedAreas = [];
        wings.map((item) => {
            item.flats.map((flat) => {
                if (flat.isSelected) {
                    selectedAreas.push(flat.flat);
                }
            })
        })
        commnArea.map((item) => {
            item.areas.map((area) => {
                if (area.isSelected) {
                    return selectedAreas.push(item.block + "-" + area.area)
                }
            })
        })
        navigation.goBack();
        from == 'guest'
            ?
            navigation.navigate('addGuest/addGuestScreen', selectedAreas.length !== 0 ? { selectedAreas: JSON.stringify(selectedAreas) } : null)
            :
            from == 'cab'
                ?
                navigation.navigate('addCab/addCabScreen', selectedAreas.length !== 0 ? { selectedAreas: JSON.stringify(selectedAreas) } : null)
                :
                from == 'delivery'
                    ?
                    navigation.navigate('addDelivery/addDeliveryScreen', selectedAreas.length !== 0 ? { selectedAreas: JSON.stringify(selectedAreas) } : null)
                    :
                    from == 'service'
                        ?
                        navigation.navigate('addService/addServiceScreen', selectedAreas.length !== 0 ? { selectedAreas: JSON.stringify(selectedAreas) } : null)
                        :
                        null
    }

    function header() {
        return (
            <View style={styles.headerWrapper}>
                <MaterialIcons
                    name='close'
                    color={Colors.whiteColor}
                    size={26}
                    onPress={() => backPress()}
                />
                <Text numberOfLines={1} style={{ ...Fonts.whiteColor18Bold, flex: 1, marginLeft: Sizes.fixPadding + 5.0 }}>
                    Select Visiting Area
                </Text>
            </View>
        )
    }
}

export default SelectVisitingAreaScreen;

const CommonArea = ({ data, setData }) => {
    function changeExpand({ id }) {
        const newList = data.map((item) => {
            if (item.id == id) {
                return { ...item, isExpanded: !item.isExpanded }
            }
            else {
                return item
            }
        })
        setData(newList);
    }

    function changeSelection({ topId, id }) {
        const newList = data.map((item) => {
            if (item.id == topId) {
                const newItem = item.areas.map((flat) => {
                    if (flat.id == id) {
                        return { ...flat, isSelected: !flat.isSelected }
                    }
                    else {
                        return flat;
                    }
                })
                return { ...item, areas: newItem };
            }
            else {
                return item;
            }
        })
        setData(newList);
    }

    const renderItem = ({ item }) => (
        <View>
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => { changeExpand({ id: item.id }) }}
                style={styles.expandableHeaderStyle}
            >
                <Text numberOfLines={1} style={{ ...Fonts.primaryColor16Bold, flex: 1, marginRight: Sizes.fixPadding }}>
                    Block - {item.block}
                </Text>
                <Ionicons
                    name={item.isExpanded ? 'caret-up' : 'caret-down'}
                    color={Colors.primaryColor}
                    size={20}
                />
            </TouchableOpacity>
            {
                item.isExpanded && item.areas.map((i, index) => {
                    return (
                        <TouchableOpacity
                            key={`${index}`}
                            activeOpacity={0.9}
                            onPress={() => { changeSelection({ topId: item.id, id: i.id }) }}
                            style={{
                                backgroundColor: i.isSelected ? 'rgba(245, 151, 21, 0.2)' : Colors.whiteColor,
                                ...!i.isSelected && { ...CommonStyles.shadow },
                                ...styles.selectionTypeWrapper,
                            }}
                        >
                            <Text style={i.isSelected ? { ...Fonts.primaryColor16Bold } : { ...Fonts.blackColor16Medium }}>
                                {i.area}
                            </Text>
                        </TouchableOpacity>
                    )
                })
            }
        </View>
    )

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={data}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingTop: Sizes.fixPadding * 2.5 }}
            />
        </View>
    )
}

const Wing = ({ data, setData }) => {

    function changeExpand({ id }) {
        const newList = data.map((item) => {
            if (item.id == id) {
                return { ...item, isExpanded: !item.isExpanded }
            }
            else {
                return item
            }
        })
        setData(newList);
    }

    function changeSelection({ topId, id }) {
        const newList = data.map((item) => {
            if (item.id == topId) {
                const newItem = item.flats.map((flat) => {
                    if (flat.id == id) {
                        return { ...flat, isSelected: !flat.isSelected }
                    }
                    else {
                        return flat;
                    }
                })
                return { ...item, flats: newItem };
            }
            else {
                return item;
            }
        })
        setData(newList);
    }

    const renderItem = ({ item }) => (
        <View>
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => { changeExpand({ id: item.id }) }}
                style={styles.expandableHeaderStyle}
            >
                <Text numberOfLines={1} style={{ ...Fonts.primaryColor16Bold, flex: 1, marginRight: Sizes.fixPadding }}>
                    Block - {item.block}
                </Text>
                <Ionicons
                    name={item.isExpanded ? 'caret-up' : 'caret-down'}
                    color={Colors.primaryColor}
                    size={20}
                />
            </TouchableOpacity>
            {
                item.isExpanded && item.flats.map((i, index) => {
                    return (
                        <TouchableOpacity
                            key={`${index}`}
                            activeOpacity={0.9}
                            onPress={() => { changeSelection({ topId: item.id, id: i.id }) }}
                            style={{
                                backgroundColor: i.isSelected ? 'rgba(245, 151, 21, 0.2)' : Colors.whiteColor,
                                ...!i.isSelected && { ...CommonStyles.shadow },
                                ...styles.selectionTypeWrapper,
                            }}
                        >
                            <Text style={i.isSelected ? { ...Fonts.primaryColor16Bold } : { ...Fonts.blackColor16Medium }}>
                                {i.flat}
                            </Text>
                        </TouchableOpacity>
                    )
                })
            }
        </View>
    )

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={data}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingTop: Sizes.fixPadding * 2.5 }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    headerWrapper: {
        backgroundColor: Colors.primaryColor,
        borderBottomLeftRadius: Sizes.fixPadding * 2.0,
        borderBottomRightRadius: Sizes.fixPadding * 2.0,
        padding: Sizes.fixPadding * 2.0,
        ...CommonStyles.rowAlignCenter
    },
    tabWrapper: {
        backgroundColor: Colors.lightPrimaryColor,
        ...CommonStyles.rowAlignCenter,
        marginTop: Sizes.fixPadding * 2.5
    },
    selectionTypeWrapper: {
        ...CommonStyles.center,
        borderRadius: Sizes.fixPadding,
        marginHorizontal: Sizes.fixPadding * 2.0,
        padding: Sizes.fixPadding + 5.0,
        marginBottom: Sizes.fixPadding * 2.5
    },
    expandableHeaderStyle: {
        ...CommonStyles.rowAlignCenter,
        backgroundColor: 'rgba(245, 151, 21, 0.1)',
        marginBottom: Sizes.fixPadding * 2.5,
        padding: Sizes.fixPadding + 5.0
    }
})