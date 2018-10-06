import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {
    Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text,
    View, Input
} from 'native-base';


export default class Home extends React.Component {


    render() {
        return (
            <Container style={styles.container}>
                <Input placeholder='Textbox with Success Input'/>
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
        justifyContent: 'center'
    },

});
