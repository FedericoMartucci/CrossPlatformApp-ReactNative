import React, { useState } from 'react'
import { ScrollView, StyleSheet, View, Text, Image } from 'react-native'
import { styles } from '../util/styles'
import { useGetProducts } from '../hooks/useGetProducts'
import { Product } from '../util/types'
import Products from './Products'

const Home = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
          <Products category=''/>
      </View>
    </ScrollView>
  )
}

export default Home