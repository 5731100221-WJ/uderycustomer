import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { Container, Picker, Icon, Input, Item, Header } from 'native-base';
import FooterTabs from '@footerTabs/FooterTabs.js';
const PickerItem = Picker.Item;

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
        <View style={{ width: 180, marginLeft: 30 }}>
          <Picker
              iosHeader="Select one"
              mode="dropdown"
              selectedValue={this.state.selected1}
              onValueChange={(value) => { this.setState({ selected1: value }); }}
          >
            <PickerItem label="วิศวกรรมศาสตร์" value="key0" />
            <PickerItem label="บัญชี" value="key1" />
            <PickerItem label="รัฐศาสตร์" value="key2" />
            <PickerItem label="อักษรศาสตร์" value="key3" />
            <PickerItem label="วิทยาศาสตร์" value="key4" />
          </Picker>
        </View>
        <Header searchBar rounded style={{ backgroundColor: '#F0F0F0' }}>
          <Item>
            <Input placeholder="ค้นหาร้านอาหาร" />
            <Icon name='home' />
          </Item>
        </Header>
        <ScrollView>
          <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between'}}>
            {this.state.list.map((item, index) => (
                <View style={{ width: 170, height: 170, margin: 15}} key={index}>
                  <View style={{ height: 150 }}>
                    <Image
                      style={{ width: 170, height: 145 }}
                      source={require('@img/1.jpg')}
                    />
                  </View>
                  <View style={{ flex: 1, flexDirection: 'row', width: 170, height: 20, justifyContent: 'space-between' }}>
                    <View style={{ marginLeft: 5 }}>
                      <Text>{item.name}</Text>
                    </View>
                    <View style={{ height: 20 }}>
                      <Text>{item.rate}</Text>
                    </View>
                  </View>
                </View>
              ))}
          </View>
        </ScrollView>
        <FooterTabs />
      </Container>
    );
  }
}
