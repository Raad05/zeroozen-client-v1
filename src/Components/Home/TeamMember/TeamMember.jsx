import React from 'react';

const TeamMember = ({ member }) => {
    const { name, role } = member;

    return (
        <div className="team-member card w-96 bg-gray-900 m-auto rounded-lg">
            <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
            <div className="card-body">
                <h5 className="card-title text-white">{name}</h5>
                <p className='text-white'>{role}</p>
            </div>
        </div>
    );
};

export default TeamMember;