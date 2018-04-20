import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet, Image } from 'react-native'
import { Constants } from 'expo'

import { TextButton } from 'components/atom'

export default class FirstWelcomeScreen extends Component {
  componentDidMount () {
    this.props.clearAuthentication()
    this.props.clearRegister()
  }

  render () {
    const { navigation } = this.props

    return (
      <View style={styles.container}>
        <Image
          source={require('assets/images/gettaxi_logo.png')}
          style={styles.logo}
        />

        <View style={styles.buttonContainer}>
          <TextButton yellow full
            title='ล็อกอิน'
            onPress={() => navigation.navigate('LoginScreen')} />
          <TextButton green transparent light small full
            title='Register' style={{ marginTop: '5%' }}
            onPress={() => navigation.navigate('RegisterScreen')} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1'
  },
  buttonContainer: {
    marginTop: '15%',
    alignItems: 'center',
    width: 270
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e'
  },
  space: {
    width: 100,
    height: 100,
    backgroundColor: 'black'
  },
  logo: {
    marginTop: '15%',
    width: '70%',
    height: '50%',
    resizeMode: 'contain'
  },
  buttonLogin: {
    marginTop: 0,
    width: '20%',
    height: '10%',
    resizeMode: 'contain'
  },
  registerButon: {
    marginTop: '5%',
    textAlign: 'center',
    fontSize: 20,
    color: '#025339'
  }
})

FirstWelcomeScreen.propTypes = {
  navigation: PropTypes.object,
  clearRegister: PropTypes.func,
  clearAuthentication: PropTypes.func
}
