import React from 'react';
import {Image, StyleSheet, Alert, TouchableOpacity} from 'react-native';
import {
    Button,
    Container, View
} from 'native-base';
import LatoText from "./general/LatoText";
import { LoginButton } from 'react-native-fbsdk';
import axios from 'axios';
import {updateLocation, login, registerForPushNotificationsAsync, requestCameraPermission} from "../actions/index";

import { Permissions, Notifications } from 'expo';


export default class Home extends React.Component {


    async componentDidMount() {
        const {type, token} = await Expo.Facebook.logInWithReadPermissionsAsync('305597643394917', {
            permissions: ['email'],
        });
        if (type === 'success') {
            axios.get(
                'https://graph.facebook.com/v2.5/me?fields=name&access_token=' + token).then((response) => {
                login(token, response.data.name).then(() => {
                    Permissions.askAsync(Permissions.LOCATION);
                });
            });

        }
        setInterval(
            updateLocation,
            1000
        );
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <Container style={styles.container}>
                <LatoText type="Hairline" color='white' size={70} style={{textAlign: 'center', marginBottom: 40}}>SlapMe</LatoText>
                <View style={styles.optionsContainer}>
                    <View style={ styles.bodySection }>
                        <TouchableOpacity onPress={() => navigate('CreatePayOffer')}>
                            <Image
                                style={styles.optionImage}
                                source={require('../assets/slap_hand.png')}/>
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
