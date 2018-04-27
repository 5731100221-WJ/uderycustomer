import React, { Component } from "react";
import { Text, View, Image, ScrollView } from 'react-native';
import { Card, Button  } from 'native-base';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
export default class Favo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: props.userId,
      usertoken: props.usertoken,
      item: props.item,
      storeId: props.item.storeId,
      // list: [{ id: 0, foodName: 'คัสสึด้ง', Topping: ['หมู'], Price: '35', Date: '19/04/2018', Time: '05:12 PM.' }]
    };
  }
  toggleFavo() {
    const { item } = this.state;
    item.isFavo = !item.isFavo;
    Actions.storeList({ usertoken: this.state.usertoken, userId: this.state.user.userId });
  }
  render() {
    const { item } = this.state;
    console.log('777775',this.state);
    if (item.isFavo === true){
      console.log('12345');
      return (
        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}>
          <Card style={{ height: 150, margin: 20, flex: 1, flexDirection: 'row' }} >
            <Image
                style={{ width: 170, height: 150 }}
                source={{ uri: item.picture }}
            />
            <View style={{ flex: 1, flexDirection: 'column' }}>
              <View style={{ flex: 3, flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ margin: 15 }}>
                  <Text style={{ fontSize: 25 }}>{item.name}</Text>
                </View>
                <Button vertical active transparent style={{ margin: 15 }} onPress={() => { this.toggleFavo(); }}>
                  <Icon style={{fontSize: 25}} active name='heart' />
                </Button>
              </View>
              <View style={{ flex: 1, flexDirection: 'row', height: 30 , marginLeft:15}}>
                <Text style={{ marginTop: 5,fontSize:20 }}>{item.rate}</Text>
                <Icon name='star' style={{ fontSize: 20, margin: 4, marginTop: 6 }} />
              </View>
            </View>
          </Card>
        </View>
      );
    }
    return null;
  }
}
