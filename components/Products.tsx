import React from 'react'
import { useGetProducts } from '../hooks/useGetProducts';
import { Product } from '../util/types';
import { ActivityIndicator, View } from 'react-native';
import ProductCard from './ProductCard';
import { styles } from '../util/styles';

const Products = () => {
  const { products, loading } = useGetProducts();
  
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