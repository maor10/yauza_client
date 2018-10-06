import React from 'react';
import {Image, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import {
    Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text,
    View
} from 'native-base';
import LatoText from "./general/LatoText";
import {LinearGradient, MapView} from "expo";


export default class FindPerson extends React.Component {


    render() {
        return (
            <Container style={styles.container}>
               <MapView

               />
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
