import { Link } from 'react-router-dom';
import Faq from '../FAQ/Faq';
import Intro from '../Intro/Intro';
import Partner from '../Partner/Partner';
import Product from '../Product/Product';
import Team from '../Team/Team';
import './Home.css';

const Home = () => {

    return (
        <div className='home'>
            <Intro></Intro>
            <Product></Product>
            <Team></Team>
            <Link to='/'><Partner></Partner></Link>
            <Faq></Faq>
        </div>
    );
};

export default Home;