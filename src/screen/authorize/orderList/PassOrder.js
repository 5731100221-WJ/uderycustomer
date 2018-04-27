import React, { Component } from "react";
import { Text, View, Image, ScrollView } from 'react-native';
import { Card, Button  } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class PassOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user,
      usertoken: props.usertoken,
      item: props.item,
      disk: {},
      userID: props.userId,
      storeId: props.item.storeId,
      menuId: props.item.menuitemId,
      date1: '',
      month: '',
      year: '',
      // list: [{ id: 0, foodName: 'คัสสึด้ง', Topping: ['หมู'], Price: '35', Date: '19/04/2018', Time: '05:12 PM.' }]
    };
  }
  componentDidMount() {
    console.log(this.state);
    this.getMenu();
    this.getDate();
  }
  getMenu() {
    //const { storeId, menuId } = this.state;
    fetch('http://35.185.182.152:3000/api/stores/' + this.state.storeId + '/menuitems/' + this.state.menuId)
      .then((response) => response.json())
      .then((response) => {
        this.setState({ disk: response });
      })
      .catch(() => {
        this.setState({
          storeMenu: [
          { menuID: 1, name: 'ข้าวคัสสึด้งหมู', price: '35' },
          { menuID: 2, name: 'ข้าวแกงกระหรี่', price: '35' },
          { menuID: 3, name: 'ข้าวหน้าหมูญี่ปุ่น', price: '35' },
          { menuID: 4, name: 'ข้าวไข่เจียว', price: '35' },
          { menuID: 5, name: 'ข้าวเทริยากิ', price: '35' },
          { menuID: 6, name: 'หม', price: '35' },
          { menuID: 7, name: 'ข้าหฟกวเทริยากิ', price: '35' },
          { menuID: 8, name: 'ข้าวเไๆำๆทริยากิ', price: '35' },
        ] });
      });
  }
  getDate() {
      this.state.date1 = new Date().getDate();
      this.state.month = new Date().getMonth() + 1;
      this.state.year = new Date().getFullYear();
  }
  sendMenu() {
    const {   menuId, userId, date1, month, year, item } = this.state;
    fetch('http://35.185.182.152:3000/api/menucombinationitems', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: item.name,
        storeId: this.state.storeId,
        registerCustommerId: userId,
        menuitemId: menuId,
        price: item.price,
        date: date1 + '-' + month + '-' + year
      }),
    });
    Actions.orderList({ storeId: this.state.storeId, userID: userId, user: this.state.user, usertoken: this.state.usertoken});
  }
  render() {
    console.log('555555', this.state);
    const { item } = this.state;
  if(item.isget=== true){
      return (
        <Card style={{ height: 150, margin: 20, flex: 1, flexDirection: 'row' }}>
          <Image
              style={{ width: 170, height: 150 }}
              source={{ uri: this.state.disk.picture}}
          />
          <View style={{ flex: 1, flexDirection: 'column' }}>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={{ margin: 15 }}>
                <Text style={{ fontSize: 20 }}>{item.name}</Text>
              </View>
              <View style={{ margin: 15 }}>
                <Text style={{ fontSize: 20 }}>{item.price} บาท</Text>
              </View>
            </View>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{ margin: 15 }}>
                <Text style={{ fontSize: 15 }}>{item.name}</Text>
              </View>
              <View  style={{ margin: 8 }}>
                <Button block style={{backgroundColor:'yellow'}} onPress={() => { Actions.review({ userId: this.state.userId, usertoken: this.state.usertoken, storeId: this.state.id}); }}>
                  <Text>Review</Text>
                </Button>
              </View>
              <View style={{margin:10, height: 20,weight: 30}}>
                <Button block style={{backgroundColor: '#7CCA17'}} onPress={() => { this.sendMenu()}} >
                  <Text>Re-order</Text>
                </Button>
              </View>
            </View>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={{ flex: 1, marginTop: 15, marginLeft: 15 }}>
                <Text style={{ fontSize: 15 }}>{item.date}</Text>
              </View>
            </View>
          </View>
        </Card>

      );
    }
    return null;
  }
}
