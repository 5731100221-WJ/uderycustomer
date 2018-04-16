import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';
export default class FooterTabs extends Component {
  render() {
    return (
      <Footer>
        <FooterTab>
          <Button vertical onPress={() => { Actions.favorite(); }}>
            <Icon name="heart"  />
            <Text>Favorite</Text>
          </Button>
          <Button vertical onPress={() => { Actions.storeList(); }}>
            <Icon name="shop"  />
            <Text>Store</Text>
          </Button>
          <Button vertical active onPress={() => { Actions.orderList(); }}>
            <Icon active name="cook"  />
            <Text>Order</Text>
          </Button>
          <Button vertical onPress={() => { Actions.profile(); }}>
            <Icon name="person" />
            <Text>Profile</Text>
          </Button>
        </FooterTab>
      </Footer>

    );
  }
}
