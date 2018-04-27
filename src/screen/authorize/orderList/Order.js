import React, { Component } from "react";
import { Text, View, Image, ScrollView } from 'react-native';
import { Card, Button  } from 'native-base';


export default class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: props.item,
      disk: {},
      storeId: props.item.storeId,
      menuId: props.item.menuitemId
      // list: [{ id: 0, foodName: 'คัสสึด้ง', Topping: ['หมู'], Price: '35', Date: '19/04/2018', Time: '05:12 PM.' }]
    };
  }
  componentDidMount() {
    console.log(this.state);
    this.getMenu();
  }
  getMenu() {
    //const { storeId, menuId } = this.state;
    fetch('http://35.185.182.152:3000/api/stores/' + this.state.storeId + '/menuitems/' + this.state.menuId)
      .then((response) => response.json())
      .then((response) => {
        console.log('test201111', response);
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
  render() {
    console.log('555555', this.state);
    const { item } = this.state;
    if(item.isget=== false){
      return (
        <Card style={{ height: 150, margin: 20, flex: 1, flexDirection: 'row' }}>
            <Image
                style={{ width: 170, height: 150 }}
                source={{uri: this.state.disk.picture }}
            />
            <View style={{ flex: 1, flexDirection: 'column' }}>
              <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ margin: 15 }}>
                  <Text style={{ fontSize: 20 }}>{item.name}</Text>
                </View>
              </View>
              <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{ margin: 15 }}>
                  <Text style={{ fontSize: 20 }}>{item.price} บาท</Text>
                </View>
                <View style={{ margin: 15 }}>
                  <Button block style={{ height: 20, width: 35, margin: 8, backgroundColor: (item.iscook ? '#1EBE3E':'#E33C3C') }} >
                    <Text style={{color:'#FFF'}}>{ item.iscook ? 'Done':'wait'}</Text>
                  </Button>
                </View>
              </View>
              <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ flex: 1, marginTop: 15, marginLeft: 15 }}>
                  <Text style={{ fontSize: 15 }}>{item.date}</Text>
                </View>
                <View style={{ marginLeft: 30, marginTop: 15, flex: 1 }}>
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
