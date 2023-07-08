import Products from "../Products/Products";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import { fetchDataFromApi } from "../../utils/api";
import { useEffect,useContext } from "react";
import { Context } from "../../utils/context";
import "./Home.scss";
const Home = () => {

const {products,setProducts,categories,setCategories} = useContext(Context);
    useEffect(() => {
     
        getCategories();
        getProducts();
    }, [])
    
    const getCategories=()=>{
        fetchDataFromApi("/api/categories?populate=*").then((res)=>{
     
            setCategories(res);
        });
    }
    const getProducts=()=>{
        fetchDataFromApi("/api/products?populate=*").then((res)=>{
    
            setProducts(res);
        });
    }


    return (
    <div>
       
        <Banner></Banner>
    <div className="main-content">
        <div className="layout">

<Category categories={categories}></Category>
<Products products={products} innerPage={false} headingText="Popular Products"></Products>
     
            </div>
    </div>    
    

    </div>
    )
};

export default Home;
