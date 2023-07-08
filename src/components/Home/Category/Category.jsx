import {useNavigate} from 'react-router-dom'
import "./Category.scss";

const Category = ({ categories }) => {
const navigate = useNavigate()
    return (
        <div className="shop-by-category" id='Categories'>
            <h2 className='sec-heading'>Categories</h2>
            <div className="categories"> 
            
                {
                    categories?.data?.map((item) => (
                        <div key={item.id} className="category" onClick={()=>navigate(`/category/${item.id}`)}>
                            <img src={process.env.REACT_APP_DEV_URL + item.attributes.img.data.attributes.url} alt="" />
                        </div>

                    )
                    )

                }

            </div>

        </div>
    );
};

export default Category;

// import { useNavigate } from "react-router-dom";
// import "./Category.scss";

// const Category = ({ categories }) => {
//     const navigate = useNavigate();
//     return (
//         <div className="shop-by-category">
//             <div className="categories">
//                 {/* {categories?.data?.map((item) => ( */}
//                {categories.data.map((item) => (
//                     <div
//                         key={item.id}
//                         className="category"
//                         onClick={() => navigate(`/category/${item.id}`)}
//                     >
//                         <img
//                             // src={
//                             //     process.env.REACT_APP_STRIPE_APP_DEV_URL +
//                             //     item.attributes.img.data.attributes.url
//                             // }
//                              src={process.env.REACT_APP_DEV_URL + item.attributes.img.data.attributes.url} alt=""
//                         />
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Category;
