import React from "react";
import { Dimensions, FlatList, Text, View } from "react-native";
import styles from "./style";
import cars from "./cars";
import CarItem from "../Caritem";

const carList = (props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        renderItem={({ item }) => <CarItem car={item} />}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        snapToInterval={Dimensions.get("window").height}
      />
    </View>
  );
};

export default carList;
