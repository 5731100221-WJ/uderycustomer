import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { View, Image, StyleSheet, TextInput} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Text } from 'native-base';
import FooterTabs from '@footerTabs/FooterTabs.js';

export default class Profile extends Component {
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
            <Title>Profile</Title>
          </Body>
          <Right>
            <Button>
              <Text>Save</Text>
            </Button>
          </Right>
        </Header>
        <View style={styles.userImageView}>
          <Image
            style={styles.userImage}
            source={ require('@img/profilePic.jpg')}
          />
        </View>
        <View style={styles.editForm_container}>
          <Text style={styles.body_text}>Full name</Text>
          <TextInput
              style={styles.textInput}
              placeholder='Full name'
              underlineColorAndoid={'transparent'}
              // value={currentUser.get('full_name')}
              // onChangeText={text => this.set('full_name', text)}
          />
          <Text style={styles.body_text}>Phone Number</Text>
          <TextInput
              style={styles.textInput}
              placeholder='Phone Number'
              underlineColorAndoid={'transparent'}
              // value={currentUser.get('full_name')}
              // onChangeText={text => this.set('full_name', text)}
          />

        </View>
        <FooterTabs />
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
    color: 'black'
  },

});
