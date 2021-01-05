const BASE = "https://api.b7web.com.br/devsfood/api";

export default{

    getCategories: async() => {
        const response = await fetch(BASE + '/categories');
        const json = await response.json();
        return json;
    },

    getProducts: async() => {
        const response = await fetch(BASE + '/products');
        const json = await response.json();
        return json;
    }

    
};