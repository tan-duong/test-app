import React, { PureComponent } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import {
  Container,
  Content,
  List,
  ListItem,
  Left,
  Button,
  Item,
  Input,
  Text,
  CheckBox,
  Body
} from "native-base";
import styles from "./style";

export default class HomeScreen extends PureComponent {
  state = {};

  onGetStartedPress = () => {
    this.props.navigation.navigate('QuestionOne')
  };

  static navigationOptions = {
    header: null,
  }

  render() {
    return (
      <Container style={styles.container}>
        <Content padder>
          <View style={styles.welcomeTextContainer}>
            <Text style={styles.welcomeText}>Welcome to{'\n'}GetHired.ai</Text>
          </View>
          <View style={styles.introTextContainer}>
            <Text style={styles.introText}>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </Text>
          </View>
          
        </Content>
        <View style={styles.buttonContainer}>
            <Button
              onPress={this.onGetStartedPress}
              style={styles.buttonGetStarted}
            >
              <Text style={styles.buttonText}>Let’s get started!</Text>
            </Button>
            <View style={styles.buttonSignUpContainer}>
              <TouchableOpacity>
                <Text style={styles.buttonSignUpText}>
                  I already have an Account.
                </Text>
              </TouchableOpacity>
            </View>
          </View>
      </Container>
    );
  }
}
