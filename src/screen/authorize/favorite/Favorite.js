import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { Container, Icon, Header, Title, Card, Button, Body, Right, Left } from 'native-base';
import FooterTabs from '@footerTabs/FooterTabs.js';
import Favo from './Favo';

export default class Favorite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected1: 'key0',
      userId: props.userId,
      usertoken: props.usertoken,
      list: []
      // list: [{ id: 0, name: 'ส้ม', rate: 4.9, picture: 'https://f.ptcdn.info/245/041/000/o4lu0paryQPlo8ncV0K-o.jpg', DoneOrder: 25 }]
    };
  }
  componentDidMount() {
    this.getFavorite();
  }
  getFavorite() {
    fetch('http://35.185.182.152:3000/api/stores')
      .then((response) => response.json())
      .then((response) => {
        this.setState({ list: response });
      })
      .catch(() => {
        // this.setState({ list: { name: 'ส้ม', description: 'จานด่วน', picture:'https://food.mthai.com/app/uploads/2014/03/792167141-1.jpg', id: '5ac7c683322d2c02cf0f3587' } });
      })
  }
  renderFavo() {
    return this.state.list.map((item, index) => (
        <Favo key={item.id} item={item} userId={this.state.userId} usertoken={this.state.usertoken} />
      ))
  }
  render() {
    return (
      <Container>
        <Header hasTabs>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title> Favorite</Title>
          </Body>
          <Right />
        </Header>
        <ScrollView>
          {this.renderFavo()}
        </ScrollView>
        <FooterTabs userId={this.state.userId} usertoken={this.state.usertoken}/>
      </Container>
    );
  }
}
