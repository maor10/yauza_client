import React from 'react';
import {Image, StyleSheet, Alert} from 'react-native';
import {
    Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text,
    View, Input, Item
} from 'native-base';
import LatoText from "./general/LatoText";
import YauzaInput from "./general/YauzaInput";
import YauzaButton from "./general/YauzaButton";
import BackButton from "./general/BackButton";
import {createPayOffer} from "../actions/index";


export default class CreatePayOffer extends React.Component {

    state = {
        price: null
    };

    submit = () => {
        const { goBack } = this.props.navigation;
        createPayOffer(this.state.price).then(() => {
            Alert.alert("Coming soon...", "We'll send you a notification when a poor person needs money in exchange for his dignity");
            goBack();
        });
    };

    render() {
        return (
            <Container style={styles.container}>
                <BackButton navigation={this.props.navigation} />
                <LatoText type="Black" color="white" size={35} style={{ textAlign: 'center' }}>
                    How much are you willing to pay?
                </LatoText>
                <LatoText type="Black" color="white" size={20} style={{ textAlign: 'center', marginBottom: 45, padding: 20 }}>
                    We'll send you a notification when we find your bitch
                </LatoText>
                <View style={styles.inputGroup}>
                    <YauzaInput style={{ marginRight: 10, width: 60 }} onChange={(e) => this.setState({price: e.target.value})} />
                    <LatoText size={40}>$</LatoText>
                </View>
                <View style={styles.sellSelfSubmitButtonWrapper}>
                    <YauzaButton text="Find me someone to yauza!"  onPress={() => {this.submit()}} />
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
