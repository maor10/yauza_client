import {Text} from "native-base";
import React from 'react';

const LatoText = (props) => {
    const {style, color, type, size, children, ...newProps } = props;
    const font = 'Lato-' + (type || 'Regular');
    return (
    <Text {...newProps} style={[style, {fontFamily: font, fontSize: size, color: color || 'black'} ]}>
        {children}
    </Text>)
};

export default LatoText;