import Intro from '../Intro/Intro';
import Product from '../Product/Product';
import './Home.css';
import Team from './Team/Team';

const Home = () => {

    return (
        <div className='home'>
            <Intro></Intro>
            <Product></Product>
            <Team></Team>
        </div>
    );
};

export default Home;