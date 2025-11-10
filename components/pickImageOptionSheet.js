import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Colors, CommonStyles, Fonts, Sizes } from "../constants/styles"
import { StyleSheet, Modal, TouchableOpacity, View, Text } from 'react-native'

export const PickImageOptionSheet = (props) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={props.show}
            onRequestClose={() => { props.setShow(false) }}
        >
            <TouchableOpacity
                activeOpacity={1}
                onPress={() => { props.setShow(false) }}
                style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.5)" }}
            >
                <View style={{ justifyContent: "flex-end", flex: 1 }}>
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={() => { }}
                        style={styles.optionSheetStyle}
                    >
                        <Text style={{ textAlign: 'center', ...Fonts.blackColor16SemiBold, margin: Sizes.fixPadding * 2.5 }}>
                            {props.title}
                        </Text>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => { props.setShow(false) }}
                            style={{ ...CommonStyles.rowAlignCenter, alignSelf: 'flex-start', marginHorizontal: Sizes.fixPadding * 2.0 }}
                        >
                            <View style={styles.photoOptionIconWrapper}>
                                <MaterialIcons
                                    name='camera-alt'
                                    color={Colors.primaryColor}
                                    size={24}
                                />
                            </View>
                            <Text style={{ ...Fonts.blackColor16Medium, marginLeft: Sizes.fixPadding }}>
                                Camera
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => { props.setShow(false) }}
                            style={{ ...CommonStyles.rowAlignCenter, alignSelf: 'flex-start', margin: Sizes.fixPadding * 2.0 }}
                        >
                            <View style={styles.photoOptionIconWrapper}>
                                <MaterialIcons
                                    name='insert-photo'
                                    color={Colors.primaryColor}
                                    size={24}
                                />
                            </View>
                            <Text style={{ ...Fonts.blackColor16Medium, marginLeft: Sizes.fixPadding }}>
                                Gallery
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => { props.setShow(false) }}
                            style={{ ...CommonStyles.rowAlignCenter, alignSelf: 'flex-start', marginHorizontal: Sizes.fixPadding * 2.0 }}
                        >
                            <View style={styles.photoOptionIconWrapper}>
                                <MaterialCommunityIcons
                                    name='trash-can'
                                    color={Colors.primaryColor}
                                    size={24}
                                />
                            </View>
                            <Text style={{ ...Fonts.blackColor16Medium, marginLeft: Sizes.fixPadding }}>
                                Remove Image
                            </Text>
                        </TouchableOpacity>
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        </Modal>
    )
}

const styles = StyleSheet.create({
    photoOptionIconWrapper: {
        width: 50.0,
        height: 50.0,
        borderRadius: 25.0,
        backgroundColor: Colors.whiteColor,
        ...CommonStyles.shadow,
        ...CommonStyles.center
    },
    optionSheetStyle: {
        backgroundColor: Colors.whiteColor,
        borderTopLeftRadius: Sizes.fixPadding * 2.0,
        borderTopRightRadius: Sizes.fixPadding * 2.0,
        paddingBottom: Sizes.fixPadding * 2.5
    },
});