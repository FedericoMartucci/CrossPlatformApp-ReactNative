import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#bbb",
    },
    products: {
      flex: 1,
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
      gap: 16,
    },
    product: {
      borderRadius: 8,
      backgroundColor: "#fff",
      justifyContent: "center",
      alignItems: "center",
      width: "40%",
      height: 200,
    },
    image: {
      width: 100,
      height: 100,
      marginBottom: 16,
    }
  });
