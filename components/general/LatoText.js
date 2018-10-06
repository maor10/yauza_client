import {Text} from "native-base";
import React from 'react';


const LatoText = (props) => {
    const {style, children, ...newProps } = props;
    const font = 'Lato-' + (props.type || 'Regular');
    return (
    <Text {...newProps} style={[style, {fontFamily: font} ]}>
        {...children}
    </Text>)
};

export default LatoText;