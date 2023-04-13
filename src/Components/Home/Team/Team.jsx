import React from 'react';
import TeamMember from '../TeamMember/TeamMember';

const Team = () => {
    const members = [
        { id: 1, name: 'Nahid Hasan', role: 'Founder and CEO' },
        { id: 2, name: 'Asif Ahnaf', role: 'Chief Evangelist' },
        { id: 3, name: 'Shafayat Hossain', role: 'Chief Strategy Officer' },
        { id: 4, name: 'Irfanul Arefin', role: 'Chief Technology Officer' },
        { id: 5, name: 'Ahnaf Atef', role: 'Chief Product Officer' },
        { id: 6, name: 'Ashabul Yamin Raad', role: 'Software Engineer' },
    ];

    return (
        <div id='team-section' className='team mb-0 md:mb-20' data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">
            <h3 className='text-yellow-500 text-xl md:text-5xl text-center py-5 font-bold'>Our Team</h3>
            <p className='text-white text-md md:text-2xl text-center mx-2'>We are on a mission to unlock freedom for Electric Vehicles in Bangladesh.</p>
            <div className="container grid grid-cols md:grid-cols-3 m-auto gap-y-5 my-20">
                {
                    members.map(member => <TeamMember
                        key={member.id}
                        member={member}
                    >
                    </TeamMember>)
                }
            </div>
        </div>
    );
};

export default Team;