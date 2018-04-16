import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { Container, Icon, Header, Title, Card, Button, Body, Right, Left } from 'native-base';
import FooterTabs from '@footerTabs/FooterTabs.js';

export default class Favorite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected1: 'key0',

      list: [{ id: 0, name: 'ส้ม', rate: 4.9, DoneOrder: 25 }, { id: 1, name: 'ก๋วยเตี๋ยว', rate: 4.9, DoneOrder: 25 }, { id: 2, name: 'ตามสั่ง', rate: 4.9, DoneOrder: 25 }, { id: 3, name: 'ส้มตำ', rate: 4.9, DoneOrder: 25 }, { id: 4, name: 'ส้ม', rate: 4.9, DoneOrder: 25 }, { id: 5, name: 'ส้ม', rate: 4.9, DoneOrder: 25 }, { id: 6, name: 'ส้ม', rate: 4.9, DoneOrder: 25 }]
    };
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
          <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}>
            {this.state.list.map((item, index) => (
                <Card style={{ height: 150, margin: 20, flex: 1, flexDirection: 'row' }} key={index}>
                  <Image
                      style={{ width: 170, height: 150 }}
                      source={require('@img/2.jpg')}
                  />
                  <View style={{ flex: 1, flexDirection: 'column' }}>
                    <View style={{ flex: 3, flexDirection: 'row', justifyContent: 'space-between' }}>
                      <View style={{ margin: 15 }}>
                        <Text style={{ fontSize: 25 }}>{item.name}</Text>
                      </View>
                      <Button vertical active transparent style={{ margin: 15 }} >
                        <Icon active name='star' onPress={() => { Actions.storeList(); }} />
                      </Button>
                    </View>
                    <View style={{ flex: 2, flexDirection: 'row', justifyContent: 'space-between' }}>
                      <View style={{ flex: 0.7, marginTop: 15, marginLeft: 15 }}>
                        <Text style={{ fontSize: 17 }}>{item.rate}</Text>
                      </View>
                      <View style={{ flex: 1, width: 5, marginTop: 18, marginLeft: 3 }} >
                        <Icon active name="star" style={{ fontSize: 15 }} />
                      </View>
                      <View style={{ flex: 3, marginLeft: 10, marginTop: 15}}>
                        <Text style={{ fontSize: 15 }}>สั่งไปแล้ว {item.DoneOrder} Order</Text>
                      </View>
                    </View>
                  </View>
                </Card>
              ))}
          </View>
        </ScrollView>
        <FooterTabs />
      </Container>
    );
  }
}
