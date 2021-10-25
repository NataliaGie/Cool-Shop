import './Home.scss';
import homepic from '../images/home-image.jpg';
import { useHistory } from 'react-router-dom';

const Home = () => {

    const history = useHistory();

    const goToNextPath = (path: any) => {
        history.push(path);
    }

    return (
    <section className='home-section'>
        <div className='leftHalf'>
            <div className='content-wrapper'>
            <h1>See new collection</h1>
            <button className='home-button' onClick={() => goToNextPath('/shop')}>See now</button>
            </div>
        </div>
        <div className='rightHalf'>
            <img src={homepic}
                 alt='model in white dress' />
            <div className='blueBackground' />
        </div>
    </section>
    );
}

export default Home;

