import React from 'react';
import {Modal, TouchableOpacity, TouchableHighlight, Image, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import {
    Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text,
    View
} from 'native-base';
import LatoText from "./general/LatoText";
import {LinearGradient, MapView, Marker} from "expo";
import AnimatedRegion from 'react-native-maps';

export default class FindPerson extends React.Component {
  state = {
    modalVisible: false,
  };

  _onHeaderPress = () => this.setState({ modalVisible: true });

    render() {
        return (
            <Container style={styles.container}>
               <MapView
               style={{ flex: 1 }}
               initialRegion={{
                  latitude: 37.78825,
                  longitude: -122.4324,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                }}>

                <MapView.Marker
                    coordinate={{latitude: 37.78825,
                    longitude: -122.4324}}
                    image={require('../assets/balloon.png')}

                />

               </MapView>


                <View style={styles.header}>
                    <TouchableOpacity onPress={this._onHeaderPress}>
                        <View style={styles.titleWrapper}>
                            <Image style={styles.targetImage} source={require('../assets/maor_photo.jpg')}/>
                            <LatoText style={styles.title} size={20} type="Black">MAOR KERN</LatoText>

                        </View>
                    </TouchableOpacity>
                </View>

                <Modal
                  animationType="slide"
                  visible={this.state.modalVisible}
                  style={styles.modal}
                  transparent={true}
                  >
                  <View style={{marginTop: 22}}>
                    <View>
                      <Text>Hello World!</Text>

                      <TouchableHighlight
                        onPress={() => {
                          this.setState({modalVisible: false});
                        }}>
                        <Text>Hide Modal</Text>
                      </TouchableHighlight>
                    </View>
                  </View>
                </Modal>

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
        justifyContent: 'center'
    },

    title: {
        textAlign: 'center',
        color: 'white',
        marginTop: 40,
        marginLeft: 100,
    },

    header: {
        position: "absolute",
        backgroundColor: '#1B4F72',
        top: 0,
        right:0,
        left:0,
        height: 150,
        paddingTop:35,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
        opacity: 0.8
    },

    titleWrapper: {
        display: 'flex',
        flexDirection: 'row',
        opacity: 1,
    },

    targetImage: {
        width: 100,
        height: 100,
        borderRadius:100,
        marginLeft: 15,
    },
    modal: {
        position: "absolute",
        top: 20
    }
});


const latlng = new AnimatedRegion({
      latitude: 37.78825,
      longitude: -122.4324
});