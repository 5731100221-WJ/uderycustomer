import React, { Component } from "react";
import { Text, View, Image, ScrollView } from 'react-native';
import { Container, Picker, Icon, Input, Item, Header, Title, Tabs, Tab, Card, Button, Content } from 'native-base';
import { Actions } from 'react-native-router-flux';
import PassOrder from './PassOrder';

export default class PastOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {

      userId: props.userID,

      // list: [{ id: 0, foodName: 'คัสสึด้ง', Topping: ['หมู'], Price: '35', picture:'http://media.komchadluek.net/img/size1/2017/06/09/L_g9657ha7ddk5d5abab98g1.jpg', Date: '10/04/2018', Time: '12:00 น.' }, { id: 1, foodName: 'ไข่เจียว', Topping: ['แฮม'], Price: '35',picture:'https://cms.kapook.com/uploads/tag/36/ID_35159_570220f662374.jpg', Date: '14/02/2018', Time: '12:00 น.' },
      //       { id: 2, foodName: 'กะเพรา', Topping: ['หมู'], Price: '35', picture:'https://food.mthai.com/app/uploads/2014/03/792167141-1.jpg',Date: '21/03/2018', Time: '10:31 น.' }, { id: 3, foodName: 'ข้าวเหนียว', Topping: ['ไก่ทอด'], Price: '35',picture:'https://www.khaosod.co.th/upload/files/1461937646_5.jpg', Date: '14/02/2018', Time: '12:00 น.' },
      //       { id: 4, foodName: 'ข้าวมัน', Topping: ['ไก่ต้ม'], Price: '35', picture:'https://food.mthai.com/app/uploads/2016/01/Hainanese-chicken-rice.jpg', Date: '14/02/2018', Time: '12:00 น.' }]
      list: []
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
    console.log('xxx',this.state);
    return this.state.list.map((item, index) => (
        <PassOrder key={item.id} item={item} userId={this.state.userId} />
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
