import './CartItem.scss';
import { AiFillCloseCircle } from 'react-icons/ai';

interface Props {
    title: string,
    price: string,
    id: number,
    src: string,
    count: number,
    onRemoveItem: () => void;
    onAddQuantity: () => void;
    onSubtractQuantity: () => void;
}

const CartItem = 
    ({title, price, id, src, count, onRemoveItem, onAddQuantity, onSubtractQuantity}: Props) => (
        <div key={id} className='cart-item-wrapper'>
            <img src={src} />
            <p className='cart-item-title'>{title}</p>
            <div className='counter-container'>
                <button onClick={onSubtractQuantity} className='counter-button'>-</button>
                <p>{count}</p>
                <button onClick={onAddQuantity} className='counter-button'>+</button>
            </div>
            <p className='cart-item-price'>{price}</p>
            <AiFillCloseCircle
                onClick={onRemoveItem}
                className='delete-icon' />
        </div>
);

export default CartItem;