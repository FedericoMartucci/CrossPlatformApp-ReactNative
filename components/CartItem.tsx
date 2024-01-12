import React from 'react'
import { View, Text, Image, TouchableHighlight } from 'react-native'
import { styles } from '../util/styles'
import { CartItemProps, CartProduct } from '../util/types'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { updateCart } from '../redux/products'

const CartItem = ({ cartItem }: CartItemProps) => {
    const cart: CartProduct[] = useAppSelector((state) => state.products.cart);
    const dispatch = useAppDispatch();

    const handleIncrementQuantity = () => {
        const existingProductIndex = cart.findIndex(item => item.product.id === cartItem.product.id);
        const updatedCart = [...cart];

        updatedCart[existingProductIndex] = {
            ...updatedCart[existingProductIndex],
            quantity: updatedCart[existingProductIndex].quantity + 1
        };
        dispatch(updateCart(updatedCart));
    }

    const handleDecrementQuantity = () => {
        const existingProductIndex = cart.findIndex(item => item.product.id === cartItem.product.id);
        const updatedCart = [...cart];
        if(updatedCart[existingProductIndex].quantity !== 1){
            updatedCart[existingProductIndex] = {
                ...updatedCart[existingProductIndex],
                quantity: updatedCart[existingProductIndex].quantity - 1
            };
            dispatch(updateCart(updatedCart));
        }
    }

    const handleRemoveItem = () => {
        const existingProductIndex = cart.findIndex(item => item.product.id === cartItem.product.id);
        const updatedCart = [...cart];

        updatedCart.splice(existingProductIndex, 1);
        dispatch(updateCart(updatedCart));
    }

    return (
        <View style={styles.cartItem}>
            <Image style={{width: 100, height: 100}} source={{uri: cartItem.product.image}}/>
            <View style={{width: "50%", height: 100,justifyContent: "space-between", marginLeft: 8}}>
                <Text style={styles.cartItemTitle}><Text style={styles.bold}>{cartItem.product.title}</Text></Text>
                <Text style={styles.cartItemDescription}>from {cartItem.product.category} category</Text>
                <Text style={styles.text}><Text style={styles.bold}>${cartItem.product.price * cartItem.quantity}</Text></Text>
            </View>
            <View style={{height: 120,alignItems: "flex-end", justifyContent: "space-between"}}>
                <TouchableHighlight style={styles.removeCartItem} onPress={handleRemoveItem} underlayColor="#77a" activeOpacity={0.7}>
                    <Image style={styles.crossIcon} source={require("../assets/cross.png")}/>
                </TouchableHighlight>
                <View style={{flexDirection: "row"}}>
                    <TouchableHighlight onPress={handleDecrementQuantity} style={styles.decrementCartCounter} underlayColor="#77a" activeOpacity={0.7}>
                        <Text style={styles.quantity}>–</Text>
                    </TouchableHighlight>
                    <View  style={styles.cartCounter}>
                        <Text style={styles.quantity}>{cartItem.quantity}</Text>
                    </View>
                    <TouchableHighlight onPress={handleIncrementQuantity} style={styles.incrementCartCounter} underlayColor="#77a" activeOpacity={0.7}>
                        <Text style={styles.quantity}>+</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </View>
    )
}

export default CartItem