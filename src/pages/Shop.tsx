import { useAppSelector, useAppDispatch } from '../hooks';
import Card from '../components/Card';
import './Shop.scss';
import { addToCart } from '../store/shop';

const Shop = () => {

    const shopItems = useAppSelector((state) => state.items);
    const dispatch = useAppDispatch();

    const onCardClickHandler = (item: any) => {
        return dispatch(addToCart(item))
    }

    return (
        <div className='shop-wrapper'>
            <div className='cards-grid'>
                {shopItems.map(item => {
                    return (
                    <Card
                        click={() => {onCardClickHandler(item)}}
                        src={item.src}
                        title={item.title}
                        price={item.price}
                        id={item.id}
                        key={item.id} />
                    )
                })}
            </div>
        </div>
    );
}

export default Shop;

