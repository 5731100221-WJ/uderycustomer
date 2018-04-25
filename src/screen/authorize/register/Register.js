import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    TextInput,
    View,
    Image
} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';

export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      confirmpassword: '',
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
            <View style={{ flex: 1,flexDirection: 'row',justifyContent: 'center',margin: 20}}>
              <Image style={{ width:100 , height:100 }}
                source ={ require('@img/logo.png') }/>
            </View>
              <Text
                  style={{ fontSize: 27 }}>
                  Register
              </Text>
              <TextInput placeholder='Username' value={this.state.username} onChangeText={(text) => this.setState({ username: text })} />
              <TextInput placeholder='Password' secureTextEntry value={this.state.Password} onChangeText={(text) => this.setState({ Password: text })} />
              <TextInput placeholder='confirm-Password' secureTextEntry value={this.state.confirmpassword} onChangeText={(text) => this.setState({ confirmpassword: text })} />
              <TextInput placeholder='Name' value={this.state.name} onChangeText={(text) => this.setState({ name: text })} />
              <TextInput placeholder='Surname' value={this.state.surname} onChangeText={(text) => this.setState({ surname: text })} />
              <TextInput placeholder='Phone Number' value={this.state.tel} onChangeText={(text) => this.setState({ tel: text })} />
              <TextInput placeholder='Email' value={this.state.email} onChangeText={(text) => this.setState({ email: text })} />
              <View style={{ margin: 7 }} />
              <Button block >
                <Text style={{ fontSize: 20, color: '#FFF' }}> Submit </Text>
              </Button>
            </ScrollView>
        </Container>
      );
  }
}
