import React from 'react';
import {StyleSheet} from 'react-native';
import {Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text} from 'native-base';


export default class App extends React.Component {

    state = {
        loading: true
    };

    async componentWillMount() {
        await Expo.Font.loadAsync({
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
        });
        this.setState({loading: false});

    }

    render() {
        if (this.state.loading) {
            return <Expo.AppLoading />;
        }
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name='menu'/>
                        </Button>
                    </Left>
                    <Body>
                    <Title>Header</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <Text>
                        This is Contentk Section
                    </Text>
                </Content>
                <Footer>
                    <FooterTab>
                        <Button full>
                            <Text>Footer</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#b3faff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
