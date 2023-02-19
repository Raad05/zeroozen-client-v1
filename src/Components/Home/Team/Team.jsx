import React from 'react';
import atef from '../../../assets/Team/atef.jpg';

const Team = () => {
    return (
        <div>
            <h3 className='text-3xl font-bold text-center'>About the Team</h3>
            <div className='grid grid-cols-2 gap-4 text-center'>
                <div>
                    <img className='w-80' src={atef} alt="Ahnaf Atef" />
                </div>
                <div>Raad</div>
                <div>Irfanul</div>
                <div>Nahid</div>
            </div>
        </div>
    );
};

export default Team;