import React from 'react';
import {Text, ImageBackground, Image, StyleSheet, TouchableWithoutFeedback, TouchableOpacity} from 'react-native';
import {
    Button,
    Container, View
} from 'native-base';
import LatoText from "./general/LatoText";
import axios from 'axios';
import {updateLocation, login, registerForPushNotificationsAsync, requestCameraPermission} from "../actions/index";

import { Permissions, Notifications } from 'expo';


class Home extends React.Component {


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
            <ImageBackground source={require('../assets/montage.jpg')} style={{width: '100%', height: '100%'}} >
                <View style={styles.contentContainer}>
                  <Text color='white' style={{fontSize: 100, textAlign: 'center', marginBottom: 30, fontFamily: "VINCHAND"}}>SlapMe</Text>
                  <Text color='red' style={{textAlign: 'center', color:'white', fontSize: 40, marginBottom: 10, fontFamily: "VINCHAND"}}> 
                    What are you in it for?
                  </Text>
                  <View style={styles.optionsContainer}>
                      <View style={ [styles.bodySection, styles.slapMeSection]}>
                          <TouchableOpacity onPress={() => navigate('CreatePayOffer')}>
                              <Image
                                  style={styles.optionImage}
                                  source={require('../assets/slap_hand.png')}/>
                              <Text
                                  style={styles.sectionText} type="Black">Moneys</Text>
                          </TouchableOpacity>
                      </View>

                      <View style={ [styles.bodySection, styles.moneySection] }>
                          <TouchableOpacity onPress={() => navigate('SellSelf')}>
                              <Image
                                  style={styles.optionImage}
                                  source={require('../assets/money-bag.png')}/>
                              <Text
                                  style={styles.sectionText} type="Black">lols
                              </Text>
                          </TouchableOpacity>
                      </View>

                  </View>
                </View>
              </ImageBackground>
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
        width: '40%',
        borderRadius: 5,
        padding: 10
    },

    slapMeSection: {
      // backgroundColor: '#801a00',
      marginRight: '3%'
    },

    moneySection: {
        // backgroundColor: '#193366',
        marginLeft: '3%'
    },

    sectionText: {
        textAlign: 'center',
        color: 'black',
        fontFamily: "VINCHAND",
        fontSize: 40
    },

    contentContainer: {
      width: '100%',
      height: '100%',
      backgroundColor: '#e65c00',
      opacity: 0.8,
      margin: 'auto',
      borderRadius: 5,
      justifyContent: 'center',
    }
});

export default Home;
