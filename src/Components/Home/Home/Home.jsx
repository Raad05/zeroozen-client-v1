import Intro from '../Intro/Intro';
import Monetize from '../Monetize/Monetize';
import Partner from '../Partner/Partner';
import Product from '../Product/Product';
import './Home.css';

const Home = () => {

    return (
        <div className='home'>
            <Intro></Intro>
            <Product></Product>
            <Monetize></Monetize>
            <Partner></Partner>
        </div>
    );
};

export default Home;