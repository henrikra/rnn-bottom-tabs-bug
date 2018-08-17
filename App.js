import React, { Component } from "react";
import { StyleSheet, View, Button } from "react-native";
import { Navigation } from "react-native-navigation";

import List from "./List";

export default class App extends Component {
  pushScreen = () => {
    Navigation.push(this.props.componentId, {
      component: {
        name: "list",
        options: {
          bottomTabs: { visible: false, drawBehind: true }
        }
      }
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="Push new" onPress={this.pushScreen} />
        <List />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red"
  }
});
