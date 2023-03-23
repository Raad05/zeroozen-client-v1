import Intro from '../Intro/Intro';
import Product from '../Product/Product';
import './Home.css';

const Home = () => {

    return (
        <div className='home'>
            <Intro></Intro>
            <Product></Product>
        </div>
    );
};

export default Home;