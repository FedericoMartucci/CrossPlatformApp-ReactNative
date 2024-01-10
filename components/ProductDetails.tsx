import React from 'react'
import { View, Text, Image, Pressable } from 'react-native'
import { Product } from '../util/types';
import { styles } from '../util/styles';

const ProductDetails = ({ route }) => {
  const product: Product = route.params.product;
  return (
    <View style={{flex: 1, backgroundColor: "#fff"}}>
      <Image style={styles.image} source={{uri: product.image}}/>
      <Text style={styles.text}>${product.price}</Text>
      <Text>{product.title}</Text>
      <Text style={styles.headerText}><Text style={styles.bold}>Add to cart</Text></Text>
      <Text>{product.rating.count} reviews</Text>
      <Text>{product.rating.rate} star average</Text>
      <Text style={styles.headerText}>Description</Text>
      <Text>{product.description}</Text>
    </View>
  )
}

export default ProductDetails