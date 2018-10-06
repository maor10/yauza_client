import {Input, Item, Text} from "native-base";
import React from 'react';

const YauzaInput = (props) => {
    const {placeholder, style, ...newProps} = props;
    return (
        <Item rounded {...newProps} style={[style, {backgroundColor: 'white'}]}>
            <Input style={{fontFamily: 'Lato-Regular', textAlign: 'center'}} placeholder={placeholder}/>
        </Item>)
};

export default YauzaInput;