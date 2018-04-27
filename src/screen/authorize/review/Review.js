import React, { Component } from "react";
import Text from '@atom/Text';
import {View, ScrollView, Image} from 'react-native';
import { Container, Header, Left, Body, Title, Right, Content, Textarea, Form, Card, CardItem, Button, Icon, Thumbnail } from "native-base";
import { Actions } from 'react-native-router-flux';

export default class Review extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: props.userId,
      userdetails: {},
      storeId: props.storeId,
      usertoken: props.usertoken,
      reviewList: [],
      date1: '',
      month: '',
      year: '',
      reviewText: '',
      rate:0,
    };
  }
  componentDidMount() {
    this.getDate();
    this.getUserDetails();
    this.getReview();
  }
  getDate() {
      this.state.date1 = new Date().getDate();
      this.state.month = new Date().getMonth() + 1;
      this.state.year = new Date().getFullYear();
  }
  getUserDetails(){
    fetch('http://35.185.182.152:3000/api/registerCustommers/' + this.state.userId + '?access_token=' + this.state.usertoken)
      .then((response) => response.json())
      .then((response) => {
        this.setState({ userdetails: response });
        console.log('test112',response);
      })
      .catch(() => {
        // this.setState({ userdetails: { UserImage_url: 'https://scontent.fbkk10-1.fna.fbcdn.net/v/t1.0-1/p240x240/26169860_1977972945806737_8198830292735689267_n.jpg?oh=192bca2eaa2e016ae5a2c0fabc71dffa&oe=5B0EC2DC'}})
      })
  }
  getReview() {
    fetch('http://35.185.182.152:3000/api/stores/' + this.state.storeId + '/storereviews')
      .then((response) => response.json())
      .then((response) => {
        this.setState({ reviewList: response });
        console.log('test112',response);
      })
      .catch(() => {
        // this.setState({ userdetails: { UserImage_url: 'https://scontent.fbkk10-1.fna.fbcdn.net/v/t1.0-1/p240x240/26169860_1977972945806737_8198830292735689267_n.jpg?oh=192bca2eaa2e016ae5a2c0fabc71dffa&oe=5B0EC2DC'}})
      })
  }
  sendReview() {
    const { reviewText } = this.state;
    console.log('test69',reviewText)
    fetch('http://35.185.182.152:3000/api/stores/' + this.state.storeId + '/storereviews' , {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        reviwtext: reviewText,
        rate: this.state.rate,
        storeId: this.state.storeId,
        registerCustommerId: this.state.userId
      }),
    });
    Actions.review({ userId: this.state.userId, usertoken: this.state.usertoken, storeId: this.state.id });
  }
  render() {
    console.log('test33', this.state)
    const { reviewView, cardSty, inputView, container, userReviewView, rateView } = styles;
    const { userdetails, date1, month, year } = this.state;
    return (
      <View style={container}>
        <Header hasTabs>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title> Review</Title>
          </Body>
          <Right />
        </Header>
        <ScrollView >
          <View style={reviewView}>
            {this.state.reviewList.map((item, index) => (
              <Card transparent style={cardSty}>
                <CardItem cardBody>
                  <Text style={{ fontSize: 20, marginTop: 10, marginLeft: 15 }}>
                    {item.reviwtext}
                  </Text>
                  <View style={{ flex: 1, flexDirection: 'row', height: 30 , marginLeft:15}}>
                    <Text style={{ marginTop: 5 }}>{item.rate}</Text>
                    <Icon name='star' style={{ fontSize: 20, margin: 4, marginTop: 6 }} />
                  </View>
                  <Text style={{ margin: 5 }}>{date1 + '-' + month + '-' + year}</Text>
                </CardItem>
              </Card>
            ))}
          </View>
        <CardItem bordered>
          <Left>
          <Thumbnail source={{uri: 'https://scontent.fbkk1-2.fna.fbcdn.net/v/t1.0-9/29541815_2017223515215013_2350939371380057927_n.jpg?_nc_fx=fbkk1-1&_nc_cat=0&_nc_eui2=v1%3AAeEKRfzodpHc-2LGzJeJslL3ivMgJ3qR40KFOpiCkxsziCMVv03I2rzPUXbhJCvPkgbMTxkCbsYluxA8JcSdG11OjmB97Bxv2BPeBayBv-w21A&oh=d558544fe2b3e6633eedded9c4cb0d02&oe=5B5FC3B5'}} />
          <Body>
            <Text>{userdetails.name}</Text>
            <Text note style={{fontSize:15}}>ให้คะแนนร้านนี้</Text>
          </Body>
          </Left>

        </CardItem>
        <CardItem >
          <Button transparent onPress={() => this.setState({rate: 1})}><Icon name='star' /></Button>
          <Button transparent onPress={() => this.setState({rate: 2})}><Icon name='star' /></Button>
          <Button transparent onPress={() => this.setState({rate: 3})}><Icon name='star' /></Button>
          <Button transparent onPress={() => this.setState({rate: 4})}><Icon name='star' /></Button>
          <Button transparent onPress={() => this.setState({rate: 5})}><Icon name='star' /></Button>

        </CardItem>
        <View style={inputView}>
          <Textarea rowSpan={5} bordered placeholder="รีวิวร้านนี้ไม่เกิน 120ตัวอักษร" onChangeText={(text) => this.setState({ reviewText: text })}/>
        </View>
        <Button full onPress={() => {this.sendReview()}}>
          <Text style={{color:'#FFF'}}>Send</Text>
        </Button>
      </ScrollView>

      </View>
    );
  }
}
const styles = {
  reviewView: {
    height: 360,
  },
  cardSty: {
    height: 50,
  },
  inputView: {
    marginTop: 5,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start'
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
  rateView: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 25,
    marginLeft: 20,
    height: 50,
  },
};
