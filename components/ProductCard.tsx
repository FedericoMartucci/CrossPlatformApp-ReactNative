import React, { useState } from 'react'
import { useGetProducts } from '../hooks/useGetProducts';
import { ProductCardProps } from '../util/types';
import { Alert, View, Image, Text, TouchableHighlight } from 'react-native';
import { styles } from '../util/styles';

const ProductCard = ({ product }: ProductCardProps) => {

  return (
      <TouchableHighlight style={styles.productCard} onPress={() => console.log()} underlayColor="#eee" activeOpacity={0.7}>
            <View style={styles.product}>
              <Image source={{uri: product.image}} style={styles.image}/>
              <Text style={styles.text}>${product.price}</Text>
            </View>
      </TouchableHighlight>
  )
}

export default ProductCard