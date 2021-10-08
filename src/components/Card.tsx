import './Card.scss';

interface Props {
    title: string,
    price: number,
    id: number,
    src: string
}

const Card = ({title, price, id, src}: Props) => (
    <div className='card' key={id}>
        <img className='card-image' src={src} />
        <p className='card-title'>{title}</p>
        <p className='card-price'>{price}</p>
    </div>
);

export default Card;