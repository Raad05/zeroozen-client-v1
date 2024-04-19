import React from 'react';

const Faq = () => {
    const qna = [
        {
            question: 'Are you a battery company?',
            answer: 'No, we are much more than that. We are an energy company that now simplifies energy flow between charger & battery.'
        },
        {
            question: 'Are you a Vehicle manufacturer (OEM)?',
            answer: 'No, we are an energy company. We partner with OEMs to integrate our battery packs with their vehicles to unlock rapid charging at our charge pump.'
        },
        {
            question: 'How much time do you need to charge?',
            answer: 'We unlock 30 minutes now using affordable readily available Li-ion cells.'
        },
        {
            question: 'Doesn\'t rapid charging already exist?',
            answer: 'Yes and No. For about 10-12 years in the world. But yes, it has never been scalable in Bangladesh. It was done using bulky & expensive tech like supercapacitors. We have made rapid charging affordable and scalable in Desi energy train context.'
        }
    ];

    return (
        <div id='faq-section' className='faq container md:m-auto my-0 md:my-20 py-10 md:px-60'>
            <h3 className='text-yellow-500 text-md md:text-5xl text-center my-10 font-bold'>FAQs</h3>
            <div className="grid grid-cols md:grid-cols-2">
                {
                    qna.map(faq =>
                        <div tabIndex={0} className="collapse collapse-plus px-5">
                            <div className="collapse-title text-md md:text-xl text-white">
                                {faq.question}
                            </div>
                            <div className="collapse-content">
                                <p className='text-white text-sm md:text-lg'>{faq.answer}</p>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default Faq;