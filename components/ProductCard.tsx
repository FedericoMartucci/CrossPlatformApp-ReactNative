import React, { useState } from 'react'
import { useGetProducts } from '../hooks/useGetProducts';
import { ProductCardProps } from '../util/types';
import { View, Image, Text } from 'react-native';
import { styles } from '../util/styles';

const ProductCard = ({ product }: ProductCardProps) => {

  return (
    <View style={styles.product}>
        <Image source={{uri: product.image}} style={styles.image}/>
        <Text>${product.price}</Text>
    </View>
  )
}

export default ProductCard