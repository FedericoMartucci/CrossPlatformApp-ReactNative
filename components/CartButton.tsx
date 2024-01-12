import { NavigationProp, useNavigation } from '@react-navigation/native'
import React from 'react'
import { TouchableHighlight, View, Image, Text } from 'react-native'
import { styles } from '../util/styles';
import { CartButtonProps, RootStackParamList } from '../util/types';

const CartButton = ({ cartItems, style }: CartButtonProps) => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    return (
        <TouchableHighlight onPress={() => navigation.navigate("Cart")} style={style} underlayColor="#eef" activeOpacity={0.7}>
            <View>
                {cartItems !== 0 && (
                    <View style={{ zIndex: 1, marginLeft: 16, marginBottom: 8, alignItems: "center", justifyContent: "center", position: "absolute", backgroundColor: "#f00", borderRadius: 64, width: 16, height: 16 }}>
                        <Text style={{ textAlign: "right", color: "#fff", fontSize: 10 }}>{cartItems}</Text>
                    </View>
                )}
                <Image source={require("../assets/cart.png")} style={styles.searchIcon}></Image>
            </View>
        </TouchableHighlight>
    );
}

export default CartButton