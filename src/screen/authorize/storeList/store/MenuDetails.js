import React, { Component } from 'react';
import { ImageBackground, View, ScrollView } from 'react-native';
import { Icon, Button } from 'native-base';
import Text from '@atom/Text';
import { Actions } from 'react-native-router-flux';

export default class MenuDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      userId: props.userID || 1,
      IsFavorite: false,
      isOpen: false,
      user: {},
      toppingType: []
    };
  }

  componentDidMount() {
    this.getStoreTopping();
  }

  getStoreTopping() {
    fetch('http://35.185.182.152:3000/api/stores/' + '5ac7c683322d2c02cf0f3587'+'/proteinitems')
    // fetch('http://35.185.182.152:3000/api/stores/' + this.state.id+'/proteinitems')
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
    console.log('test')
    const { toppingView, menuBox, menuNameView, headerTP, menuView } = styles;
    const { store } = this.state;
    return (
      <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start' }}>
        <ScrollView>
          <ImageBackground style={{ height: 160, flexDirection: 'row' }} source= { require('@img/4.jpg') }>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
                <Icon name="arrow-back" />
            </Button>
          </ImageBackground>
          <View style={menuNameView}>
            <Button full light style={menuBox} >
              <Text>ข้าวคัสสึด้งหมู</Text>
              <Text>35</Text>
            </Button>
          </View>
          <View style={toppingView}>
            <View style={headerTP}>
              <Text>เนื้อสัตว์</Text>
            </View>
            <View style={menuView}>
              {(typeof this.state.toppingType === 'object' && this.state.toppingType.error) ? <Text>No item</Text>
              : this.state.toppingType.map((topping, index) => (
                <Button full light style={menuBox} key={index}>
                  <Text>{topping.name}</Text>
                  <Text>+{topping.price}</Text>
                </Button>
                ))}
            </View>
            <View style={[menuBox, { marginTop: 20}]}>
              <Text>ราคารวม</Text>
              <Text>35บาท</Text>
            </View>
            <Button full style={{ backgroundColor: '#FEBC4A', marginBottom: 10 }}
              onPress={() => { Actions.storeList(); }}>
              <Text>ชำระเงิน</Text>
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
