import { useAppSelector } from "../hooks";
import CartItem from "../components/CartItem";
import './MyCart.scss';

const MyCart = () => {

    const cartItems = useAppSelector((state) => state.addedToCart);

    const shoppingCart = cartItems.map(item => {
        return (
            <CartItem
                src={item.src}
                title={item.title}
                price={item.price}
                id={item.id}
                key={item.id} />
            )
    })

    const emptyCart = <p>Your cart is empty! Start adding items.</p>

    

    return (
        <section>
            <div className='cart-wrapper'>
                <p className='section-title'>cart</p>
                {cartItems.length === 0 ? emptyCart : shoppingCart}
            </div>
        </section>
    )
}

export default MyCart;