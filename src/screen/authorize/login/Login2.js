import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    TextInput,
    View,
    Button,
    Image
} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      UserName: '',
      Password: '',
      isLoggingIn: false,
      message: '',
      user: {},
      usertoken: '',
      proceed: false
    };
  }

  _userlogin () {
    // console.log('test', this.state)
    // this.state.Username && this.state.Password
    if (1){
      fetch('http://35.185.182.152:3000/api/registerCustommers/login', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: this.state.UserName,
          password: this.state.Password,
        }),
      })
        .then((response) => response.json())
        .then((response) => {
          this.setState({ user: response });
          this.setState({ usertoken: response.id });
          if (response.error) this.setState({ message: response.message});
          else this.state.proceed = true;
        })
        .then(() => {
          this.setState({ isLoggingIn: false})
          if (this.state.proceed) {
            Actions.StoreList({ user: this.state.user, usertoken: this.state.usertoken });
           }
        })


    }

  }

    render() {
        return (
            <ScrollView style={{ padding: 20 }}>
              <View style={{ flex: 1,flexDirection: 'row',justifyContent: 'center',margin: 20}}>
                <Image style={{ width:200 , height:200 }}
                  source ={ require('@img/logo.png') }/>
              </View>
                <Text
                    style={{ fontSize: 27 }}>
                    Login
                </Text>
                <TextInput placeholder='Username' value={this.state.UserName} onChangeText={(text) => this.setState({ UserName: text })} />
                <TextInput placeholder='Password' secureTextEntry value={this.state.Password} onChangeText={(text) => this.setState({ Password: text })} />
                <View style={{ margin: 7 }} />
                <Button
                  onPress={() => this._userlogin()}
                    title="Login"
                />
                <View style={{ margin: 7 }} />
                <Button
                  onPress={() => { Actions.register(); }}
                  title="register" />
                </ScrollView>
            )
    }
}
