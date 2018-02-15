import React, { Component } from 'react';
import Text from 'react-native';
import { Container, Header, Content, Tab, Tabs ,Left ,Right ,Body ,Icon,Button,Title } from 'native-base';
import PastOrder from './PastOrder';
import NowOrder from './NowOrder';
import FooterTabs from '@footerTabs/FooterTabs.js';

export default class OrderList extends Component {
  render() {
    return (
      <Container>
        <Header hasTabs >
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title> Order</Title>
          </Body>
          <Right />
        </Header>
        <Tabs initialPage={0}>
          <Tab heading='Now Order'>
            <NowOrder />
          </Tab>
          <Tab heading='Past Order'>
            <PastOrder />
          </Tab>
        </Tabs>
      <FooterTabs />
      </Container>
    );
  }
}
