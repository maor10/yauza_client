import {Button, Input, Item, Text} from "native-base";
import React from 'react';

const YauzaButton = (props) => {
    const {text, style, ...newProps} = props;
    return (
        <Button title="" style={[style]} {...newProps}>
            <Text style={{color: 'white', fontFamily: 'Lato-Bold'}}>{text}</Text>
        </Button>)
};

export default YauzaButton;
