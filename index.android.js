/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  Icon,
  TouchableOpacity,
} from 'react-native';

import SearchPage from './SearchPage';
import SearchResults from './SearchResults';

class PropertyFinderApp extends React.Component {
  renderScene(route, navigator) {
    console.log('renderScene');
    /*return (
        <SearchPage route={route} navigator={navigator} />
    );*/

    switch (route.id) {
      case 'PageOne':
        return (<SearchPage route={route} navigator={ navigator } title={ "PageOne" } />);
      case 'PageTwo':
        return (<SearchResults route={route} navigator={ navigator } leftButton={ "Back" } title={"PageTwo" } />);
    }
  }

  static NavigationBarRouteMapper = props => ({
      LeftButton: function( route, navigator, index, navState ){
        return(
          <TouchableOpacity style={{flex: 1, justifyContent: 'center'}}>
            <Text>Left</Text>
          </TouchableOpacity>
        );
      },
      Title: function( route, navigator, index, navState ){
        return(
          <Text>{ route.title }</Text>
        )
      },
      RightButton: function( route, navigator, index, navState ){
        return(
          // <Text>{ route.rightButton }</Text>
          <TouchableOpacity style={{flex: 1, justifyContent: 'center'}}>
            <Text>Right</Text>
          </TouchableOpacity>
        )
      },
    })

  render() {
    return (
      <Navigator
        initialRoute={{id: 'PageOne', title: 'PageOne'}}
        renderScene={this.renderScene}
        navigationBar={
          <Navigator.NavigationBar
            routeMapper={PropertyFinderApp.NavigationBarRouteMapper(this.props)}
            style={styles.navbar}
          />
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  },
});

AppRegistry.registerComponent('PropertyFinder', () => PropertyFinderApp);
