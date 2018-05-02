import React, { Component } from "react";
import { Text, View, Image, ScrollView, TouchableHighlight } from 'react-native';
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
    fetch('http://35.185.182.152:3000/api/stores/' + item.id, {
      method: 'PATCH',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        isFavo: !item.isFavo
      }),
    });
    Actions.storeList({ usertoken: this.state.usertoken, userId: this.state.userId });
  }
  render() {
    const { item } = this.state;
    if (item.isFavo === true){
      return (
        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}>
          <Card style={{ height: 150, margin: 20, flex: 1, flexDirection: 'row' }} >
            <TouchableHighlight onPress={() => Actions.store({ id: item.id, userId: this.state.userId, usertoken: this.state.usertoken} )}>
              <Image
                  style={{ width: 170, height: 150 }}
                  source={{ uri: item.picture }}
              />
            </TouchableHighlight>
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
