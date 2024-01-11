import React, { useState } from 'react'
import { View, Text, Image, Pressable, SafeAreaViewBase, SafeAreaView, TouchableHighlight } from 'react-native'
import { Product } from '../util/types';
import { styles } from '../util/styles';
import StarRating from './StarRating';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from './ProductCard';

const ProductDetails = ({ route }) => {
  const [counter, setCounter] = useState<number>(1);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const product: Product = route.params.product;
  return (
    <View style={styles.productDetailsContainer}>
      <View style={styles.imageContainer}>
        <Image style={styles.productImage} source={{uri: product.image}}/>
        <View style={styles.productPriceContainer}>
          <Text style={styles.productTitle}><Text style={styles.bold}>{product.title}</Text></Text>
          <Text style={styles.productPrice}>${product.price}</Text>
        </View>
        <View style={{alignItems: "center", justifyContent: "center", width: "100%"}}>
          <TouchableHighlight onPress={() => navigation.navigate("Cart", {product, counter})} style={styles.addToCartButton} underlayColor="#77a" activeOpacity={0.7}>
            <Text style={styles.addToCart}><Text style={styles.bold}>Add to cart</Text></Text>
          </TouchableHighlight>
          <View style={{flexDirection: "row", width: "30%", justifyContent: "center"}}>
            <TouchableHighlight onPress={() => counter > 1 && setCounter(counter - 1)} style={styles.decrementCounter} underlayColor="#77a" activeOpacity={0.7}>
              <Text style={styles.counterText}>–</Text>
            </TouchableHighlight>
            <View  style={styles.counter}>
              <Text style={styles.counterText}>{counter}</Text>
            </View>
            <TouchableHighlight  onPress={() => setCounter(counter + 1)} style={styles.incrementCounter} underlayColor="#77a" activeOpacity={0.7}>
              <Text style={styles.counterText}>+</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
      <View style={styles.productPriceContainer}>
        <Text style={styles.productDescriptionTitle}>Description</Text>
        <View style={styles.productRatingContainer}>
          <View style={{flexDirection: "row"}}>
            <StarRating stars={Math.round(product.rating.rate)}></StarRating>
          </View>
          <Text style={styles.productRating}> {product.rating.rate}/5</Text>
        </View>
      </View>
      <Text style={styles.productDescription}>{product.description}</Text>
    </View>
  )
}

export default ProductDetails