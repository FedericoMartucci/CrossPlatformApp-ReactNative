import axios from "axios";

const url: string = process.env.API_URL || "https://fakestoreapi.com/products";

const httpRequestService = {
    getSingleProduct: async (id: number) => {
        const res = await axios.get(`${url}/${id}`);
        return res.data;
    },

    getProducts: async () => {
        const res = await axios.get(`${url}`);
        return res.data;
    },

    getInCategory: async (category: string) => {
        const res = await axios.get(`${url}/${category}`);
        return res.data;
    }
}

const useHttpRequestService = () => httpRequestService;

export { useHttpRequestService };