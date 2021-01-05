const BASE = "https://api.b7web.com.br/devsfood/api";

export default{

    getCategories: async() => {
        const response = await fetch(BASE + '/categories');
        const json = await response.json();
        return json;
    },

    getProducts: async(category,page,search) => {
        let filter = {};
        if(category != 0){
            filter.category = category;
        }
        if(page > 0){
            filter.page = page;
        }
        if(search != ''){
            filter.search = search;
        }
        let query = new URLSearchParams(filter).toString();
        const response = await fetch(BASE + '/products?'+ query);
        const json = await response.json();
        return json;
    }

    
};