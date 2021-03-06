import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  _View,
  ViewComponent,
} from "react-native";

import styles from "./styles";

import StyledButton from "../styledButton";

const CarItem = (props) => {
  const { name, tagline, image, taglineCTA } = props.car;

  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.image} />

      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {tagline} <Text style={styles.taglineCTA}>{taglineCTA}</Text>
        </Text>
      </View>

      <View style={styles.buttonsContainer}>
        <StyledButton
          type="primary"
          content={"Custom Order"}
          onPress={() => {
            console.warn("Custom Button Was Pressed");
          }}
        />

        <StyledButton
          type="sencondary"
          content={"Existing Inventory"}
          onPress={() => {
            console.warn("Existing Inventory Was Pressed");
          }}
        />
      </View>
    </View>
  );
};

export default CarItem;
