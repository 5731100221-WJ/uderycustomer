import React from 'react'
import { Map } from 'immutable'
import PropTypes from 'prop-types'

import { StyleSheet, View } from 'react-native'
import {
  Content,
  Form,
  Item,
  Text,
  Label,
  Input
} from 'native-base'

import PopupLayout from '@layouts/PopupLayout'
import OAuthPanel from '../../components/OAuthPanel'
import { TextButton } from 'app-component/atom'

export class LoginScreen extends React.Component {
  render () {
    return (
      <PopupLayout title='Login' onPressBack={() => this.props.navigation.goBack()}>
        <Content padder style={styles.container}>
          <View style={{ marginTop: 10, paddingLeft: 10 }}>
            <Text>Login With</Text>
          </View>
          <OAuthPanel
            onFacebookLoggedIn={this.props.handleFacebookLogin}
            onGoogleLoggedIn={this.props.handleGoogleLogin}
          />
          <View style={{
            borderBottomColor: 'gray',
            borderBottomWidth: 1,
            marginTop: 10,
            marginBottom: 20
          }} />
          <Form>
            <Item floatingLabel style={styles.container}>
              <Label>Username</Label>
              <Input
                value={this.props.userLogingin.get('phone')}
                onChangeText={text => this.props.updateUserLogingin({ phone: text })}
              />
            </Item>
            <Item floatingLabel style={styles.container}>
              <Label>Password</Label>
              <Input secureTextEntry
                value={this.props.userLogingin.get('password')}
                onChangeText={text => this.props.updateUserLogingin({ password: text })}
              />
            </Item>
            <TextButton yellow full
              title='Login'
              style={styles.loginBtnCon}
              onPress={this.props.login} />
          </Form>
        </Content>
      </PopupLayout>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    margin: '2.5%'
  },
  loginBtnCon: {
    marginTop: 20
  },
  con: {
    flex: 1,
    alignSelf: 'center',
    flexDirection: 'row',
    marginTop: 10
  },
  btnCon: {
    marginHorizontal: 10
  },
  oAuthBtn: {
    height: null,
    marginHorizontal: 20
  },
  icon: {
    fontSize: 80
  },
  fbIcon: {
    color: '#3b5998'
  },
  googleIcon: {
    color: '#DD4B35'
  },
  p: {
    alignItems: 'center',
    flexDirection: 'column'
  }
})

LoginScreen.propTypes = {
  signInLoading: PropTypes.bool,
  navigation: PropTypes.object,
  userLogingin: PropTypes.instanceOf(Map),

  updateUserLogingin: PropTypes.func,
  login: PropTypes.func,
  handleGoogleLogin: PropTypes.func,
  handleFacebookLogin: PropTypes.func
}

LoginScreen.defaultProps = {
  userLogingin: Map()
}

export default LoginScreen
