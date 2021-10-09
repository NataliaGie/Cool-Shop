import './Card.scss';
import { AiFillPlusCircle } from 'react-icons/ai';

interface Props {
    title: string,
    price: string,
    id: number,
    src: string,
    click: (item: any) => void
}

const Card = ({title, price, id, src, click}: Props) => (
    <div className='card' key={id}>
        <img className='card-image' src={src} />
        <div className='card-desc'>
            <p className='card-title'>{title}</p>
            <p className='card-price'>{price}</p>
            <AiFillPlusCircle 
                className='add-icon'
                onClick={() => click(item)} />
        </div>
    </div>
);

export default Card;

function item(item: any): void {
    throw new Error('Function not implemented.');
}
