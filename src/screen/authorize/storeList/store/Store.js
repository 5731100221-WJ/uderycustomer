import React, { Component } from 'react';
import { ImageBackground, View, Image, ScrollView } from 'react-native';
import { Container, Picker, Icon, Button } from 'native-base';
import BlockButton from '@button/BlockButton';
import Text from '@atom/Text';
import { Actions } from 'react-native-router-flux';

export default class Store extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id || 1,
      userId: props.userID || 1,
      IsFavorite: false,
      isOpen: false,
      store: {},
      // store: { storeName: 'ไก่ทอด', storeDetail: 'ไก่ทอดอักษร', timeOpen: '06:00', timeClose: '17:00', rate: 4.9 },
      user: {},
      storeMenu: [
      // { menuID: 1, name: 'ข้าวคัสสึด้งหมู', price: '35' },
      // { menuID: 2, name: 'ข้าวแกงกระหรี่', price: '35' },
      // { menuID: 3, name: 'ข้าวหน้าหมูญี่ปุ่น', price: '35' },
      // { menuID: 4, name: 'ข้าวไข่เจียว', price: '35' },
      // { menuID: 5, name: 'ข้าวเทริยากิ', price: '35' },
      // { menuID: 6, name: 'ข้าวเทริยากิ', price: '35' },
      // { menuID: 7, name: 'ข้าวเทริยากิ', price: '35' },
      // { menuID: 8, name: 'ข้าวเทริยากิ', price: '35' },
    ],
    };
}

  componentDidMount() {
    // this.isThisOpenNow();
    this.getStoreDetail();
    this.getStoreMenu();
  }

  getStoreDetail() {
    fetch('http://35.185.182.152:3000/api/stores/'+ this.state.id)
      .then((response) => response.json())
      .then((response) => {
        console.log('test', response)
        this.setState({ store: response });
      })
      .catch(() => {
        this.setState({ store: { name: 'ส้มaa', description: 'จานด่วน', picture:'https://food.mthai.com/app/uploads/2014/03/792167141-1.jpg', id: '5ac7c683322d2c02cf0f3587' } });
      })
  }
  getStoreMenu() {
    fetch('http://35.185.182.152:3000/api/stores/'+ this.state.id+'/menuitems' )
      .then((response) => response.json())
      .then((response) => {
        console.log(this.state.id, response)
        this.setState({ storeMenu: response });
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
      })
  }
  getUserDetails(){
    fetch('http://10.202.199.150:300/user' + this.state.userId)
      .then((response) => response.json())
      .then((response) => {
        this.setState({ user: response });
      })
      .catch(() => {
        this.setState({ user: { UserImage_url: 'https://scontent.fbkk10-1.fna.fbcdn.net/v/t1.0-1/p240x240/26169860_1977972945806737_8198830292735689267_n.jpg?oh=192bca2eaa2e016ae5a2c0fabc71dffa&oe=5B0EC2DC'}})
      })
  }

  // isThisOpenNow() {
  //   fetch('http://10.202.199.150:3000/stores/' + this.state.id + '/isOpen')
  //     .then((response) => response.json())
  //     .then((response) => {
  //       console.log('test', response)
  //       this.setState({ isOpen: response });
  //     }).catch(() => {
  //       this.setState({ isOpen: false });
  //     })
  // }

  render() {
    const { container, textName, textDetail, textTime, userImageView, menuBox, menuView, rateView} = styles;
    const { store } = this.state;
    return (
      <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start' }}>
        <ScrollView>
          <ImageBackground style={{ height: 160, flexDirection: 'row' }} blurRadius={20} source={{ uri: store.picture }}>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
                <Icon name="arrow-back" />
            </Button>
            <View style={{ margin: 20 }}>
              <Text style={textName}>ร้าน{store.name}</Text>
              <Text style={textDetail}>{store.description} </Text>
              {/* <Button block style={{ height: 20, width: 35, margin: 8, backgroundColor: (this.state.isOpen ? '#1EBE3E' : '#fff') }}>
                <Text>{ this.state.isOpen ? 'เปิด' : 'ปิด' }</Text>
              </Button>
              <Text style={textTime}>เวลาที่เปิดให้บริการ</Text>
              <Text style={textTime}>{store.timeOpen}-{store.timeClose}</Text> */}
            </View>
            <Icon name="star" style={{ marginTop: 15}} />
          </ImageBackground>
          <View style={styles.userReviewView}>
            <Image
              style={styles.userImage}
              source={{ uri: 'https://scontent.fbkk10-1.fna.fbcdn.net/v/t1.0-1/p240x240/26169860_1977972945806737_8198830292735689267_n.jpg?oh=192bca2eaa2e016ae5a2c0fabc71dffa&oe=5B0EC2DC' }}
            />
            <View style={rateView}>
              <Icon name='star' />
              <Icon name='star' />
              <Icon name='star' />
              <Icon name='star' />
              <Icon name='star' />
            </View>
          </View>
          <View style={menuView}>
            {this.state.storeMenu.map((menu, index) => (
              <Button full light style={menuBox} key={index} onPress={() => { Actions.menuDetails({ id: this.state.id ,menuID: menu.id ,menuName:menu.name}); }}>
                <Text>{menu.name}</Text>
                <Text>{menu.price}</Text>
              </Button>
              ))}
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
    color: 'black',
    marginBottom: 15
  },
  textDetail: {
    fontSize: 15,
    color: 'black'
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
    marginLeft:20,
    height: 50,
  },
  userReviewView: {
    backgroundColor: '#D5DBDB',
    height: 100,
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  menuView: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  menuBox: {
    height: 65,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5
  }
};
