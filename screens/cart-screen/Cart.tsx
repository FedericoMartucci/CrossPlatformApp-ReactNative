import React from 'react'
import { Text, TouchableHighlight, View, Image, FlatList } from 'react-native'
import { useAppSelector } from '../../redux/hooks';
import { CartProduct } from '../../util/types';
import { styles } from '../../util/styles';
import CartItem from '../../components/CartItem'

const Cart = () => {
  const cart: CartProduct[] = useAppSelector((state) => state.products.cart);

  const totalItems: number = cart.reduce((state: number, cartItem: CartProduct) => {
    state += cartItem.quantity;
    return state;
  }, 0);

  const totalBudget: number = cart.reduce((state: number, cartItem: CartProduct) => {
    state += cartItem.product.price * cartItem.quantity;
    return state;
  }, 0);

const handleCheckout = () => {/*TODO: implementate checkout functionality*/};

  return (
    <View style={{flex: 1, backgroundColor: "#334"}}>
      <View style={styles.header}>
          <Text style={styles.headerText}><Text style={styles.bold}>Cart</Text></Text>
      </View>
      {
        totalItems? (
          <View>
            <View>
              <View style={{margin: 16}}>
                <Text style={styles.counterText}><Text style={styles.bold}>{totalItems} items selected</Text></Text>
              </View>
              <FlatList
              data={cart}
              renderItem={({item}) => (<CartItem cartItem={item}/>)}
              />
            </View>
          
            <View>
              <View style={{ flexDirection: "row", width: "90%", justifyContent: "space-around"}}>
                <Text style={styles.counterText}>Total:</Text>
                <Text style={styles.counterText}>${totalBudget}</Text>
              </View>
              <View>
                <TouchableHighlight onPress={handleCheckout} style={styles.addToCartButton} underlayColor="#77a" activeOpacity={0.7}>
                  <Text style={styles.addToCart}><Text style={styles.bold}>Checkout</Text></Text>
                </TouchableHighlight>
              </View>
            </View>
          </View>
        ) : (
          <View style={{flex: 1, marginTop: 48, alignItems: "center", justifyContent: "center", gap: 32}}>
            <Text style={styles.emptyCart}><Text style={styles.bold}>Your cart is actually empty!</Text></Text>
            <Image style={styles.emptyCartImage} source={require("../../assets/empty-cart.png")}/>
          </View>
        )
      }
    </View>
  )
}

export default Cart