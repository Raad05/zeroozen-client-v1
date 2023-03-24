import React from 'react';
import './Faq.css';

const Faq = () => {
    const qna = [
        {
            question: 'Are you a battery company?',
            answer: 'No, we are much more than that. We are an energy company that now simplifies energy flow between chargers & batteries.'
        },
        {
            question: 'Are you a Vehicle manufacturer (OEM)?',
            answer: 'No. We are an energy company. We partner with OEMs to integrate our battery packs with their vehicles to unlock rapid charging at our charge pump.'
        },
        {
            question: 'You said rapid charge. How much time do you need to charge?',
            answer: 'We unlock 30 minutes now using affordable readily available Li-ion cells. Soon going to unlock in 10 minutes.'
        },
        {
            question: 'Does not rapid charging already exist?',
            answer: 'Yes and No. for about 10-12 years in the world. But yes it is never been scalable in Bangladesh we think. It was done using bulky & expensive tech like supercapacitors. We have made rapid charging affordable and scalable in desi energy train context.'
        }
    ];

    return (
        <div id='faq-section' className='faq container m-auto my-20 py-10 px-60'>
            <h3 className='text-black text-5xl text-center my-10 font-bold'>FAQs</h3>
            <div className="grid grid-cols-2">
                {
                    qna.map(faq =>
                        <div tabIndex={0} className="collapse collapse-plus bg-base-100">
                            <div className="collapse-title text-xl text-white">
                                {faq.question}
                            </div>
                            <div className="collapse-content">
                                <p className='text-white'>{faq.answer}</p>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default Faq;