import React from "react";
import { createAppContainer, createStackNavigator } from "react-navigation";
import HomeScreen from "../screens/Home";
import QuestionOneScreen from "../screens/QuestionOne";

const AppNavigation = createStackNavigator(
  {
    Home: HomeScreen,
    QuestionOne: QuestionOneScreen,

  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(AppNavigation);
