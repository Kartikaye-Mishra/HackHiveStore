import { MdClose } from "react-icons/md";
import { Context } from "../../../utils/context";
import { useContext } from "react";
import prod from '../../../assets/products/earbuds-prod-1.webp'
import "./CartItem.scss";
const CartItem = () => {

    const { cartItems, handleRemoveFromCart, handleCartProductQuantity } = useContext(Context);

    return (
        <div className="cart-products">
            {
                cartItems.map(item => (
                    
                    <div className="cart-product" key={item.id}>
                           
                        <div className="img-container">
                            <img src={process.env.REACT_APP_DEV_URL +
                                item.attributes.img.data[0].attributes.url} alt="" />
                        </div>
                        <div className="prod-details">
                            <span className="name">{item.attributes.title}</span>
                            <MdClose className="close-btn" onClick={()=>handleRemoveFromCart(item)}></MdClose>
                            <div className="quantity-buttons">
                                <span onClick={()=>handleCartProductQuantity('dec',item)}>-</span>
                                <span>{item.attributes.quantity}</span>
                                <span onClick={()=>handleCartProductQuantity('inc',item)}>+</span>
                            </div>
                            <div className="text">
                                <span>{item.attributes.quantity}</span>
                                <span>*</span>
                                <span>{item.attributes.price}</span>  
                                <span>{' '}={' '}</span>
                                <span>&#8377;{item.attributes.price*item.attributes.quantity}</span>
                            </div>
                        </div>

                    </div>


                ))}

        </div>
    );
};

export default CartItem;
