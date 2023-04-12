import React from 'react';
import { AiFillLinkedin } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const TeamMember = ({ member }) => {
    const { name, role } = member;

    return (
        <div className="team-member card w-96 bg-gray-900 m-auto rounded-lg hover:scale-105 duration-100 ease-in-out">
            {/* <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="img" /></figure> */}
            <div className="card-body">
                <h5 className="text-white text-center text-xl font-bold">{name}</h5>
                {/* <p className='text-white text-center'>{role}</p> */}
                <Link className='text-gray-200 m-auto hover:text-yellow-500 duration-300 ease-in-out'><AiFillLinkedin size={30}></AiFillLinkedin></Link>
            </div>
        </div>
    );
};

export default TeamMember;