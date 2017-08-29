/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { AppRegistry, StyleSheet, Button, View } from "react-native";
import Scheduler from "react-native-schedule-sms";

export default class SchduleSMSDemo extends Component {
  constructor(props) {
    super(props);
    this._pressSendMessage = this._pressSendMessage.bind(this);
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={this._pressSendMessage}
          title="Send Message"
          color="#841584"
        />
      </View>
    );
  }

  _pressSendMessage() {
    console.log("Hello");
    Scheduler.sendMessage("9782145901", "Hey", "8/31/2017, 2:00:00 PM");
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});

AppRegistry.registerComponent("SchduleSMSDemo", () => SchduleSMSDemo);
