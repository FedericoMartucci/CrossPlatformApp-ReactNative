import React from 'react'
import { View, Text, Image } from 'react-native'
import { styles } from '../util/styles'
import { CartItemProps } from '../util/types'

const CartItem = ({ cartItem }: CartItemProps) => {
  return (
    <View style={{flexDirection: "row"}}>
        <Image style={styles.image} source={{uri: cartItem.product.image}}/>
        <View>
            <Text style={styles.text}><Text style={styles.bold}>{cartItem.product.title}</Text></Text>
            <Text>from {cartItem.product.category} category</Text>
            <Text><Text style={styles.bold}>${cartItem.product.price}</Text></Text>
        </View>
        <View></View>
    </View>
  )
}

export default CartItem