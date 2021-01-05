import React,{useState,useEffect} from 'react';
import { useHistory } from "react-router-dom";
import { Container,CategoryArea,CategoryList,ProductArea,ProductList} from './styled';
import ProductItem from '../../components/ProductItem';
import Header from '../../components/Header';
import api from '../../helpers/API';
import CategoryItem from '../../components/CategoryItem';
import ReactTooltip from 'react-tooltip';

export default () => {
    const history = useHistory();
    const [search,setSearch] = useState('');
    const [categories,setCategories] = useState([]);
    const [products,setProducts] = useState([]);

    const [activeCategory,setActiveCategory] = useState(0);

    const getProducts = async() => {
        const prods = await api.getProducts();
        if(prods.error === ''){
            setProducts(prods.result.data);
        } 
    }

    useEffect(()=>{
        const getCategories = async() => {
            const cat = await api.getCategories();
            if(cat.error === ''){
                setCategories(cat.result)
            }
            ReactTooltip.rebuild();
        }
        getCategories();
    },[])

    useEffect(()=>{
        getProducts();
    },[activeCategory])

    return (
        <Container>
            <Header search={search} onSearch={setSearch}/>
            
            {categories.length > 0 &&
                <CategoryArea>
                    Selecione uma categoria
                    <CategoryList>
                        <CategoryItem 
                        data={{
                            id:0,
                            name:'Todas as categorias',
                            image:"/assets/food-and-restaurant.png"
                        }}
                        activeCategory={activeCategory}
                        setActiveCategory={setActiveCategory}
                        />
                        {
                        categories.map((item,key)=>{
                            return <CategoryItem key={key} data={item} activeCategory={activeCategory} setActiveCategory={setActiveCategory}/>
                        })
                        }    
                    </CategoryList>
                </CategoryArea>
            }

            {products.length > 0 &&
                <ProductArea>
                    <ProductList>
                        {products.map((item,key)=>{
                            return <ProductItem
                                key={key}
                                data={item}
                            />
                        })
                        }
                    </ProductList>
                </ProductArea>

            }

        </Container>
    );
}