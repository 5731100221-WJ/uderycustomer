import React, { Component } from "react";
import { Text, View, Image, ScrollView } from 'react-native';
import { Container, Picker, Icon, Input, Item, Header, Title, Tabs, Tab, Card, Button, Content } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class PastOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [{ id: 0, foodName: 'คัสสึด้ง', Topping: ['หมู'], Price: '35', Date: '14/02/2018', Time: '12:00 น.' }, { id: 1, foodName: 'ไข่เจียว', Topping: ['แฮม'], Price: '35', Date: '14/02/2018', Time: '12:00 น.' },
            { id: 2, foodName: 'กะเพรา', Topping: ['หมู'], Price: '35', Date: '14/02/2018', Time: '12:00 น.' }, { id: 3, foodName: 'ข้าวเหนียว', Topping: ['ไก่ทอด'], Price: '35', Date: '14/02/2018', Time: '12:00 น.' },
            { id: 4, foodName: 'ข้าวมัน', Topping: ['ไก่ต้ม'], Price: '35', Date: '14/02/2018', Time: '12:00 น.' }]
    };
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
                      source={ require('@img/1.jpg')}
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
                      <View style={{margin:10, height: 20}}>
                        <Button style={{backgroundColor: 'green'}} >
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
