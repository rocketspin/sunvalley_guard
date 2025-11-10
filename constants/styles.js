import { Dimensions, Platform } from "react-native";

export const Colors = {
    primaryColor: '#F59715',
    blackColor: '#000000',
    whiteColor: '#FFFFFF',
    grayColor: '#9C9C9C',
    lightGraycolor: '#DCDCDC',
    redColor: '#E5574A',
    greenColor: '#27AE60',
    blueColor: '#2F80ED',
    lightWhiteColor: '#F2F2F2',
    lightPrimaryColor: 'rgba(245, 151, 21, 0.2)',
}

export const Fonts = {

    whiteColor12Medium: {
        color: Colors.whiteColor,
        fontSize: 12.0,
        fontFamily: 'Montserrat_Medium',
    },

    whiteColor14Medium: {
        color: Colors.whiteColor,
        fontSize: 14.0,
        fontFamily: 'Montserrat_Medium',
    },

    whiteColor16Medium: {
        color: Colors.whiteColor,
        fontSize: 16.0,
        fontFamily: 'Montserrat_Medium',
    },

    whiteColor14SemiBold: {
        color: Colors.whiteColor,
        fontSize: 14.0,
        fontFamily: 'Montserrat_SemiBold',
    },

    whiteColor16SemiBold: {
        color: Colors.whiteColor,
        fontSize: 16.0,
        fontFamily: 'Montserrat_SemiBold',
    },

    whiteColor20SemiBold: {
        color: Colors.whiteColor,
        fontSize: 20.0,
        fontFamily: 'Montserrat_SemiBold',
    },

    whiteColor16Bold: {
        color: Colors.whiteColor,
        fontSize: 16.0,
        fontFamily: 'Montserrat_Bold',
    },

    whiteColor18Bold: {
        color: Colors.whiteColor,
        fontSize: 18.0,
        fontFamily: 'Montserrat_Bold',
    },

    whiteColor20ExtraBold: {
        color: Colors.whiteColor,
        fontSize: 20.0,
        fontFamily: 'Montserrat_ExtraBold'
    },

    blackColor14Medium: {
        color: Colors.blackColor,
        fontSize: 14.0,
        fontFamily: 'Montserrat_Medium'
    },

    blackColor15Medium: {
        color: Colors.blackColor,
        fontSize: 15.0,
        fontFamily: 'Montserrat_Medium'
    },

    blackColor16Medium: {
        color: Colors.blackColor,
        fontSize: 16.0,
        fontFamily: 'Montserrat_Medium'
    },

    blackColor16SemiBold: {
        color: Colors.blackColor,
        fontSize: 16.0,
        fontFamily: 'Montserrat_SemiBold'
    },

    blackColor18SemiBold: {
        color: Colors.blackColor,
        fontSize: 18.0,
        fontFamily: 'Montserrat_SemiBold'
    },

    primaryColor16SemiBold: {
        color: Colors.primaryColor,
        fontSize: 16.0,
        fontFamily: 'Montserrat_SemiBold'
    },

    primaryColor18SemiBold: {
        color: Colors.primaryColor,
        fontSize: 18.0,
        fontFamily: 'Montserrat_SemiBold'
    },

    primaryColor20SemiBold: {
        color: Colors.primaryColor,
        fontSize: 20.0,
        fontFamily: 'Montserrat_SemiBold'
    },

    primaryColor16Bold: {
        color: Colors.primaryColor,
        fontSize: 16.0,
        fontFamily: 'Montserrat_Bold'
    },

    primaryColor18Bold: {
        color: Colors.primaryColor,
        fontSize: 18.0,
        fontFamily: 'Montserrat_Bold'
    },

    grayColor12Medium: {
        color: Colors.grayColor,
        fontSize: 12.0,
        fontFamily: 'Montserrat_Medium'
    },

    grayColor14Medium: {
        color: Colors.grayColor,
        fontSize: 14.0,
        fontFamily: 'Montserrat_Medium'
    },

    grayColor15Medium: {
        color: Colors.grayColor,
        fontSize: 15.0,
        fontFamily: 'Montserrat_Medium'
    },

    grayColor16Medium: {
        color: Colors.grayColor,
        fontSize: 16.0,
        fontFamily: 'Montserrat_Medium'
    },

    grayColor18Medium: {
        color: Colors.grayColor,
        fontSize: 18.0,
        fontFamily: 'Montserrat_Medium'
    },

    grayColor16SemiBold: {
        color: Colors.grayColor,
        fontSize: 16.0,
        fontFamily: 'Montserrat_SemiBold'
    },

    greenColor14Bold: {
        color: Colors.greenColor,
        fontSize: 14.0,
        fontFamily: 'Montserrat_Bold'
    }

}

export const Sizes = {
    fixPadding: 10.0
}

export const screenWidth = Dimensions.get('window').width;

export const screenHeight = Dimensions.get('window').height;

export const CommonStyles = {
    rowAlignCenter: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    shadow: {
        shadowColor: Colors.blackColor,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.15,
        elevation: 1.95,
        borderColor: Colors.lightWhiteColor,
        borderWidth: Platform.OS == 'ios' ? 0 : 0.5,
        borderTopWidth: Platform.OS == 'ios' ? 0 : 0.8,
        borderBottomWidth: 0,
    },
    buttonStyle: {
        backgroundColor: Colors.primaryColor,
        borderRadius: Sizes.fixPadding,
        padding: Sizes.fixPadding + 5.0,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: Sizes.fixPadding * 2.0
    },
    toastStyle: {
        width: screenWidth - 40.0,
        backgroundColor: '#333333',
        justifyContent: 'center',
        padding: Sizes.fixPadding + 5.0,
        alignSelf: 'center',
        borderRadius: Sizes.fixPadding - 5.0,
        bottom: -Sizes.fixPadding * 2.0
    }
}
