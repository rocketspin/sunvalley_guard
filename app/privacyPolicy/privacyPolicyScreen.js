import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors, Fonts, Sizes } from '../../constants/styles'
import MyStatusBar from '../../components/myStatusBar'
import { Header } from '../../components/header'

const privacyPolicyList = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem maecenas proin nec, turpis iaculiviver ramalesuada lacus.Lorem ipsum dolor sit amet, consectetuadipiscing elit. Sem maecenas proin nec, turpis iaculiviv erramassa malesuada lacus. Lorem ipsum dolor siamet,consectetur adipiscing elit. Sem maecenas proin turpis iaculiviverra massa malesuada lacus.nec, turpis iaculiviverramassal.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem maecenas proin nec, turpis iaculiviver ramalesuada lacus.Lorem ipsum dolor sit amet, consectetuadipiscing elit. Sem maecenas proin nec, turpis iaculiviv erramassa malesuada lacus. Lorem ipsum dolor siamet,consectetur adipiscing elit. Sem maecenas proin turpis iaculiviverra massa malesuada lacus.nec, turpis iaculiviverramassal.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem maecenas proin nec, turpis iaculiviver ramalesuada lacus.Lorem ipsum dolor sit amet, consectetuadipiscing elit. Sem maecenas proin nec, turpis iaculiviv erramassa malesuada lacus. Lorem ipsum dolor siamet,consectetur adipiscing elit. Sem maecenas proin turpis iaculiviverra massa malesuada lacus.nec, turpis iaculiviverramassal.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem maecenas proin nec, turpis iaculiviver ramalesuada lacus.Lorem ipsum dolor sit amet, consectetuadipiscing elit. Sem maecenas proin nec, turpis iaculiviv erramassa malesuada lacus. Lorem ipsum dolor siamet,consectetur adipiscing elit. Sem maecenas proin turpis iaculiviverra massa malesuada lacus.nec, turpis iaculiviverramassal.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem maecenas proin nec, turpis iaculiviver ramalesuada lacus.Lorem ipsum dolor sit amet, consectetuadipiscing elit. Sem maecenas proin nec, turpis iaculiviv erramassa malesuada lacus. Lorem ipsum dolor siamet,consectetur adipiscing elit. Sem maecenas proin turpis iaculiviverra massa malesuada lacus.nec, turpis iaculiviverramassal.',
];

const PrivacyPolicyScreen = () => {
    return (
        <View style={{ flex: 1, backgroundColor: Colors.whiteColor }}>
            <MyStatusBar />
            <View style={{ flex: 1 }}>
                <Header header={'Privacy Policy'} />
                <ScrollView showsVerticalScrollIndicator={false}>
                    {privacyPolicyInfo()}
                </ScrollView>
            </View>
        </View>
    )

    function privacyPolicyInfo() {
        return (
            <View style={{ marginTop: Sizes.fixPadding * 2.5, marginBottom: Sizes.fixPadding * 2.0 }}>
                {
                    privacyPolicyList.map((item, index) => (
                        <Text
                            key={`${index}`}
                            style={styles.policyTextStyle}
                        >
                            {item}
                        </Text>
                    ))
                }
            </View>
        )
    }
}

export default PrivacyPolicyScreen;

const styles = StyleSheet.create({
    policyTextStyle: {
        ...Fonts.grayColor14Medium,
        marginHorizontal: Sizes.fixPadding * 2.0,
        marginBottom: Sizes.fixPadding
    }
})