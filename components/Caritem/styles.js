import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  carContainer: {
    width: "100%",
    height: Dimensions.get("window").height,
  },
  titles: {
    marginTop: "30%",
    width: "100%",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "500",
  },
  taglineCTA: {
    textDecorationLine: "underline",
  },
  subtitle: {
    fontSize: 16,
    color: "#5c5e62",
  },

  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
    flex: 1,
  },

  buttonsContainer: {
    width: "100%",
    position: "absolute",
    bottom: 0,
  },
});

export default styles;
