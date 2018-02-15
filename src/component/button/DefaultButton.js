import React from 'react';
import { Text } from 'react-native';
import { Button } from 'native-base';

export const DefaultButton = (props) => {
    return (
       <Button style={{ backgroundColor: '#FEBC4A' }}><Text> {props.text}</Text></Button>
    );
};
