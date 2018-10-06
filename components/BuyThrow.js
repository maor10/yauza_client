import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {
    Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text,
    View, Input, Item
} from 'native-base';
import LatoText from "./general/LatoText";
import YauzaInput from "./general/YauzaInput";
import YauzaButton from "./general/YauzaButton";


export default class BuyThrow extends React.Component {


    render() {
        return (
            <Container style={styles.container}>
                <LatoText type="Black" color="white" size={35} style={{ textAlign: 'center' }}>
                    How much are you willing to pay?
                </LatoText>
                <LatoText type="Black" color="white" size={20} style={{ textAlign: 'center', marginBottom: 45, padding: 20 }}>
                    We'll send you a notification when we find your bitch
                </LatoText>
                <View style={styles.inputGroup}>
                    <YauzaInput style={{ marginRight: 10, width: 60 }} />
                    <LatoText size={40}>$</LatoText>
                </View>
                <View style={styles.sellSelfSubmitButtonWrapper}>
                    <YauzaButton text="Find me someone to yauza!"  onPress={() => {}} />
                </View>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },

    inputGroup: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },

    sellSelfSubmitButtonWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
});
