import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, TouchableHighlight } from 'react-native';

export default class Menu extends Component {
    render() {
        return (
            <ScrollView style={ styles.scrollView }>
                <TouchableHighlight onPress={() => {this.props.onMenuItemSelected('home')}}>
                    <Text>Página 1</Text>
                </TouchableHighlight>

                <TouchableHighlight onPress={() => {this.props.onMenuItemSelected('home2')}}>
                    <Text>Página 2</Text>
                </TouchableHighlight>

                <TouchableHighlight onPress={() => {this.props.onMenuItemSelected('home3')}}>
                    <Text>Página 3</Text>
                </TouchableHighlight>

                <TouchableHighlight onPress={() => {this.props.onMenuItemSelected('home4')}}>
                    <Text>Página 4</Text>
                </TouchableHighlight>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#ccccFF',
    flex: 1,
    marginTop: 200,
  }
});
