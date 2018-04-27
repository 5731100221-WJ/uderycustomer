import React, { Component } from "react";
import { Text, View, Image, ScrollView } from 'react-native';
import {  Content } from 'native-base';
import Order from './Order';

export default class NowOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: props.userId,
      usertoken: props.usertoken,
      list: [],
      storeId: props.storeId,
      userId: props.userID,
      disk: {}

      // list: [{ id: 0, foodName: 'คัสสึด้ง', Topping: ['หมู'], Price: '35', Date: '19/04/2018', Time: '05:12 PM.' }]
    };
  }
  componentDidMount() {
    this.getOrder();
  }

  getOrder() {
    fetch('http://35.185.182.152:3000/api/menucombinationitems?filter=%7B%22registerCustommerId%22%3A%20%22' + this.state.userId + '%22%7D')
      .then((response) => response.json())
      .then((response) => {
        this.setState({ list: response });
      })
      .catch(() => {
        // this.setState({ store: { name: 'ส้มaa', description: 'จานด่วน', picture:'https://food.mthai.com/app/uploads/2014/03/792167141-1.jpg', storeId: '5ac7c683322d2c02cf0f3587' } });
      });
  }

  renderOrder() {
    return this.state.list.map((item, index) => (
      <Order key={item.id} item={item} />
    ));
  }

  render() {
    return (
      <Content padder style={{ marginTop: 0 }}>
        <ScrollView>
          <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}>
            {this.renderOrder()}
          </View>
        </ScrollView>
      </Content>
    );
  }
}
