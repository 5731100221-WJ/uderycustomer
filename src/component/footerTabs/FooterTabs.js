import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
export default class FooterTabs extends Component {
  render() {
    return (
      <Container>
        <Content />
        <Footer>
          <FooterTab>
            <Button vertical>
              <Icon name="heart" />
              <Text>Favorite</Text>
            </Button>
            <Button vertical>
              <Icon name="shop" />
              <Text>Store</Text>
            </Button>
            <Button vertical active>
              <Icon active name="food" />
              <Text>Order</Text>
            </Button>
            <Button vertical>
              <Icon name="person" />
              <Text>Profile</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
