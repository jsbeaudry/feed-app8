import React from "react";
import { View, Text, Platform } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

import App8 from "./app6/feed3";

import { Ionicons } from "@expo/vector-icons";

const A8 = createStackNavigator({
  home: {
    screen: App8,
    navigationOptions: ({ navigation }) => ({
      title: "",
      header: null,
      gesturesEnabled: false
    })
  }
});

export default createAppContainer(A8);
