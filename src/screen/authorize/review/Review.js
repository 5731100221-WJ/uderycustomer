import React, { Component } from "react";
import Text from '@atom/Text';
import {View, ScrollView, Image} from 'react-native';
import { Container, Header, Left, Body, Title, Right, Content, Textarea, Form, Card, CardItem, Button, Icon, Thumbnail } from "native-base";


export default class Review extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewList: [],
    };
  }

  render() {
    const { reviewView, cardSty, inputView, container, userReviewView, rateView } = styles;
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
            <Card transparent style={cardSty}>
              <CardItem bordered>
                <Left>
                <Thumbnail source={{uri: 'https://scontent.fbkk1-2.fna.fbcdn.net/v/t1.0-9/29541815_2017223515215013_2350939371380057927_n.jpg?_nc_fx=fbkk1-1&_nc_cat=0&_nc_eui2=v1%3AAeEKRfzodpHc-2LGzJeJslL3ivMgJ3qR40KFOpiCkxsziCMVv03I2rzPUXbhJCvPkgbMTxkCbsYluxA8JcSdG11OjmB97Bxv2BPeBayBv-w21A&oh=d558544fe2b3e6633eedded9c4cb0d02&oe=5B5FC3B5'}} />
                <Body>
                  <Text>Weeraphat</Text>
                  <Text note style={{fontSize:15}}>สั่งไปแล้ว 4 ครั้ง</Text>
                </Body>
                </Left>
                <Right>
                  <Text>17/03/2018</Text>
                </Right>
              </CardItem>
              <CardItem cardBody>
                <Text style={{fontSize: 20, margin:10, marginLeft: 15}}>
                  อร่อย และ ถูกมากคับ
                </Text>
              </CardItem>
              <CardItem>
                <Icon name='star' />
                <Icon name='star' />
                <Icon name='star' />
                <Icon name='star' />
                <Icon name='star' />
              </CardItem>
            </Card>
            <Card transparent style={cardSty}>
              <CardItem bordered>
                <Left>
                <Thumbnail source={{uri: 'https://scontent.fbkk1-6.fna.fbcdn.net/v/t1.0-9/29473077_10204402195172447_8617335920707764224_n.jpg?_nc_fx=fbkk1-1&_nc_cat=0&_nc_eui2=v1%3AAeHAoB2jKt7dK_YkC2ZDHWFjTFMMChLs_QYTeBoXkcl6Yuzcd1K7_TVBCrHrY6dZlm0v1z93M5xFEzVQ4DOfHzlT5lHUJ9SZJXXHrQhHe4Xqag&oh=12a5ef3b28a94d135b64e59895cd342e&oe=5B622FEC'}} />
                <Body>
                  <Text>Ascharapon</Text>
                  <Text note style={{fontSize:15}}>สั่งไปแล้ว 7 ครั้ง</Text>
                </Body>
                </Left>
                <Right>
                  <Text>10/03/2018</Text>
                </Right>
              </CardItem>
              <CardItem cardBody>
                <Text style={{fontSize: 20, margin:10, marginLeft: 15}}>
                  เร็ว สะอาดดี
                </Text>
              </CardItem>
              <CardItem>
                <Icon name='star' />
                <Icon name='star' />
                <Icon name='star' />
                <Icon name='star' />
                <Icon name='star' />
              </CardItem>
            </Card>
          </View>
        <CardItem bordered>
          <Left>
          <Thumbnail source={{uri: 'https://scontent.fbkk1-2.fna.fbcdn.net/v/t1.0-9/29541815_2017223515215013_2350939371380057927_n.jpg?_nc_fx=fbkk1-1&_nc_cat=0&_nc_eui2=v1%3AAeEKRfzodpHc-2LGzJeJslL3ivMgJ3qR40KFOpiCkxsziCMVv03I2rzPUXbhJCvPkgbMTxkCbsYluxA8JcSdG11OjmB97Bxv2BPeBayBv-w21A&oh=d558544fe2b3e6633eedded9c4cb0d02&oe=5B5FC3B5'}} />
          <Body>
            <Text>Weeraphat</Text>
            <Text note style={{fontSize:15}}>ให้คะแนนร้านนี้</Text>
          </Body>
          </Left>

        </CardItem>
        <CardItem >
          <Icon name='star' />
          <Icon name='star' />
          <Icon name='star' />
          <Icon name='star' />
          <Icon name='star' />
        </CardItem>
        <View style={inputView}>
          <Textarea rowSpan={5} bordered placeholder="รีวิวร้านนี้ไม่เกิน 120ตัวอักษร" />
        </View>
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
