import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    TextInput,
    View,
    Image
} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      name: '',
      surname: '',
      tel: '',
      email: '',
      facebook: '',
      realm: '',
      emailVerified: '',
      id: '',
    };
  }
register_() {
  console.log('test', this.state);
  fetch('http://35.185.182.152:3000/api/registerCustommers', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: this.state.username,
      name: this.state.name,
      password: this.state.password,
      tel: this.state.tel,
      email: this.state.email,
    }),
  })
  .then((response) => response.json())
  .then((response) => {
    console.log('test', this.state);
    if (response.error) this.setState({ message: response.message });
    else Actions.login();
  });
}
  render() {
      return (
        <Container>
          <Header >
            <Left>
              <Button transparent onPress={() => this.props.navigation.goBack()}>
                <Icon name='arrow-back' />
              </Button>
            </Left>
            <Body>
              <Title>Register</Title>
            </Body>
            <Right />
          </Header>
          <ScrollView style={{ padding: 20 }}>
            <View style={{ flex: 1,flexDirection: 'row', justifyContent: 'center', margin: 20}}>
              <Image style={{ width:100 , height:100 }}
                source ={ require('@img/logo.png') }/>
            </View>
              <Text
                  style={{ fontSize: 27 }}>
                  Register
              </Text>
              <TextInput placeholder='Username' value={this.state.username} onChangeText={(text) => this.setState({ username: text })} />
              <TextInput placeholder='Password' secureTextEntry value={this.state.password} onChangeText={(text) => this.setState({ password: text })} />
              <TextInput placeholder='Name' value={this.state.name} onChangeText={(text) => this.setState({ name: text })} />
              <TextInput placeholder='Phone Number' value={this.state.tel} onChangeText={(text) => this.setState({ tel: text })} />
              <TextInput placeholder='Email' value={this.state.email} onChangeText={(text) => this.setState({ email: text })} />
              <View style={{ margin: 7 }} />
              <Button block onPress={() => { this.register_() }}>
              {/* <Button block onPress={() => { this.register(); }}> */}
                <Text style={{ fontSize: 20, color: '#FFF' }}> Submit </Text>
              </Button>
            </ScrollView>
        </Container>
      );
  }
}
