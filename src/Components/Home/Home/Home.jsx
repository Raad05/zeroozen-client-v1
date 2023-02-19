import Faq from '../Faq/Faq';
import Feature from '../Feature/Feature';
import Product from '../Product/Product';
import Team from '../Team/Team';
import Welcome from '../Welcome/Welcome';
import './Home.css';

const Home = () => {

    return (
        <div>
            <Welcome></Welcome>
            <Feature></Feature>
            <Product></Product>
            <Team></Team>
            <div className='faq-section'>
                <h3 className='text-center text-3xl pb-5 font-bold'>Frequently Asked Questions</h3>
                <div className='grid grid-cols-2 gap-5 px-10 pt-10 pb-40'>
                    <Faq
                        ques="Are you a battery company?"
                        ans="No, we're much more than that. We're an energy company that now simplifies energy flow between chargers & batteries."
                    >
                    </Faq>
                    <Faq
                        ques="Are you a Vehicle manufacturer (OEM)?"
                        ans="No. We're an energy company. We partner with OEMs to integrate our battery packs with their vehicles to unlock rapid charging at our charge pump."
                    >
                    </Faq>
                    <Faq
                        ques="How much time do you need to charge?"
                        ans="We unlock 30 minutes now using affordable readily available Li-ion cells. Soon going to unlock in 10 minutes."
                    >
                    </Faq>
                    <Faq
                        ques="Doesn't rapid charging already exist?"
                        ans="Both Yes and No, for about 10-12 years in the world. But yes it's never been scalable in Bangladesh we presume. It was done using bulky & expensive tech like supercapacitors. We've made rapid charging affordable and scalable in desi energy train context."
                    >
                    </Faq>
                </div>
            </div>
        </div>
    );
};

export default Home;