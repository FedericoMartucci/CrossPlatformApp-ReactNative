import React from 'react'
import { ProductCardProps, RootStackParamList } from '../util/types';
import { View, Image, Text, TouchableHighlight } from 'react-native';
import { styles } from '../util/styles';

import { NavigationProp, useNavigation } from '@react-navigation/native';

const ProductCard = ({ product }: ProductCardProps) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <TouchableHighlight style={styles.productCard} onPress={() => navigation.navigate("ProductDetails", { product })} underlayColor="#eee" activeOpacity={0.7}>
      <View style={styles.product}>
        <Image source={{uri: product.image}} style={styles.image}/>
        <Text style={styles.text}>${product.price}</Text>
      </View>
    </TouchableHighlight>
  )
}

export default ProductCard