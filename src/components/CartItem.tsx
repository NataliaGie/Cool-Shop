import './CartItem.scss';

interface Props {
    title: string,
    price: string,
    id: number,
    src: string
}

const CartItem = ({title, price, id, src}: Props) => (
    <div key={id} className='cart-item-wrapper'>
        <img src={src} />
        <p className='cart-item-title'>{title}</p>
        <p>{price}</p>
    </div>
);

export default CartItem;