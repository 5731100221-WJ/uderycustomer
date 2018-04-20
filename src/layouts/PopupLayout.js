import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Image } from 'react-native'
import {
  Container, Header, Content, Footer, Left, Body, Right, Title,
  Text, Button, Icon
} from 'native-base'

const { brandYellow } = require('themes/variable').default,

export class PopupLayout extends React.Component {
  render () {
    return (
      <Container style={styles.container}>
        <Header style={{ backgroundColor: brandYellow }}>
          {
            this.props.onPressBack ? (
              <Left>
                <Button transparent onPress={() => this.props.onPressBack()}>
                  <Icon name='close' />
                </Button>
              </Left>
            ) : <Left />
          }
          <Body>
            { this.props.title ? <Title>{this.props.title}</Title> : <Text>Error masage </Text> }
          </Body>
          {this.props.rightPanel ? <Right>{this.props.rightPanel}</Right> : <Right />}
        </Header>
        <Content>
          {this.props.children}
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})

PopupLayout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  rightPanel: PropTypes.node,

  onPressBack: PropTypes.func
}

export default PopupLayout
