import { createSlice } from "@reduxjs/toolkit";
import { CartProduct, Product } from "../util/types";

type InitalStateType = {
    cart: CartProduct[];
    productsFeed: Product[];
    category: string;
};

const initialState: InitalStateType = {
    cart: [],
    productsFeed: [],
    category: "",
};

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        updateCart: (state, action) => {
            state.cart = action.payload;
        },
        updateFeed: (state, action) => {
            state.productsFeed = action.payload;
        },
        setCategory: (state, action) => {
            state.category = action.payload;
        },
    },
});

export const { updateCart, updateFeed, setCategory } = productsSlice.actions;

export default productsSlice.reducer;