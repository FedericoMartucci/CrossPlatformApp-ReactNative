import React from 'react'
import { Text, TouchableHighlight, View, Image, FlatList } from 'react-native'
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { CartProduct, Product } from '../util/types';
import { styles } from '../util/styles';
import CartItem from './CartItem'

const Cart = () => {
  const cart: CartProduct[] = useAppSelector((state) => state.products.cart);
  const totalItems: number = cart.reduce((state: number, cartItem: CartProduct) => {
    state += cartItem.quantity;
    return state;
  }, 0)
  const dispatch = useAppDispatch();
  return (
    <View>
      <View style={styles.header}>
          <Text style={styles.headerText}><Text style={styles.bold}>Cart</Text></Text>
      </View>
      <View style={{margin: 16}}>
        <Text style={styles.headerText}><Text style={styles.bold}>{totalItems} items selected</Text></Text>
      </View>
      <FlatList
      data={cart}
      renderItem={({item}) => (<CartItem cartItem={item}/>)}
      />
    </View>
  )
  
}

export default Cart