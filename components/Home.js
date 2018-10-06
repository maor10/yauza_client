import React from 'react';
import {Image, StyleSheet, TouchableWithoutFeedback, TouchableOpacity} from 'react-native';
import {
    Button,
    Container, View
} from 'native-base';
import LatoText from "./general/LatoText";


export default class Home extends React.Component {


    render() {
        const {navigate} = this.props.navigation;
        return (
            <Container style={styles.container}>
                <LatoText type="Italic" color='white' size={120} style={{textAlign: 'center', marginBottom: 40}}>Yauza!</LatoText>
                <View style={styles.optionsContainer}>
                    <View style={ styles.bodySection }>
                        <TouchableOpacity onPress={() => navigate('BuyThrow')}>
                            <Image
                                style={styles.optionImage}
                                source={require('../assets/splash_option.png')}/>
                            <LatoText
                                style={styles.sectionText} size={15} type="Black">Do it for the lolz</LatoText>
                        </TouchableOpacity>
                    </View>

                    <View style={ styles.bodySection }>
                        <TouchableOpacity onPress={() => navigate('SellSelf')}>
                            <Image
                                style={styles.optionImage}
                                source={require('../assets/money-bag.png')}/>
                            <LatoText
                                style={styles.sectionText} size={15} type="Black">Do it for the moneyz</LatoText>
                        </TouchableOpacity>
                    </View>

                </View>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1
    },

    container: {
        flex: 1,
        backgroundColor: 'transparent',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },

    optionsContainer: {
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',

        display: 'flex',
        flexDirection: 'row'
    },

    lineWrapper: {
        display: 'flex',
        justifyContent: 'center'
    },

    line: {
        borderRightWidth: StyleSheet.hairlineWidth,
        height: 90,
        borderRightColor: 'gray'
    },

    optionImage: {
        width: 140,
        height: 140,
        marginBottom: 20
    },

    bodySection: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',

        width: '50%'
    },

    sectionText: {
        textAlign: 'center',
        color: 'white'
    }
});
