import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    scrollView: {
      backgroundColor: "#fff",
    },
    header: {
      flex: 1,
      zIndex: 1,
      width:"100%",
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 8,
      },
      shadowOpacity: 0.5,
      shadowRadius: 4,
      backgroundColor: "#fff",
      paddingTop: 64,
      paddingBottom: 16,
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
    },
    headerText: {
      fontFamily: "Avenir",
      fontWeight: "400",
      fontSize: 32,
    },
    bold: {
      fontWeight: "700",
    },
    searchButton: {
      justifyContent: "center",
      alignItems: "center",
      width: 52,
      height: 36,
      borderWidth: 1,
      borderColor: "#000",
      borderRadius: 64,
    },
    searchIcon: {
      width: 24,
      height: 24,
    },
    container: {
      flex: 1,
      backgroundColor: "#667",
      paddingVertical: 64,
    },
    products: {
      flex: 1,
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
      gap: 32,
    },
    productCard: {
      borderRadius: 16,
      backgroundColor: "#fff",
      justifyContent: "center",
      alignItems: "center",
      width: "40%",
      height: 200,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowOpacity: 0.8,
      shadowRadius: 8,
    },
    product: {
      justifyContent: "center",
      alignItems: "center",
    },
    image: {
      width: 100,
      height: 100,
      marginBottom: 16,
    },
    text: {
      fontFamily: "Avenir",
      fontSize: 24
    },
    loader: {
      position: "absolute",
      width: Dimensions.get("window").width,
      height: 700,
      backgroundColor: "#fff",
      justifyContent: "center",
      alignItems: "center",
    }
  });
