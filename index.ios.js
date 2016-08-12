/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TouchableHighlight,
  Text,
  NavigationExperimental,
  View,
  ScrollView
} from 'react-native';
import SideMenu from 'react-native-side-menu';
import Menu from './components/Menu';

const {
  Header: NavigationHeader,
  CardStack: NavigationCardStack
} = NavigationExperimental;

class menuTest extends Component {

  constructor(props) {
    super(props);

    console.log('entrou');

    this.state = {
      isOpen: false,
      key: 'home'
    }
    this.onMenuItemSelected = this.onMenuItemSelected.bind(this);
  }

  onMenuItemSelected(key) {
    console.log(key);
    this.setState({
      isOpen: false,
      key: key
    })
  }

  render() {
    return (
      <SideMenu
        isOpen={this.state.isOpen}
        disableGestures={false}
        onChange={(isOpen) => this.setOpen(isOpen)}
        menu={<Menu onMenuItemSelected={this.onMenuItemSelected} />}
      >
        <NavigationCardStack
          onNavigate={ () => {} }
          direction={'horizontal'}
          navigationState={{ key: this.state.key, index: 0, routes: [{ key: this.state.key, title: 'My Initial Scene' }] }}
          renderScene={this._renderScene.bind(this)}
          renderOverlay={this._renderHeader.bind(this)}
        />
      </SideMenu>
    );
  }

  _renderRoute (key) {
    if (key === 'home') {
      return <View style={styles.container}>
          <Text style={styles.title} >Hello From Home</Text>
          <Text style={styles.welcome}>
            Welcome to React Native! Page 1
          </Text>
           <TouchableHighlight onPress={this.toggleMenu.bind(this)}>
            <Text style={styles.instructions}>
              Open Menu
            </Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => {this.onMenuItemSelected('home3') }}>
            <Text style={styles.instructions}>
              Open Page 3
            </Text>
          </TouchableHighlight>

      </View>
    }
    if (key === 'home2') {
      return <View style={styles.container}>
          <Text style={styles.title} >Hello From Home</Text>
          <Text style={styles.welcome}>
            Welcome to React Native! Page 2
          </Text>
           <TouchableHighlight onPress={this.toggleMenu.bind(this)}>
            <Text style={styles.instructions}>
              Open Menu
            </Text>
          </TouchableHighlight>
      </View>
    }
    if (key === 'home3') {
      return <View style={styles.container}>
          <Text style={styles.title} >Hello From Home</Text>
          <Text style={styles.welcome}>
            Welcome to React Native! Page 3
          </Text>
           <TouchableHighlight onPress={this.toggleMenu.bind(this)}>
            <Text style={styles.instructions}>
              Open Menu
            </Text>
          </TouchableHighlight>
      </View>
    }
    if (key === 'home4') {
      return <View style={styles.container}>
          <Text style={styles.title} >Hello From Home</Text>
          <Text style={styles.welcome}>
            Welcome to React Native! Page 4
          </Text>
           <TouchableHighlight onPress={this.toggleMenu.bind(this)}>
            <Text style={styles.instructions}>
              Open Menu
            </Text>
          </TouchableHighlight>
      </View>
    }
  }

  _renderScene(props) {
    const ComponentToRender = this._renderRoute(props.scene.route.key);
    return (
      <ScrollView style={styles.scrollView}>
        {ComponentToRender}
      </ScrollView>
    );
  }

  _renderHeader(props) {
    return (
      <NavigationHeader
      {...props}
      renderTitleComponent={this._renderTitleComponent.bind(this)}
      />
    );
  }

  _renderTitleComponent(props) {
    return (
      <NavigationHeader.Title>
        Mussum Ipsum
      </NavigationHeader.Title>
    );
  }


  toggleMenu() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  setOpen(isOpen) {
    this.setState({
      isOpen: isOpen
    })
  }

}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#F5FCFF',
    flex: 1
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 40,
    marginTop: 200,
    textAlign: 'center'
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

AppRegistry.registerComponent('menuTest', () => menuTest);
