import React, { useCallback, useState } from 'react'
import { ScrollView, TouchableHighlight, View, Text, Image, RefreshControl,
         StatusBar, NativeSyntheticEvent, NativeScrollEvent } from 'react-native'
import { styles } from '../util/styles'
import Products from './Products'
import { useAppDispatch } from '../redux/hooks'

const Home = ({ navigation }) => {
  const [hidden, setHidden] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const dispatch = useAppDispatch();
  
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
          <TouchableHighlight onPress={() => navigation.navigate("Cart")} style={styles.searchButton} underlayColor="#eef" activeOpacity={0.7}>
              <Image source={require("../assets/cart.png")} style={styles.searchIcon}></Image>
          </TouchableHighlight>
        </View>
        <View style={styles.container}>
          <Products/>
        </View>
    </ScrollView>
  )
}

export default Home