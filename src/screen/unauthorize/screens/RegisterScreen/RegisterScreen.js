import React from 'react'
import { Map } from 'immutable'
import PropTypes from 'prop-types'

import { StyleSheet, View } from 'react-native'
import {
  Content,
  Label,
  Item,
  Text,
  Form,
  Input
} from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome'

import PopupLayout from 'layouts/PopupLayout'
import OAuthPanel from '../../components/OAuthPanel'

import { TextButton } from 'app-component/atom'

export class RegisterScreen extends React.Component {
  render () {
    const { newUser, updateNewUser } = this.props

    return (<PopupLayout title='Register' onPressBack={() => this.props.navigation.goBack()}>
      <Content padder>
        <View style={{ marginTop: 10, paddingLeft: 10 }}>
          <Text>Register With</Text>
        </View>
        <OAuthPanel
          onFacebookLoggedIn={this.props.handleFacebookLogin}
          onGoogleLoggedIn={this.props.handleGoogleLogin}
        />
        <View style={{
          borderBottomColor: 'gray',
          borderBottomWidth: 1,
          marginTop: 10,
          marginBottom: 0
        }} />
        <Form>
          <Item floatingLabel >
            <Label>Phone Number</Label>
            <Input
              value={newUser.get('phone')}
              onChangeText={text => updateNewUser({ phone: text })}
            />
          </Item>
          <Item floatingLabel >
            <Label>Name</Label>
            <Input
              value={newUser.get('firstName')}
              onChangeText={text => updateNewUser({ firstName: text })}
            />
          </Item>
          <Item floatingLabel >
            <Label>Email</Label>
            <Input
              value={newUser.get('email')}
              onChangeText={text => updateNewUser({ email: text })}
            />
          </Item>
          <Item floatingLabel >
            <Label>Password</Label>
            <Input secureTextEntry
              value={newUser.get('password')}
              onChangeText={text => updateNewUser({ password: text })}
            />
          </Item>
        </Form>
        <View style={styles.con}>
          <TextButton yellow full
            title='Register'
            style={styles.loginBtnCon}
            onPress={this.props.submit} />
        </View>
      </Content>
    </PopupLayout>)
  }
}

const styles = StyleSheet.create({
  container: {
    margin: '3%'
  },
  con: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginHorizontal: 15,
    marginTop: 35,
    marginBottom: 20
  },
  loginButton: {
    marginHorizontal: 10
  },
  p: {
    alignItems: 'center',
    flexDirection: 'column'
  },
  headCon: {
    marginTop: 10,
    flexDirection: 'row'
  },
  headText: {
    fontSize: 20,
    color: 'black',
    textAlign: 'left'
  }
})

RegisterScreen.propTypes = {
  registerLoading: PropTypes.bool,
  navigation: PropTypes.object,
  newUser: PropTypes.instanceOf(Map),

  submit: PropTypes.func,
  updateNewUser: PropTypes.func,
  handleFacebookLogin: PropTypes.func,
  handleGoogleLogin: PropTypes.func
}

RegisterScreen.defaultProps = {
  registerLoading: false,
  newUser: Map()
}

export default RegisterScreen
