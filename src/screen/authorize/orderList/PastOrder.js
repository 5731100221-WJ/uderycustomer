import React, { Component } from "react";
import { Text, View, Image, ScrollView } from 'react-native';
import { Container, Picker, Icon, Input, Item, Header, Title, Tabs, Tab, Card, Button, Content } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class PastOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [{ id: 0, foodName: 'คัสสึด้ง', Topping: ['หมู'], Price: '35', picture:'http://media.komchadluek.net/img/size1/2017/06/09/L_g9657ha7ddk5d5abab98g1.jpg', Date: '10/04/2018', Time: '12:00 น.' }, { id: 1, foodName: 'ไข่เจียว', Topping: ['แฮม'], Price: '35',picture:'https://cms.kapook.com/uploads/tag/36/ID_35159_570220f662374.jpg', Date: '14/02/2018', Time: '12:00 น.' },
            { id: 2, foodName: 'กะเพรา', Topping: ['หมู'], Price: '35', picture:'https://food.mthai.com/app/uploads/2014/03/792167141-1.jpg',Date: '21/03/2018', Time: '10:31 น.' }, { id: 3, foodName: 'ข้าวเหนียว', Topping: ['ไก่ทอด'], Price: '35',picture:'https://www.khaosod.co.th/upload/files/1461937646_5.jpg', Date: '14/02/2018', Time: '12:00 น.' },
            { id: 4, foodName: 'ข้าวมัน', Topping: ['ไก่ต้ม'], Price: '35', picture:'https://food.mthai.com/app/uploads/2016/01/Hainanese-chicken-rice.jpg', Date: '14/02/2018', Time: '12:00 น.' }]
    };
  }
  componentDidMount() {
    this.getOrder();
  }
  getOrder() {
    fetch('http://35.185.182.152:3000/api/menucombinationitems/5ad92acd6d31850260be63fc?access_token=gKo1JEpngz44Dlqfs8iC5uayT47buQiHy1INU8VMboxeTW9txBHWE7f9H8zoWlDr')
      .then((response) => response.json())
      .then((response) => {
        this.setState({ toppingType: response });
      })
      .catch((error) => {
        console.log('error : ', error);
        this.setState({ toppingType: [
        { storeID: 1, toppingID: 1, name: 'หมูทอด', price: '0' },
        { storeID: 1, toppingID: 2, name: 'ไก่ทอด', price: '0' },
        { storeID: 1, toppingID: 3, name: 'ปลา', price: '0' },
        { storeID: 1, toppingID: 4, name: 'หมูสามชั้นทอด', price: '5' },
        { storeID: 1, toppingID: 5, name: 'ไก่คาราเกะ', price: '5' },
        { storeID: 1, toppingID: 6, name: 'หมูสามชั้นทอด', price: '5' },
        { storeID: 1, toppingID: 7, name: 'ไก่คาราเกะ', price: '5' },
      ]
       });
      })
  }
  render() {
    return (
      <Content padder style={{ marginTop: 0 }}>
        <ScrollView>
          <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}>
            {this.state.list.map((item, index) => (
                <Card style={{ height: 150, margin: 20, flex: 1, flexDirection: 'row' }} key={index}>
                  <Image
                      style={{ width: 170, height: 150 }}
                      source={{ uri:item.picture}}
                  />
                  <View style={{ flex: 1, flexDirection: 'column' }}>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                      <View style={{ margin: 15 }}>
                        <Text style={{ fontSize: 20 }}>{item.foodName}</Text>
                      </View>
                      <View style={{ margin: 15 }}>
                        <Text style={{ fontSize: 20 }}>{item.Price} บาท</Text>
                      </View>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                      <View style={{ margin: 15 }}>
                        <Text style={{ fontSize: 15 }}>{item.Topping[0]}</Text>
                      </View>
                      <View style={{ margin: 8 }}>
                        <Button transparent >
                          <Text>Rate</Text>
                        </Button>
                      </View>
                      <View style={{margin:10, height: 20,weight: 30}}>
                        <Button style={{backgroundColor: '#7CCA17'}} >
                          <Text>Re-order</Text>
                        </Button>
                      </View>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                      <View style={{ flex: 1, marginTop: 15, marginLeft: 15 }}>
                        <Text style={{ fontSize: 15 }}>{item.Date}</Text>
                      </View>
                      <View style={{ marginLeft: 30, marginTop: 15, flex: 1 }}>
                        <Text style={{ fontSize: 15 }}>{item.Time}</Text>
                      </View>
                    </View>
                  </View>
                </Card>
              ))}
          </View>
        </ScrollView>
      </Content>
    );
  }
}
