import { useAppSelector, useAppDispatch } from "../hooks";
import CartItem from "../components/CartItem";
import './MyCart.scss';
import { removeItemFromCart, incrementItem, decrementItem } from '../store/shop';

const MyCart = () => {

    const cartItems = useAppSelector((state) => state.addedToCart);

    const dispatch = useAppDispatch();

    const onRemoveItemHandler = (item: any) => {
        dispatch(removeItemFromCart(item));
    };

    const onAddQuantityHandler = (item: any) => {
        dispatch(incrementItem(item));
    }

    const onSubtractQuantityHandler = (item: any) => {
        dispatch(decrementItem(item));
    }

    const calculateItemPrice = (price: number, quantity: number) => {
        return Number(price * quantity)
    }

    let totalUserPrice = 0;

    Object.keys(cartItems).forEach((item) => {
        totalUserPrice += cartItems[item].count * cartItems[item].price;
    })

    const shoppingCart = cartItems.map((item: { src: string; title: string; count: number; price: any; }, id: number) => {
        return (
            <CartItem
                onRemoveItem={() => onRemoveItemHandler(item)}
                src={item.src}
                title={item.title}
                count={item.count}
                price={`${calculateItemPrice(item.price, item.count)}$`}
                id={id}
                key={id}
                onAddQuantity={() => onAddQuantityHandler(id)}
                onSubtractQuantity={() => onSubtractQuantityHandler(id)} />
            )
    })

    const emptyCart = <p className='empty-container'>Your cart is empty! Start adding items.</p>

    

    return (
        <section className='cart-section'>
            <div className='cart-wrapper'>
                <p className='section-title'>cart</p>
                {cartItems.length === 0 ? emptyCart : shoppingCart}
            </div>
            <p className='total-price'>Total price: {totalUserPrice}$</p>
        </section>
    )
}

export default MyCart;