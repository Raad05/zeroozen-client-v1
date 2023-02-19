import React from 'react';
import './faq.css';

const Faq = ({ ques, ans }) => {

    return (
        <div className='faq'>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-xl">
                <div className="collapse-title text-xl font-medium">
                    <h1 className='font-bold'>{ques}</h1>
                </div>
                <div className="collapse-content">
                    <p className='text-lg'>{ans}</p>
                </div>
            </div>
        </div>
    );
};

export default Faq;