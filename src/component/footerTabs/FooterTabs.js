import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';
export default class FooterTabs extends Component {
  render() {
    return (
      <Footer>
        <FooterTab>
          <Button vertical>
            <Icon name="heart" onPress={() => { Actions.favorite(); }} />
            <Text>Favorite</Text>
          </Button>
          <Button vertical>
            <Icon name="shop" onPress={() => { Actions.storeList(); }} />
            <Text>Store</Text>
          </Button>
          <Button vertical active>
            <Icon active name="food" onPress={() => { Actions.orderList(); }} />
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
