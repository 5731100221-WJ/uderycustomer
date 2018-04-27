import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Text } from 'native-base';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';

import { Actions } from 'react-native-router-flux';
export default class FooterTabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: props.userId,
      usertoken: props.usertoken,
    };
  }
  render() {
    return (
      <Footer>
        <FooterTab>
          <Button vertical onPress={() => { Actions.favorite( {userId: this.state.userId , usertoken: this.state.usertoken}); }}>
            <Icon name="heart" style={{fontSize:30}} />
            <Text>Favorite</Text>
          </Button>
          <Button vertical onPress={() => { Actions.storeList({userId: this.state.userId , usertoken: this.state.usertoken}); }}>
            <Icon name="store" style={{fontSize:30}} />
            <Text>Store</Text>
          </Button>
          <Button vertical active onPress={() => { Actions.orderList({userId: this.state.userId , usertoken: this.state.usertoken}); }}>
            <Icon active name="silverware" style={{fontSize:30}} />
            <Text>Order</Text>
          </Button>
          <Button vertical onPress={() => { Actions.profile({userId: this.state.userId , usertoken: this.state.usertoken}); }}>
            <Icon name="account" style={{fontSize:30}}/>
            <Text>Profile</Text>
          </Button>
        </FooterTab>
      </Footer>

    );
  }
}
