import React, { useCallback, useState } from 'react'
import { ScrollView, View, Text, RefreshControl,
         StatusBar, NativeSyntheticEvent, NativeScrollEvent } from 'react-native'
import { styles } from '../../util/styles'
import Products from '../../components/Products'
import CartButton from '../../components/CartButton'
import { useAppSelector } from '../../redux/hooks'
import { CartProduct } from '../../util/types'

const Home = () => {
  const [hidden, setHidden] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const cart: CartProduct[] = useAppSelector((state) => state.products.cart);
  const cartItems: number = cart.length;
  
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 500);
  }, []);

  return (
    <ScrollView
    style={styles.scrollView}
    scrollEventThrottle={16}
    scrollsToTop={true}
    onScroll={(e: NativeSyntheticEvent<NativeScrollEvent>) => setHidden(e.nativeEvent.contentOffset.y !== 0)}
    refreshControl={
      <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
    }>
      <StatusBar
      animated={true}
      backgroundColor="#fff"
      barStyle="dark-content"
      showHideTransition={"fade"}
      hidden={hidden}/>
      <View style={styles.header}>
        <Text style={styles.headerText}>Our <Text style={styles.bold}>products</Text></Text>
        <CartButton cartItems={cartItems} style={styles.searchButton}/>
      </View>
      <View style={styles.container}>
        <Products/>
      </View>
    </ScrollView>
  )
}

export default Home