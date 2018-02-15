import React from 'react';
import { Text } from 'react-native';
import { Button } from 'native-base';

export const OutlineButton = (props) => {
    return (
        <Button bordered><Text>{props.text}</Text></Button>
    );
};
