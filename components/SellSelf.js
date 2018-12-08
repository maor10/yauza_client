import React from 'react';
import {StyleSheet, Alert} from 'react-native';
import {
    Container, View, Icon
} from 'native-base';
import LatoText from "./general/LatoText";
import YauzaInput from "./general/YauzaInput";
import YauzaButton from "./general/YauzaButton";
import BackButton from "./general/BackButton";
import {createHitOffer} from "../actions/index";


export default class SellSelf extends React.Component {

    state = {
        price: null
    };

    submit = () => {
        const { goBack } = this.props.navigation;
        createHitOffer(this.state.price).then(() => {
            Alert.alert("Someone will slap you soon", "I'm sorry your life has come to this.");
            goBack();
        });
    };

    render() {
        return (
            
            <Container style={styles.container}>
                <BackButton navigation={this.props.navigation} />
                <LatoText type="Black" color="white" size={35} style={{ textAlign: 'center', marginBottom: 45, padding: 20 }}>
                    Hi! How much is your pride worth?
                </LatoText>
                <View style={styles.inputGroup}>
                    <YauzaInput style={{ marginRight: 10, width: 60 }} onChange={(e) => this.setState({price: e.target.value})} />
                    <LatoText size={40}>$</LatoText>
                </View>
                <View style={styles.sellSelfSubmitButtonWrapper}>
                    <YauzaButton text="Throw Balloons At Me!"  onPress={() => {this.submit()}} />
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
