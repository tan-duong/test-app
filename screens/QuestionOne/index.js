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
import Nav from "../../assets/images/svg/nav";
import MyFullName from "../../assets/images/svg/myFullName";

export default class HomeScreen extends PureComponent {
  state = {};
  static navigationOptions = {
    header: null
  };
  onGetStartedPress = () => {};

  render() {
    return (
      <Container style={styles.container}>
        <Content padder>
          <View>
            <Nav />
          </View>
          <View style={styles.welcomeTextContainer}>
            <Text style={styles.welcomeText}>Hello there... ?</Text>
          </View>
          <View style={styles.introTextContainer}>
            <Text style={styles.introText}>Please type in your Full Name.</Text>
          </View>
        </Content>

        <View style={styles.buttonRow}>
          <MyFullName style={{ zIndex: -1, alignSelf: "center" }} />
          <Input style={{ marginTop: -50, margin: 10 }} />
          <View style={styles.introTextContainer}>
            <Text style={styles.introText}>
              <Text style={{ fontWeight: "bold" }}>Note: </Text> Your Full Name
              Details, including your Picture will be hidden to Company/Agency
              who is going to hire you until they accept your Application.
            </Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, alignItems: 'center'}}>
            <View style={styles.buttonBackContainer}>
              <TouchableOpacity>
                <Text style={{ textAlign: "center",  width: '100%' }}>Back</Text>
              </TouchableOpacity>
            </View>
            <Button onPress={this.onNextPress} style={styles.buttonNext}>
              <Text style={styles.buttonText}>Next</Text>
            </Button>
          </View>
        </View>
      </Container>
    );
  }
}
