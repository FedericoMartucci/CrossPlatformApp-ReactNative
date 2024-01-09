import React, { useEffect, useState } from 'react'
import { useHttpRequestService } from '../service/service'
import { Product } from '../util/types';


export const useGetProducts = (category: string) => {
    const service = useHttpRequestService();
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);
    
    useEffect(() => {
        try {
            service.getInCategory(category).then((res) => {
                setProducts(res)
                setLoading(false);
            })
        } catch (e) {
            setError(true);
            setLoading(false);
            console.log(e);
        }
      }, [category]);
    
    return { products, loading, error };
}
