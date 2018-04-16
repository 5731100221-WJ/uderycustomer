/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import {
  Platform,
  StyleSheet
} from 'react-native';
import StoreList from './src/screen/authorize/storeList/StoreList';
import Profile from './src/screen/authorize/profile/Profile';
import Favorite from './src/screen/authorize/favorite/Favorite';
import OrderList from './src/screen/authorize/orderList/OrderList';
import Store from './src/screen/authorize/storeList/store/Store';
import MenuDetails from './src/screen/authorize/storeList/store/MenuDetails';

console.disableYellowBox = true;
type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Router >
        <Scene hideNavBar={true} key="root">
          <Scene key="storeList" component={StoreList} title="StoreList" />
          <Scene key="orderList" component={OrderList} title="OrderList" />
          <Scene key="store" component={Store} title="Store" />
          <Scene key="menuDetails" component={MenuDetails} title="MenuDetails" />
          <Scene key="profile" component={Profile} title="Profile" />
          <Scene key="favorite" component={Favorite} title="Favorite" />

        </Scene>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
