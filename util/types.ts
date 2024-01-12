export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: Rating;
}

export interface CartProduct {
    product: Product;
    quantity: number;
}

export interface Rating {
    rate: number;
    count: number;
}

export interface ProductsProps {
    category: string;
}

export interface ProductCardProps {
    product: Product;
}

export interface CartItemProps {
    cartItem: CartProduct;
}

export interface CartButtonProps {
    cartItems: number;
    style: any;
}

export type RootStackParamList = {
    ProductDetails: { product: Product } | undefined;
    Cart: {} | undefined;
};