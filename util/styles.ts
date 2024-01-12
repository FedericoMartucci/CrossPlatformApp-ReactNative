import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    scrollView: {
      backgroundColor: "#fff",
    },
    header: {
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
      color: "#000",
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
    cartButton: {
      backgroundColor: "#fff",
      marginTop: 64,
      zIndex: 1,
      position: "absolute",
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
      backgroundColor: "#334",
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
    productDetailsContainer: {
      flex: 1,
      backgroundColor: "#334",
    },
    productImage: {
      width: 300,
      height: 300,
      marginBottom: 16,
    },
    imageContainer: {
      borderBottomRightRadius: 9998,
      borderBottomLeftRadius: 9998,
      backgroundColor: "#fff",
      width: "100%",
      height: 600,
      alignItems: "center",
      shadowOffset: {
        width: 0,
        height: 16,
      },
      shadowOpacity: 0.7,
      shadowRadius: 8,
      paddingTop: 64,
      marginBottom: 16,
    },
    productTitle: {
      fontFamily: "Avenir",
      fontSize: 16,
      textAlign: "justify",
      width: "70%"
    },
    productPrice: {
      fontFamily: "Avenir",
      fontSize: 20,
      textAlign: "right",
      width: "20%",
    },
    productPriceContainer: {
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingHorizontal: 32
    },
    addToCart: {
      fontFamily: "Avenir",
      fontWeight: "400",
      fontSize: 24,
      color: "#fff",
      padding: 8
    },
    addToCartButton: {
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowOpacity: 0.7,
      shadowRadius: 16,
      shadowColor: "#337",
      margin: 16,
      backgroundColor: "#669",
      borderRadius: 999,
      alignItems: "center"
    },
    productDescriptionTitle: {
      color: "#fff",
      fontFamily: "Avenir",
      fontSize: 32,
      fontWeight: "500"
    },
    productDescription: {
      color: "#fff",
      fontFamily: "Avenir",
      fontSize: 16,
      textAlign: "justify",
      paddingHorizontal: 56,
      paddingVertical: 16
    },
    productRating: {
      color: "#fff",
      fontFamily: "Avenir",
      fontSize: 16,
    },
    productStars: {
      color: "#fff",
      fontFamily: "Avenir",
      fontSize: 16,
    },
    productRatingContainer: {
      alignItems: "center",
      justifyContent: "center",
    },
    starImage: {
      width: 16,
      height: 16,
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
    },
    decrementCounter: {
      backgroundColor: "#447",
      paddingHorizontal: 16,
      borderBottomLeftRadius: 64,
      borderTopLeftRadius: 64,
      fontFamily: "Avenir",
      justifyContent: "center"
    },
    incrementCounter: {
      backgroundColor: "#447",
      paddingHorizontal: 16,
      borderBottomRightRadius: 64,
      borderTopRightRadius: 64,
      fontFamily: "Avenir",
      justifyContent: "center"
    },
    counter: {
      backgroundColor: "#669",
      paddingHorizontal: 16,
      borderRightWidth: 1,
      borderLeftWidth: 1,
      fontFamily: "Avenir",
      fontSize: 24
    },
    counterText: {
      fontFamily: "Avenir",
      fontSize: 24,
      color: "#fff",
      fontWeight: "700"
    },
    cartItem: {
      borderRadius: 32,
      flexDirection: "row",
      backgroundColor: "#fff",
      margin: 16,
      padding: 16,
      shadowOffset: {
        width: 0,
        height: 0,
      },
      justifyContent: "space-between",
      alignItems: "center",
      shadowColor: "#000",
      shadowOpacity: 0.7,
      shadowRadius: 8,
    },
    removeCartItem: {
      backgroundColor: "#669",
      justifyContent: "center",
      alignItems: "center",
      width: 32,
      height: 32,
      borderWidth: 1,
      borderColor: "#000",
      borderRadius: 64,
    },
    quantity: {
      fontFamily: "Avenir",
      fontSize: 16,
      color: "#fff",
      fontWeight: "700"
    },
    decrementCartCounter: {
      backgroundColor: "#447",
      paddingHorizontal: 8,
      borderBottomLeftRadius: 64,
      borderTopLeftRadius: 64,
      fontFamily: "Avenir",
      justifyContent: "center"
    },
    incrementCartCounter: {
      backgroundColor: "#447",
      paddingHorizontal: 8,
      borderBottomRightRadius: 64,
      borderTopRightRadius: 64,
      fontFamily: "Avenir",
      justifyContent: "center"
    },
    cartCounter: {
      backgroundColor: "#669",
      paddingHorizontal: 8,
      borderRightWidth: 1,
      borderLeftWidth: 1,
      fontFamily: "Avenir",
      fontSize: 24
    },
    crossIcon: {
      width: 16,
      height: 16,
    },
    cartItemTitle: {
      fontFamily: "Avenir",
      fontSize: 14,
    },
    cartItemDescription: {
      color: "#888",
      fontFamily: "Avenir",
      fontSize: 12,
    },
    emptyCart: {
      fontFamily: "Avenir",
      fontSize: 32,
      color: "#fff",
      fontWeight: "700",
      shadowOffset: {
        width: 2,
        height: 2,
      },
      shadowRadius: 2,
      shadowOpacity: 1,
      shadowColor: "#001"
    },
    emptyCartImage: {
      width: 450,
      height: 400,
      shadowRadius: 8,
      shadowOpacity: 0.7,
      shadowColor: "#aab"
    },
  });
