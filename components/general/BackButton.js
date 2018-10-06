



import React from 'react';
import {Icon} from "native-base";
import {TouchableOpacity} from "react-native";

const BackButton = (props) => {
    const { goBack } = props.navigation;
    return (
        <TouchableOpacity style={{position: 'absolute', top: 50, left: 10}} onPress={() => goBack()}>
             <Icon type="FontAwesome" name="chevron-left" style={{ color: 'white'}} />
        </TouchableOpacity>)
};

export default BackButton;