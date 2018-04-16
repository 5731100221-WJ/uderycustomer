import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text } from 'react-native'

const { brandGreen, brandBlue, brandRed, brandYellow, brandWhite } = require('@themes/variable').default

export class ModifiedText extends React.Component {
  render () {
    const style = [
      styles.baseText,
      {
        color: (this.props.green && brandGreen) ||
          (this.props.blue && brandBlue) ||
          (this.props.red && brandRed) ||
          (this.props.yellow && brandYellow) ||
          (this.props.white && brandWhite),
        fontFamily: (this.props.bold && 'supermarket') ||
          'supermarket'
      },
      this.props.style
    ]

    return (
      <Text style={style}>
        {this.props.children}
      </Text>
    )
  }
}

const styles = StyleSheet.create({
  baseText: {
    fontSize: 20,
    //textAlign: 'center'
  }
})

ModifiedText.propTypes = {
  style: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.array,
    PropTypes.object
  ]),
  green: PropTypes.bool,
  blue: PropTypes.bool,
  red: PropTypes.bool,
  yellow: PropTypes.bool,
  white: PropTypes.bool,

  bold: PropTypes.bool,

  children: PropTypes.node
}

export default ModifiedText
