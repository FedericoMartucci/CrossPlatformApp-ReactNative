import React, { useState } from 'react'
import { View, Text, Image, TouchableHighlight } from 'react-native'
import { CartProduct, Product } from '../util/types';
import { styles } from '../util/styles';
import StarRating from './StarRating';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../util/types';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { updateCart } from '../redux/products';

const ProductDetails = ({ route }) => {
  const [counter, setCounter] = useState<number>(1);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const product: Product = route.params.product;
  
  const cart: CartProduct[] = useAppSelector((state) => state.products.cart);
  const dispatch = useAppDispatch();
  
  const handleAddToCart = () => {
    const existingProductIndex = cart.findIndex(item => item.product.id === product.id);

    if (existingProductIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingProductIndex] = {
        ...updatedCart[existingProductIndex],
        quantity: updatedCart[existingProductIndex].quantity + counter
      };
      dispatch(updateCart(updatedCart));
    } else {
      const updatedCart = [...cart, { product, quantity: counter }];
      dispatch(updateCart(updatedCart));
    }
    navigation.navigate("Cart");
  }

  return (
    <View style={styles.productDetailsContainer}>
      <View style={styles.imageContainer}>
        <Image style={styles.productImage} source={{uri: product.image}}/>
        <View style={styles.productPriceContainer}>
          <Text style={styles.productTitle}><Text style={styles.bold}>{product.title}</Text></Text>
          <Text style={styles.productPrice}>${product.price}</Text>
        </View>
        <View style={{alignItems: "center", justifyContent: "center", width: "100%"}}>
          <TouchableHighlight onPress={handleAddToCart} style={styles.addToCartButton} underlayColor="#77a" activeOpacity={0.7}>
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