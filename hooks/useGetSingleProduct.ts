import { useEffect, useState } from "react";
import { useHttpRequestService } from "../service/service";
import { Product } from "../util/types";

const useGetSingleProduct = (id: number) => {
    const service = useHttpRequestService();
    const [product, setProduct] = useState<Product>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);
    
    useEffect(() => {
        try {
            service.getSingleProduct(id).then((res) => {
                setProduct(res)
                setLoading(false);
            })
        } catch (e) {
            setError(true);
            setLoading(false);
            console.log(e);
        }
    }, [id]);
    
    return { product, loading, error };
}