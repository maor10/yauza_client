import React from 'react';
import {Slider, Image, StyleSheet, Alert} from 'react-native';
import {
    Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text,
    View, Input, Item
} from 'native-base';
import LatoText from "./general/LatoText";
import YauzaButton from "./general/YauzaButton";
import BackButton from "./general/BackButton";
import {createPayOffer} from "../actions/index";


export default class CreatePayOffer extends React.Component {

    state = {
        price: 10
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
                <Image style={styles.anonymos_pic} source={require('../assets/anon_man.jpg')}/>
                <Text style={{color: 'white', fontSize: 30, textAlign: 'center', marginBottom: 10, fontFamily: "VINCHAND"}}>
                    Find the matching face to you hand
                </Text>
                <LatoText type="Black" color="white" size={18} style={{ textAlign: 'center', marginBottom: 30, padding: 20, textAlign: 'center' }}>
                    How much moneys are you willing to pay?
                </LatoText>
                <Text style={{fontSize: 30, textAlign: 'center', marginBottom: 10, fontFamily: "VINCHAND"}}>
                {this.state.price}$
                </Text>
                <View style={styles.inputGroup}>
                    <Slider
                    style={{width: 300}}
                    step={1}
                    minimumValue={1}
                    maximumValue={200}
                    value={this.state.price}
                    onValueChange={val => this.setState({ price: val })}
                    />
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
        backgroundColor: '#e65c00',
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
    },

    anonymos_pic: {
      width: '50%',
      height: '30%',
      marginRight:'25%',
      marginLeft:'25%',
      marginTop:'10%',
      justifyContent: 'center',
    }
});
