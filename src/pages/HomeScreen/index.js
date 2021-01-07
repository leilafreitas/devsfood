import React,{useState,useEffect} from 'react';
import { useHistory } from "react-router-dom";
import {Container,
    CategoryArea,
    CategoryList,
    ProductArea,
    ProductList,
    ProductPaginationArea,
    ProductPaginationItem
} from './styled';
import ProductItem from '../../components/ProductItem';
import Header from '../../components/Header';
import Modal from '../../components/Modal'
import ModalProduct from '../../components/ModalProduct';
import api from '../../helpers/API';
import CategoryItem from '../../components/CategoryItem';
import ReactTooltip from 'react-tooltip';
import { ModalBody } from '../../components/ModalStyled';

let searchTimer = null;

export default () => {
    const history = useHistory();
    const [search,setSearch] = useState('');
    const [categories,setCategories] = useState([]);
    const [products,setProducts] = useState([]);
    const [totalPages, setTotalPages] = useState(0);

    const [activeCategory,setActiveCategory] = useState(0);
    const [activePage,setActivePage] = useState(1);
    const [activeSearch, setActiveSearch] = useState('');
    const [show,setShow] = useState(false);
    const [modalData,setModalData] = useState({});

    const getProducts = async() => {
        const prods = await api.getProducts(activeCategory,activePage,activeSearch);
        if(prods.error === ''){
            setTotalPages(prods.result.pages);
            setActivePage(prods.result.page);
            setProducts(prods.result.data);
        } 
    }

    const handleProductClick = (data) => {
        setModalData(data);
        setShow(true);
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
    },[]);

    useEffect(()=>{
        setProducts([]);
        getProducts();
    },[activeCategory,activePage,activeSearch]);

    useEffect(()=>{
        clearTimeout(searchTimer);
        searchTimer = setTimeout(()=>{
            setActiveSearch(search);
        },2000)
    },[search]);

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
                                onClick={handleProductClick}
                            />
                        })
                        }
                    </ProductList>
                </ProductArea>

            }
            {totalPages > 0 &&
                <ProductPaginationArea>
                    {Array(totalPages).fill(0).map((item,key)=>{
                        return(
                        <ProductPaginationItem key={key} active={activePage} current={key+1} onClick={()=>setActivePage(key+1)}>
                            {key+1}
                        </ProductPaginationItem>)
                    })

                    }
                </ProductPaginationArea>

            }

            <Modal status={show} setStatus={setShow}>
                <ModalProduct data={modalData} setStatus={setShow}/>
            </Modal>

        </Container>
    );
}