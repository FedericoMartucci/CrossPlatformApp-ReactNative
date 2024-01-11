import React, { useEffect, useState } from 'react'
import { useHttpRequestService } from '../service/service'
import { Product } from '../util/types';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { updateFeed } from '../redux/products';


export const useGetProducts = () => {
    const service = useHttpRequestService();
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);
    const category = useAppSelector((state) => state.products.category);

    const dispatch = useAppDispatch();

    useEffect(() => {
        try {
            service.getInCategory(category).then((res) => {
                setProducts(res)
                dispatch(updateFeed(res));
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
