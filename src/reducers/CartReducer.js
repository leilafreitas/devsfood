const initialState = {
    products:[],
    address:[],
    discount:0,
    delivery:0
};

export default (state = initialState, action) => {
    let products = [...state.products];
    switch(action.type) {
        case 'ADD_PRODUCT':
            let id =  action.payload.data.id;
            let index = products.findIndex(item=>item.id === id);
            if(index > -1){
                products[index].quantity += action.payload.quantity;
            }else{
                products.push({
                    ...action.payload.data,
                    quantity:action.payload.quantity
                })
            }

            console.log(products);
            return {...state,products};
        break;
        case 'CHANGE_PRODUCT':
            if(products[action.payload.index]){
                switch(action.payload.operation){
                    case '-':
                        products[action.payload.index].quantity--;
                        
                        if(products[action.payload.index].quantity <= 0){
                            products = products.filter((item,key)=> key != action.payload.index);
                        }
                    break;
                    case '+':
                        
                        products[action.payload.index].quantity++;
                        
                    break;
                }
            }
            return {...state, products};
        break;
    }

    return state;
}