import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { Colors, Fonts, Sizes } from '../../constants/styles'
import MyStatusBar from '../../components/myStatusBar'
import { Header } from '../../components/header'

const termsAndConditionsList = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem maecenas proin nec, turpis iaculiviver ramalesuada lacus.Lorem ipsum dolor sit amet, consectetuadipiscing elit. Sem maecenas proin nec, turpis iaculiviv erramassa malesuada lacus. Lorem ipsum dolor siamet,consectetur adipiscing elit. Sem maecenas proin turpis iaculiviverra massa malesuada lacus.nec, turpis iaculiviverramassal.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem maecenas proin nec, turpis iaculiviver ramalesuada lacus.Lorem ipsum dolor sit amet, consectetuadipiscing elit. Sem maecenas proin nec, turpis iaculiviv erramassa malesuada lacus. Lorem ipsum dolor siamet,consectetur adipiscing elit. Sem maecenas proin turpis iaculiviverra massa malesuada lacus.nec, turpis iaculiviverramassal.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem maecenas proin nec, turpis iaculiviver ramalesuada lacus.Lorem ipsum dolor sit amet, consectetuadipiscing elit. Sem maecenas proin nec, turpis iaculiviv erramassa malesuada lacus. Lorem ipsum dolor siamet,consectetur adipiscing elit. Sem maecenas proin turpis iaculiviverra massa malesuada lacus.nec, turpis iaculiviverramassal.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem maecenas proin nec, turpis iaculiviver ramalesuada lacus.Lorem ipsum dolor sit amet, consectetuadipiscing elit. Sem maecenas proin nec, turpis iaculiviv erramassa malesuada lacus. Lorem ipsum dolor siamet,consectetur adipiscing elit. Sem maecenas proin turpis iaculiviverra massa malesuada lacus.nec, turpis iaculiviverramassal.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem maecenas proin nec, turpis iaculiviver ramalesuada lacus.Lorem ipsum dolor sit amet, consectetuadipiscing elit. Sem maecenas proin nec, turpis iaculiviv erramassa malesuada lacus. Lorem ipsum dolor siamet,consectetur adipiscing elit. Sem maecenas proin turpis iaculiviverra massa malesuada lacus.nec, turpis iaculiviverramassal.',
];

const TermsAndConditionScreen = () => {
    return (
        <View style={{ flex: 1, backgroundColor: Colors.whiteColor }}>
            <MyStatusBar />
            <View style={{ flex: 1 }}>
                <Header header={'Terms And Conditions'} />
                <ScrollView showsVerticalScrollIndicator={false}>
                    {termsAndConditionsInfo()}
                </ScrollView>
            </View>
        </View>
    )

    function termsAndConditionsInfo() {
        return (
            <View style={{ marginTop: Sizes.fixPadding * 2.5, marginBottom: Sizes.fixPadding * 2.0 }}>
                {
                    termsAndConditionsList.map((item, index) => (
                        <Text
                            key={`${index}`}
                            style={styles.conditionTextStyle}
                        >
                            {item}
                        </Text>
                    ))
                }
            </View>
        )
    }
}

export default TermsAndConditionScreen;

const styles = StyleSheet.create({
    conditionTextStyle: {
        ...Fonts.grayColor14Medium,
        marginHorizontal: Sizes.fixPadding * 2.0,
        marginBottom: Sizes.fixPadding
    }
})