import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { View, Image, StyleSheet, TextInput, ScrollView} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Text } from 'native-base';
import FooterTabs from '@footerTabs/FooterTabs.js';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: props.userId,
      usertoken: props.usertoken,
      username: '',
      password: '',
      name: '',
      surname: '',
      tel: '',
      email: '',
      facebook: '',
      realm: '',
      emailVerified: '',
      userdetails: {}
    };
  }
  componentDidMount() {
    this.getUserDetails();
}
  getUserDetails(){
    console.log('44444',this.state);
    fetch('http://35.185.182.152:3000/api/registerCustommers/' + this.state.userId + '?access_token=' + this.state.usertoken)
      .then((response) => response.json())
      .then((response) => {
        this.setState({ userdetails: response });
        console.log('8888888','http://35.185.182.152:3000/api/registerCustommers/' + this.state.userId + '?access_token=' + this.state.usertoken);
      })
      // .then(
      //   this.setState({ name: userdetails.name });
      //   this.setState({ surname: userdetails.surname });
      //   this.setState({ tel: userdetails.tel });
      // )
      .catch(() => {
        // this.setState({ userdetails: { UserImage_url: 'https://scontent.fbkk10-1.fna.fbcdn.net/v/t1.0-1/p240x240/26169860_1977972945806737_8198830292735689267_n.jpg?oh=192bca2eaa2e016ae5a2c0fabc71dffa&oe=5B0EC2DC'}})
      })
  }
  saveState() {
    fetch('http://35.185.182.152:3000/api/registerCustommers/' + this.state.userId + '?access_token=' + this.state.usertoken, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: this.state.name,
        surname: this.state.surname,
        tel: this.state.tel

      }),
    });
    Actions.profile({ userID: this.state.userId, usertoken: this.state.usertoken });
  }

  render() {
    const {userdetails } = this.state;
    return (
      <Container>
        <Header >
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Profile</Title>
          </Body>
          <Right>
            <Button onPress={() => this.saveState()}>
              <Text>Save</Text>
            </Button>
          </Right>
        </Header>
        <ScrollView>
          <View style={styles.userImageView}>
            <Image
              style={styles.userImage}
              source={{ uri: 'https://scontent.fbkk2-6.fna.fbcdn.net/v/t1.0-9/29541815_2017223515215013_2350939371380057927_n.jpg?_nc_cat=0&_nc_eui2=v1%3AAeEKRfzodpHc-2LGzJeJslL3ivMgJ3qR40KFOpiCkxsziCMVv03I2rzPUXbhJCvPkgbMTxkCbsYluxA8JcSdG11OjmB97Bxv2BPeBayBv-w21A&oh=d558544fe2b3e6633eedded9c4cb0d02&oe=5B5FC3B5'}}
            />
          </View>
          <View style={{margin: 10}}>
            <TextInput placeholder='Name' value={this.state.name} onChangeText={(text) => this.setState({ name: text })} />
            <TextInput placeholder='Surname' value={this.state.surname} onChangeText={(text) => this.setState({ surname: text })} />
            <TextInput placeholder='Phone Number' value={this.state.tel} onChangeText={(text) => this.setState({ tel: text })} />
          </View>
        </ScrollView>
        <FooterTabs userId={this.state.userId} usertoken={this.state.usertoken} />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  userImage: {
    borderColor: '#F0F0F0',
    borderRadius: 85,
    borderWidth: 3,
    height: 150,
    marginBottom: 15,
    width: 150,
  },
  userImageView: {
    backgroundColor: '#F0F0F0',
    height: 200,
    alignItems: 'center',
    justifyContent: 'center'
  },
  editForm_container: {
    flex: 3,
    backgroundColor: 'rgb(255, 255, 255)',
    flexDirection: 'column',
    paddingHorizontal: 40,
    paddingVertical: 20,
    //justifyContent: 'space-between'
  },
  body_text: {
    fontSize: 15,
    color: 'black',
    marginTop: 10
  },

});
