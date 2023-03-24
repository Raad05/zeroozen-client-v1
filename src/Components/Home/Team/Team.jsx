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
        <div id='team-section' className='team mb-20'>
            <h3 className='text-yellow-500 text-5xl text-center py-5'>Our Team</h3>
            <p className='text-white text-2xl text-center'>We started with one mission: To unlock freedom for EVs in Bangladesh.</p>
            <div className="container grid grid-cols-3 m-auto gap-y-5 my-20">
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