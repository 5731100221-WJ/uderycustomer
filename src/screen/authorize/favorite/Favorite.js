import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { Container, Picker, Icon, Input, Item, Header, Title, Tabs, Tab, Card, Button } from 'native-base';
import FooterTabs from '@footerTabs/FooterTabs.js';

export default class StoreList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected1: 'key0',

      list: [{ id: 0, name: 'ส้ม', rate: 4.9 }, { id: 1, name: 'ก๋วยเตี๋ยว', rate: 4.9 }, { id: 2, name: 'ตามสั่ง', rate: 4.9 }, { id: 3, name: 'ส้มตำ', rate: 4.9 }, { id: 4, name: 'ส้ม', rate: 4.9 }, { id: 5, name: 'ส้ม', rate: 4.9 }, { id: 6, name: 'ส้ม', rate: 4.9 }]
    };
  }
  render() {
    return (
      <Container>
        <Header hasTabs>
          <Title>Favorite</Title>
        </Header>
        <ScrollView>
          <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between'}}>
            {this.state.list.map((item, index) => (
                <Card style={{ height: 150, margin: 20,flex: 1,flexDirection: 'row'}} key={index}>
                  <Image
                      style={{ width: 170, height: 150 }}
                      source={require('@img/1.jpg')}
                    />
                  <View style={{flex: 1, flexDirection: 'column'}}>
                    <View style={{ flex: 3, flexDirection: 'row', justifyContent: 'space-between' }}>
                      <View style={{ margin: 15 }}>
                        <Text style={{fontSize: 25}}>{item.name}</Text>
                      </View>
                      <Button vertical active transparent style={{margin: 15}} >
                        <Icon active name="start" onPress={() => { Actions.storeList(); }}/>
                      </Button>
                    </View>
                    <View style={{ flex: 2, flexDirection: 'row', justifyContent: 'space-between'}}>
                      <View style={{ flex: 1, marginTop: 15,marginLeft: 15 }}>
                        <Text style={{fontSize: 17}}>{item.rate}</Text>
                      </View>
                      <View style={{ width: 5, flex: 1,marginTop: 15,marginLeft: 0}} >
                        <Icon active name="start" style={{fontSize: 20}}/>
                      </View>
                      <View style={{ marginLeft: 30, marginTop:15 , flex: 3 }}>
                        <Text style={{fontSize: 17}}>สั่งไปแล้ว {item.rate}</Text>
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
