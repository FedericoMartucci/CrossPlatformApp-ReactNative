import React, { useState } from 'react'
import { useGetProducts } from '../hooks/useGetProducts';
import { Product, ProductsProps } from '../util/types';
import { ActivityIndicator, View } from 'react-native';
import ProductCard from './ProductCard';
import { styles } from '../util/styles';

const Products = ({ category = "" }: ProductsProps) => {
    const { products, loading, error } = useGetProducts(category);
  return  loading? (
    <View style={styles.loader}>
      <ActivityIndicator size={"large"}/>
    </View>
  ) : (
    <View style={styles.products}>
      {
          products.map((product: Product) => (<ProductCard key={product.id} product={product} />))
      }
    </View>
  )
}

export default Products