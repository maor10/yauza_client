import React from 'react';
import {StyleSheet} from 'react-native';
import {Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text} from 'native-base';
import Home from "./components/Home";
import {
    createStackNavigator,
} from 'react-navigation';
import SellSelf from "./components/SellSelf";
import {LinearGradient} from "expo";
import CreatePayOffer from "./components/CreatePayOffer";
import FindPerson from "./components/FindPerson";


const fade = (props) => {
    const {position, scene} = props;

    const index = scene.index;

    const translateX = 0;
    const translateY = 0;

    const opacity = position.interpolate({
        inputRange: [index - 0.7, index, index + 0.7],
        outputRange: [0.3, 1, 0.3]
    });

    return {
        opacity,
        transform: [{translateX}, {translateY}]
    }
};


const RootStack = createStackNavigator(
    {
        Home: {
            screen: Home
        },
        SellSelf: {
            screen: SellSelf
        },
        CreatePayOffer: {
            screen: CreatePayOffer
        }
    },
    {
        initialRouteName: 'Home',
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        },
        cardStyle: {
            backgroundColor: "transparent",
        },
        transitionConfig: () => ({
            containerStyle: {},
            screenInterpolator: (props) => {
                return fade(props)
            }
        })
    }
);


export default class App extends React.Component {

    state = {
        loading: true
    };

    async componentWillMount() {
        await Expo.Font.loadAsync({
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
            'Lato-Black': require('./assets/fonts/Lato-Black.ttf'),
            'Lato-BlackItalic': require('./assets/fonts/Lato-BlackItalic.ttf'),
            'Lato-Bold': require('./assets/fonts/Lato-Bold.ttf'),
            'Lato-BoldItalic': require('./assets/fonts/Lato-BoldItalic.ttf'),
            'Lato-Hairline': require('./assets/fonts/Lato-Hairline.ttf'),
            'Lato-HairlineItalic': require('./assets/fonts/Lato-HairlineItalic.ttf'),
            'Lato-Italic': require('./assets/fonts/Lato-Italic.ttf'),
            'Lato-Light': require('./assets/fonts/Lato-Light.ttf'),
            'Lato-LightItalic': require('./assets/fonts/Lato-LightItalic.ttf'),
            'Lato-Regular': require('./assets/fonts/Lato-Regular.ttf')
        });
        this.setState({loading: false});

    }

    render() {
        if (this.state.loading) {
            return <Expo.AppLoading />;
        }
        return (
            <LinearGradient colors={['#c2e59c', '#64b3f4']} style={styles.linearGradient}>
                <RootStack />
            </LinearGradient>
        );
    }
}


const styles = StyleSheet.create({
    linearGradient: {
        flex: 1
    },
});

