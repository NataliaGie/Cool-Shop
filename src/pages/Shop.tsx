import { useAppSelector, useAppDispatch } from '../hooks';
import Card from '../components/Card';
import './Shop.scss';

const Shop = () => {

    const shopItems = useAppSelector((state) => state.items);

    return (
        <div>
            <div className='cards-grid'>
                {shopItems.map(item => {
                    return (
                    <Card
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