import React from 'react';
import atef from '../../../assets/Team/atef.jpg';
import { FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Team.css';

const Team = () => {
    return (
        <div>
            <h3 className='text-3xl font-bold text-center'>About the Team</h3>
            <div className='grid grid-cols-2 gap-4'>
                <div className='atef'>
                    <div className="card w-96 bg-slate-900 rounded-lg">
                        <figure className="px-10 pt-10">
                            <img src={atef} alt="Ahnaf Atef" className="rounded-xl" />
                        </figure>
                        <div className="card-body px-10">
                            <h2 className="card-title">Ahnaf Atef</h2>
                            <p>Product Engineer</p>
                            <div className="card-actions">
                                <Link><FaLinkedin size={30}></FaLinkedin></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div>Raad</div>
                <div>Irfanul</div>
                <div>Nahid</div>
            </div >
        </div >
    );
};

export default Team;