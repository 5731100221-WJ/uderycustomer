import React from 'react';
import { Text } from 'react-native';
import { Button } from 'native-base';

export const BlockButton = (props) => {
    return (
        <Button block ><Text>{props.text}</Text></Button>
    );
};
