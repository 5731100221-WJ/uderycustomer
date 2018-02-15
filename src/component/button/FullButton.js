import React from 'react';
import { Text } from 'react-native';
import { Button } from 'native-base';

export const FullButton = (props) => {
    return (
        <Button full style={{ backgroundColor: '#FEBC4A' }}><Text>{props.text}</Text></Button>
    );
};
