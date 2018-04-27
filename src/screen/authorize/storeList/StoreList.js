import React from 'react';
import { View, Image, ScrollView, TouchableHighlight } from 'react-native';
import { Container, Picker, Icon, Input, Item, Header, Button } from 'native-base';
import FooterTabs from '@footerTabs/FooterTabs.js';
import Text from '@atom/Text';
import { Actions } from 'react-native-router-flux';
// import SearchInput from 'react-native-search-filter';

const PickerItem = Picker.Item;

export default class StoreList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user,
      usertoken: props.usertoken,
      selected1: 'key0',
      userId: props.userId ,
      list: [],
      searchText: ''
      // list: [{ id: 0, name: 'ส้ม', rate: 4.9 }, { id: 1, name: 'ก๋วยเตี๋ยว', rate: 4.9 }, { id: 2, name: 'ตามสั่ง', rate: 4.9 }, { id: 3, name: 'ส้มตำ', rate: 4.9 }, { id: 4, name: 'ส้ม', rate: 4.9 }, { id: 5, name: 'ส้ม', rate: 4.9 }, { id: 6, name: 'ส้ม', rate: 4.9 }]
    };
  }
  componentDidMount() {
    this.getStoreList();
  }
  getStoreList() {
    fetch('http://35.185.182.152:3000/api/stores')
      .then((response) => response.json())
      .then((response) => {
        console.log('test', response)
        this.setState({ list: response });
      })
      .catch(() => {
        // this.setState({ list: { name: 'ส้ม', description: 'จานด่วน', picture:'https://food.mthai.com/app/uploads/2014/03/792167141-1.jpg', id: '5ac7c683322d2c02cf0f3587' } });
      })
  }
  search() {
    fetch('http://35.185.182.152:3000/api/stores/findOne?filter=%7B%22name%22%3A%22' + this.searchText + '%22%7D&')
      .then((response) => response.json())
      .then((response) => {
        console.log('test', response)
        this.setState({ list: response });
      })
      .catch(() => {
        // this.setState({ list: { name: 'ส้ม', description: 'จานด่วน', picture:'https://food.mthai.com/app/uploads/2014/03/792167141-1.jpg', id: '5ac7c683322d2c02cf0f3587' } });
      })
  }
  render() {
    const { textList } = styles;
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
            <Input placeholder="ค้นหาร้านอาหาร" value={this.state.searchText} onChangeText={(text) => this.setState({ searchText: text })} />
            <Button transparent onPress={() => this.search()}><Icon name='search' /></Button>
          </Item>
        </Header>
        {/* <SearchInput
          onChangeText={(term) => { this.searchUpdated(term), }}
          style={styles.searchInput}
          placeholder="Type a message to search"
        /> */}
        <ScrollView>
          <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
            {this.state.list.map((item, index) => (
                <View style={{ width: 170, height: 170, margin: 15}} key={index}>
                  <View style={{ height: 150 }} >
                    <TouchableHighlight onPress={() => Actions.store({ id: item.id, userId: this.state.userId , usertoken: this.state.usertoken})}>
                      <Image
                        style={{ width: 170, height: 145 }}
                        source={{ uri: item.picture }}
                      />
                    </TouchableHighlight>
                  </View>
                  <View style={{ flex: 1, flexDirection: 'row', width: 170, height: 40, justifyContent: 'space-between' }}>
                    <View style={{ marginLeft: 5, flex:2}}>
                      <Text style={textList}>{item.name}</Text>
                    </View>
                    {/* <View style={{marginRight: 5} /} */}
                    <View style={{flex: 1, flexDirection: 'row', height: 30 }}>
                      <Text style={textList}>{item.rate}</Text>
                      <Icon name='star' style={{fontSize: 20, margin:4}} />
                    </View>
                  </View>
                </View>
              ))}
          </View>
        </ScrollView>
        <FooterTabs userId={this.state.userId} usertoken={this.state.usertoken}/>
      </Container>
    );
  }
}

const styles = {
  textList: {
    fontSize: 20
  },
  searchInput: {
    padding: 10,
    borderColor: '#CCC',
    borderWidth: 1
  }
};
