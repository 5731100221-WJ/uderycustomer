import React, { Component } from 'react';
import { ImageBackground, View, ScrollView } from 'react-native';
import { Icon, Button } from 'native-base';
import Text from '@atom/Text';
import { Actions } from 'react-native-router-flux';
import { findIndex } from 'lodash'

export default class MenuDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      menuID: props.menuID,
      userId: props.userID || 1,
      IsFavorite: false,
      isOpen: false,
      user: {},
      toppingPrice: 0,
      toppingType: [],
      menu: {},
      selectedItems: [],
      toppingName: ''
    };
  }

  componentDidMount() {
    this.getStoreTopping();
    this.getStoreMenu();
  }

  getStoreTopping() {
    fetch('http://35.185.182.152:3000/api/stores/' +this.state.id+'/proteinitems')
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

  getStoreMenu() {
    fetch('http://35.185.182.152:3000/api/stores/'+ this.state.id+'/menuitems/'+this.state.menuID )
      .then((response) => response.json())
      .then((response) => {
        console.log(this.state.id, response)
        this.setState({ menu: response });
      })
      .catch(() => {
        this.setState({
          menu: [
          { menuID: 1, name: 'ข้าวคัสสึด้งหมู', price: '35' },
          { menuID: 2, name: 'ข้าวแกงกระหรี่', price: '35' },
          { menuID: 3, name: 'ข้าวหน้าหมูญี่ปุ่น', price: '35' },
          { menuID: 4, name: 'ข้าวไข่เจียว', price: '35' },
          { menuID: 5, name: 'ข้าวเทริยากิ', price: '35' },
          { menuID: 6, name: 'หม', price: '35' },
          { menuID: 7, name: 'ข้าหฟกวเทริยากิ', price: '35' },
          { menuID: 8, name: 'ข้าวเไๆำๆทริยากิ', price: '35' },
        ] });
      })
  }

  isSelected(id) {
    const { selectedItems } = this.state;
    const index = selectedItems.indexOf(id);

    return index > -1
  }

  toggleItem(id) {
    const isSelected = this.isSelected(id);

    if (isSelected) {
      this.removeItem(id);
    } else {
      this.addItem(id);
    }
  }

  addItem(id) {
    const { selectedItems } = this.state;
    selectedItems.push(id);
    this.setState({ selectedItems });
  }

  removeItem(id) {
    const { selectedItems } = this.state;
    const index = selectedItems.indexOf(id);
    selectedItems.splice(index, 1);
    this.setState({ selectedItems });
  }

  sumItemPrice() {
    let sum = 0;
    const { toppingType } = this.state;
    this.state.selectedItems.map((id, index) => {
      const itemIndex = findIndex(toppingType, { id });
      sum += toppingType[itemIndex].price;
    });
    return sum;
  }
  allTopping() {
    let nameTopping = '';
    this.state.selectedItems.map((id, index) => {
      const itemIndex = findIndex(toppingType, { id });
      nameTopping += toppingType[itemIndex].name;
    });
    return nameTopping;
  }
  sendMenu() {
    this.state.toppingName = this.allTopping();
    fetch('http://35.185.182.152:3000/api/menucombinationitems', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: this.state.menu.name + this.state.toppingName,

      }),
    });
    Actions.orderList({});
  }

  render() {
    const { toppingView, menuBox, menuNameView, headerTP, menuView } = styles;
    const { store,menu } = this.state;
    return (
      <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start' }}>
        <ScrollView>
          <ImageBackground style={{ height: 160, flexDirection: 'row' }} source= {{ uri:menu.picture }}>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
                <Icon name="arrow-back" />
            </Button>
          </ImageBackground>
          <View style={menuNameView}>
            <Button full light style={menuBox} >
              <Text>{menu.name}</Text>
              <Text>{menu.price}</Text>
            </Button>
          </View>
          <View style={toppingView}>
            <View style={headerTP}>
              <Text>เนื้อสัตว์</Text>
            </View>
            <View style={menuView}>
              {(typeof this.state.toppingType === 'object' && this.state.toppingType.error) ? <Text>No item</Text>
               : this.state.toppingType.map((topping, index) => (
                <Button full style={menuBox} key={index}
                  light
                  info={this.isSelected(topping.id)}
                  onPress={() => this.toggleItem(topping.id)}>
                  <Text>{topping.name}</Text>
                  <Text>+{topping.price}</Text>
                </Button>
                ))}
            </View>
            <View style={[menuBox, { marginTop: 20}]}>
              <Text>ราคารวม</Text>
              <Text>{menu.price + this.sumItemPrice()}</Text>
            </View>
            <Button full style={{ backgroundColor: '#FEBC4A', marginBottom: 10 }}
              onPress={() => { this.sendMenu()}}>
              <Text>สั่ง</Text>
            </Button>
          </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = {
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  textName: {
    fontSize: 30,
    color: 'white'
  },
  textDetail: {
    fontSize: 15,
    color: 'white'
  },
  textTime: {
    fontSize: 12,
    color: 'white'
  },
  userImage: {
    borderColor: '#F0F0F0',
    borderRadius: 85,
    borderWidth: 3,
    height: 65,
    width: 65,
  },
  rateView: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 25,
    marginLeft: 20,
    height: 50,
  },
  menuNameView: {
    backgroundColor: '#D5DBDB',
    height: 100,
    justifyContent: 'center'
  },
  toppingView: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  menuBox: {
    height: 50,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5
  },
  headerTP: {
    height: 25,
    paddingHorizontal: 20,
    justifyContent: 'center',
    backgroundColor: '#989797'
  },
  menuView: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },

};
