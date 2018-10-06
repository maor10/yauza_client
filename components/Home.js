import React from 'react';
import {Image, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import {
    Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text,
    View
} from 'native-base';
import LatoText from "./general/LatoText";


export default class Home extends React.Component {


    render() {
        return (
            <Container style={styles.container}>
                <Text type="light" style={{ fontSize: 90, textAlign: 'center' }}>?</Text>
                <View style={styles.optionsContainer}>
                    <View style={ styles.bodySection }>
                        <Image
                            style={styles.optionImage}
                            source={require('../assets/splash_option.png')}/>
                        <Text style={styles.sectionText}>Do it for the lolz</Text>
                    </View>
                    <View style={styles.lineWrapper}>
                        <View style={styles.line}/>
                    </View>
                    <TouchableWithoutFeedback>
                        <View style={ styles.bodySection }>
                            <Image
                                style={styles.optionImage}
                                source={require('../assets/money-bag.png')}/>
                            <Text
                                style={styles.sectionText}>Do it for the moneyz</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#b3faff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        fontFamily: 'Lato-Light'
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
        fontFamily: 'Roboto'
    }
});
